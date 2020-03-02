const fetch = require('node-fetch');
const fs = require('fs');
const PushBullet = require('pushbullet');

const {
  OFFICE_ID,
  SERVICE_ID,
  CURRENT_APPOINTMENT_DATE,
  PUSHBULLET_ACCESS_TOKEN,
  PUSHBULLET_DEVICE_ID,
} = process.env;

function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

process.env.TZ = 'Europe/Helsinki';

(async () => {
  const sessionResponse = await fetch('https://migri.vihta.com/public/migri/api/sessions');
  const session = await sessionResponse.json();
  const token = session.id;
  const today = new Date();
  const currentWeek = getWeekNumber(today);
  const maxDate = new Date(CURRENT_APPOINTMENT_DATE);
  const maxWeek = getWeekNumber(maxDate);
  const weekNumbers = new Array(maxWeek - currentWeek + 1).fill().map((_, i) => currentWeek + i);
  const promises = weekNumbers.map((weekNumber) => fetch(`https://migri.vihta.com/public/migri/api/scheduling/offices/${OFFICE_ID}/2020/w${weekNumber}?end_hours=24&start_hours=0`, {
    headers: {
      'content-type': 'application/json',
      'vihta-session': token,
    },
    body: JSON.stringify({
      serviceSelections: [{
        values: [SERVICE_ID],
      }],
      extraServices: [],
    }),
    method: 'POST',
  }).then((response) => response.json()));
  const responses = await Promise.all(promises);

  const currentTimes = responses.flatMap((response) => (
    response.dailyTimesByOffice.flatMap((times) => (
      times.map((time) => new Date(time.startTimestamp))
    ))
  ));

  const relevantTimes = currentTimes.filter((dateTime) => dateTime < maxDate);
  if (!relevantTimes.length) return;

  const previousTimes = fs.readFileSync(`${__dirname}/.previous`, { encoding: 'utf8' }).split('\n').filter(Boolean);
  const newOptions = relevantTimes.filter((t) => !previousTimes.includes(t.toISOString()));

  if (!newOptions.length) return;

  const title = '[FISASC] New appointment times available';
  const message = newOptions.map((dateString) => {
    const date = new Date(dateString);

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.toLocaleTimeString()}`;
  }).join(' and ');
  const pusher = new PushBullet(PUSHBULLET_ACCESS_TOKEN);

  pusher.note(PUSHBULLET_DEVICE_ID, title, message);

  const newNotifiedFile = [...currentTimes.map((option) => option.toISOString())];
  fs.writeFileSync(`${__dirname}/.previous`, newNotifiedFile.join('\n'));
})();
