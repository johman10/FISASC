# FISASC (Finnish Immigration Service Appointment System Checker)

So I'm moving to Helsinki, and they have this tool to make an appointment, a requirement to get a Finnish number and become a resident of Finland. Now, my waiting time right now is 2 months, but everyone has the option to cancel their appointment whenever they want. So I figured to automate a check that let's me know (through Pushbullet) when there is a free spot earlier than my current appointment.

The tool can be found here: https://migri.vihta.com/public/migri/#/reservation

This tool does not make appointments. It only checks for new available times, you will still have to change your booking if you find a time that's good for you.

## How to use

**Step 1:**

First, fetch a session by running:
`curl "https://migri.vihta.com/public/migri/api/sessions"`

From this response make sure to copy the `id` value.

**Step 2:**

Use the session ID to fetch the service categories by running:
`curl "https://migri.vihta.com/public/migri/api/servicecategories" -H "vihta-session: [session-id]"`

Make sure to replace `[session-id]` with the id from the previous request.
Copy the id of what you would fill in in the first input field of the original form.

**Step 3:**

Now fetch the different services within that category:
`curl "https://migri.vihta.com/public/migri/api/servicecategories/[service-category]/services" -H "accept-language: en-US,en" -H "vihta-session: [session-id]"`

Replace `[service-category]` with the value from step 2, and `[session-id]` with the value from step 1.
Copy the value that you would have picked for the second input field of the original form.

**Step 4:**

Use the service to find all locations:
`curl "https://migri.vihta.com/public/migri/api/services/localities" -X POST -H "accept-language: en-US,en" -H "content-type: application/json;charset=UTF-8" -H "vihta-session: [session-id]" --data-binary "{\"serviceSelections\":[{\"values\":[\"[service-id]\"]}],\"extraServices\":[]}"`

Make sure to replace `[service-id]` with the value from step 3, and the `[session-id]` with the value from step 1.

**Step 5:**

Make sure you have a Pushbullet access token, you can get one here: https://www.pushbullet.com/#settings/account, also make sure you know the device you want to push to (currently only one is supported) by going to https://www.pushbullet.com/#devices and click on the device you want to use. In the URL there is an ID which you need.

**Step 6:**

Create a `.env` file with the content of `.env.example` and fill in the values:
 - PUSHBULLET_ACCESS_TOKEN: The values from step 5
 - PUSHBULLET_DEVICE_ID: The values from step 5
 - OFFICE_ID: The value from step 4
 - SERVICE_ID: The value from step 3
 - CURRENT_APPOINTMENT_DATE: Your current appointment date, if you don't have one I recommend to make one now as soon as possible and use this tool to optimise based on that.

**Step 7:**

Run the program with `npm start`.

## Disclaimer

I'm in no way responsible for your appointments, or whatever might not work. I build and maintained this as long as I needed it. But after I have my residence this script my neglect very fast. Do however feel free to fork this repo and update the script to make it work for the current version of the appointment tool.
