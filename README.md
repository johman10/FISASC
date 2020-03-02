# FISASC (Finnish Immigration Service Appointment System Checker)

So I'm moving to Helsinki, and they have this tool to make an appointment with the immigration office (https://migri.vihta.com/public/migri/#/reservation), a requirement to get a Finnish number and become a resident of Finland. My waiting time right now is 2 months, but everyone has the option to cancel their appointment whenever they want. So I figured to automate a check that let's me know (through Pushbullet) when there is a free spot earlier than my current appointment.

This tool does not make appointments. It only checks for new available times, you will still have to change your booking if you find a time that's good for you.

## How to use

### Step 1:
Find the service ID of the service you need. The current services are listed below:

#### Travel document

| Service | ID |
| -- | -- |
| Alien's passport | 28af9eb7-64f7-4e78-aaf4-3242909490c4 |
| Refugee travel document | b8daed03-9b93-426d-a2eb-87e2da3bed64 |

#### Residence permit

| Service | ID |
| -- | -- |
| 1. Work (first and extended permit) | 2906a690-4c8c-4276-bf2b-19b8cf2253f3 |
| 2. Family (first and extended permit) | a87390ae-a870-44d4-80a7-ded974f4cb06 |
| 4. Other grounds (first and extended permit) | f2a99365-022e-44f8-8091-f96043eddc36 |
| 3. Studies (first and extended permit) | d9638dd8-fe83-47e6-8b59-dbfa414cfeb7 |
| 6. Renewal of residence permit card | 4f53e3ce-ad70-4a8b-ad87-5b505aa200c7 |
| 5. Permanent residence permit | 3e03034d-a44b-4771-b1e5-2c4a6f581b7d |

#### Citizenship

| Service | ID |
| -- | -- |
| Citizenship application | 891036c5-a850-46e7-8a57-1995863433c7 |
| Release | 824143a3-abbc-49b2-9331-d2322f3de60b |
| Citizenship declaration | e90676f8-6de2-46f1-8261-28420135e323 |

#### EU registration

| Service | ID |
| -- | -- |
| Card for a family member of an EU citizen | a10919dc-4ada-461b-9041-beb9c603d99e |
| Registration of an EU citizen | e5e795f2-7f35-4b11-ba7d-d1c45cbec182 |

### Step 2
Find an office in the table below that supports the service you're looking trying to make an appointment for, and not down the ID.

| Name | Address | ID | Services |
| --- | --- | --- | --- |
| Rovaniemen palvelupiste | Ruokasenkatu 2 A 96200 Rovaniemi | 891474c3-f7ee-4fe8-a542-38169726503a | 28af9eb7-64f7-4e78-aaf4-3242909490c4, b8daed03-9b93-426d-a2eb-87e2da3bed64, 2906a690-4c8c-4276-bf2b-19b8cf2253f3, a87390ae-a870-44d4-80a7-ded974f4cb06, f2a99365-022e-44f8-8091-f96043eddc36, d9638dd8-fe83-47e6-8b59-dbfa414cfeb7, 4f53e3ce-ad70-4a8b-ad87-5b505aa200c7, 3e03034d-a44b-4771-b1e5-2c4a6f581b7d, 891036c5-a850-46e7-8a57-1995863433c7, 824143a3-abbc-49b2-9331-d2322f3de60b, e90676f8-6de2-46f1-8261-28420135e323, a10919dc-4ada-461b-9041-beb9c603d99e, e5e795f2-7f35-4b11-ba7d-d1c45cbec182 |
| Lappeenrannan palvelupiste | Valtakatu 25 A/B 53100 Lappeenranta | e4ef4cf7-6f46-4382-82e8-15b006c4da14 | 28af9eb7-64f7-4e78-aaf4-3242909490c4, b8daed03-9b93-426d-a2eb-87e2da3bed64, 2906a690-4c8c-4276-bf2b-19b8cf2253f3, a87390ae-a870-44d4-80a7-ded974f4cb06, f2a99365-022e-44f8-8091-f96043eddc36, d9638dd8-fe83-47e6-8b59-dbfa414cfeb7, 4f53e3ce-ad70-4a8b-ad87-5b505aa200c7, 3e03034d-a44b-4771-b1e5-2c4a6f581b7d, 891036c5-a850-46e7-8a57-1995863433c7, 824143a3-abbc-49b2-9331-d2322f3de60b, e90676f8-6de2-46f1-8261-28420135e323, a10919dc-4ada-461b-9041-beb9c603d99e, e5e795f2-7f35-4b11-ba7d-d1c45cbec182 |
| Maarianhaminan palvelupiste | Torggatan 16 A 22100 Mariehamn | 87558cb4-975b-46e9-a411-51ca67c56a08 | 28af9eb7-64f7-4e78-aaf4-3242909490c4, b8daed03-9b93-426d-a2eb-87e2da3bed64, 2906a690-4c8c-4276-bf2b-19b8cf2253f3, a87390ae-a870-44d4-80a7-ded974f4cb06, f2a99365-022e-44f8-8091-f96043eddc36, d9638dd8-fe83-47e6-8b59-dbfa414cfeb7, 4f53e3ce-ad70-4a8b-ad87-5b505aa200c7, 3e03034d-a44b-4771-b1e5-2c4a6f581b7d, 891036c5-a850-46e7-8a57-1995863433c7, 824143a3-abbc-49b2-9331-d2322f3de60b, e90676f8-6de2-46f1-8261-28420135e323, a10919dc-4ada-461b-9041-beb9c603d99e, e5e795f2-7f35-4b11-ba7d-d1c45cbec182 |
| Vaasan palvelupiste | Korsholmanpuistikko 45 65100 Vaasa | 6b5d9667-e526-4136-af5a-b1d20f5d01b3 | 28af9eb7-64f7-4e78-aaf4-3242909490c4, b8daed03-9b93-426d-a2eb-87e2da3bed64, 2906a690-4c8c-4276-bf2b-19b8cf2253f3, a87390ae-a870-44d4-80a7-ded974f4cb06, f2a99365-022e-44f8-8091-f96043eddc36, d9638dd8-fe83-47e6-8b59-dbfa414cfeb7, 4f53e3ce-ad70-4a8b-ad87-5b505aa200c7, 3e03034d-a44b-4771-b1e5-2c4a6f581b7d, 891036c5-a850-46e7-8a57-1995863433c7, 824143a3-abbc-49b2-9331-d2322f3de60b, e90676f8-6de2-46f1-8261-28420135e323, a10919dc-4ada-461b-9041-beb9c603d99e, e5e795f2-7f35-4b11-ba7d-d1c45cbec182 |
| Kuopion palvelupiste | Ajurinkatu 45 70110 Kuopio | 10a1fb12-3783-4a3b-a532-468b93bb85c9 | 28af9eb7-64f7-4e78-aaf4-3242909490c4, b8daed03-9b93-426d-a2eb-87e2da3bed64, 2906a690-4c8c-4276-bf2b-19b8cf2253f3, a87390ae-a870-44d4-80a7-ded974f4cb06, f2a99365-022e-44f8-8091-f96043eddc36, d9638dd8-fe83-47e6-8b59-dbfa414cfeb7, 4f53e3ce-ad70-4a8b-ad87-5b505aa200c7, 3e03034d-a44b-4771-b1e5-2c4a6f581b7d, 891036c5-a850-46e7-8a57-1995863433c7, 824143a3-abbc-49b2-9331-d2322f3de60b, e90676f8-6de2-46f1-8261-28420135e323, a10919dc-4ada-461b-9041-beb9c603d99e, e5e795f2-7f35-4b11-ba7d-d1c45cbec182 |
| Lahden palvelupiste | Kirkkokatu 12 15140 Lahti | a893849c-c0d9-489b-92a3-6dd8a36ef9f9 | 28af9eb7-64f7-4e78-aaf4-3242909490c4, b8daed03-9b93-426d-a2eb-87e2da3bed64, 2906a690-4c8c-4276-bf2b-19b8cf2253f3, a87390ae-a870-44d4-80a7-ded974f4cb06, f2a99365-022e-44f8-8091-f96043eddc36, d9638dd8-fe83-47e6-8b59-dbfa414cfeb7, 4f53e3ce-ad70-4a8b-ad87-5b505aa200c7, 3e03034d-a44b-4771-b1e5-2c4a6f581b7d, 891036c5-a850-46e7-8a57-1995863433c7, 824143a3-abbc-49b2-9331-d2322f3de60b, e90676f8-6de2-46f1-8261-28420135e323, a10919dc-4ada-461b-9041-beb9c603d99e, e5e795f2-7f35-4b11-ba7d-d1c45cbec182 |
| Oulun palvelupiste | Mäkelininkatu 33 90100 Oulu | 11158e99-03ef-4be4-9e89-2ff322bc6e93 | 28af9eb7-64f7-4e78-aaf4-3242909490c4, b8daed03-9b93-426d-a2eb-87e2da3bed64, 2906a690-4c8c-4276-bf2b-19b8cf2253f3, a87390ae-a870-44d4-80a7-ded974f4cb06, f2a99365-022e-44f8-8091-f96043eddc36, d9638dd8-fe83-47e6-8b59-dbfa414cfeb7, 4f53e3ce-ad70-4a8b-ad87-5b505aa200c7, 3e03034d-a44b-4771-b1e5-2c4a6f581b7d, 891036c5-a850-46e7-8a57-1995863433c7, 824143a3-abbc-49b2-9331-d2322f3de60b, e90676f8-6de2-46f1-8261-28420135e323, a10919dc-4ada-461b-9041-beb9c603d99e, e5e795f2-7f35-4b11-ba7d-d1c45cbec182 |
| Helsingin palvelupiste | Käenkuja 3 aA 00500 Helsinki | 25ee3bce-aec9-41a7-b920-74dc09112dd4 | 28af9eb7-64f7-4e78-aaf4-3242909490c4, b8daed03-9b93-426d-a2eb-87e2da3bed64, 2906a690-4c8c-4276-bf2b-19b8cf2253f3, a87390ae-a870-44d4-80a7-ded974f4cb06, f2a99365-022e-44f8-8091-f96043eddc36, d9638dd8-fe83-47e6-8b59-dbfa414cfeb7, 4f53e3ce-ad70-4a8b-ad87-5b505aa200c7, 3e03034d-a44b-4771-b1e5-2c4a6f581b7d, 891036c5-a850-46e7-8a57-1995863433c7, 824143a3-abbc-49b2-9331-d2322f3de60b, e90676f8-6de2-46f1-8261-28420135e323, a10919dc-4ada-461b-9041-beb9c603d99e, e5e795f2-7f35-4b11-ba7d-d1c45cbec182 |
| Tampereen palvelupiste | Tekniikankatu 1, 33720 Tampere  | 08d44a6b-af37-4a30-8462-1d6f5fc5cd61 | 28af9eb7-64f7-4e78-aaf4-3242909490c4, b8daed03-9b93-426d-a2eb-87e2da3bed64, 2906a690-4c8c-4276-bf2b-19b8cf2253f3, a87390ae-a870-44d4-80a7-ded974f4cb06, f2a99365-022e-44f8-8091-f96043eddc36, d9638dd8-fe83-47e6-8b59-dbfa414cfeb7, 4f53e3ce-ad70-4a8b-ad87-5b505aa200c7, 3e03034d-a44b-4771-b1e5-2c4a6f581b7d, 891036c5-a850-46e7-8a57-1995863433c7, 824143a3-abbc-49b2-9331-d2322f3de60b, e90676f8-6de2-46f1-8261-28420135e323, a10919dc-4ada-461b-9041-beb9c603d99e, e5e795f2-7f35-4b11-ba7d-d1c45cbec182 |
| Raision palvelupiste | Nallinkatu 8 21200 Raisio  | 074cc6f8-735b-4ea5-ad9a-9e517fef09bb | b8daed03-9b93-426d-a2eb-87e2da3bed64, 2906a690-4c8c-4276-bf2b-19b8cf2253f3, a87390ae-a870-44d4-80a7-ded974f4cb06, f2a99365-022e-44f8-8091-f96043eddc36, d9638dd8-fe83-47e6-8b59-dbfa414cfeb7, 4f53e3ce-ad70-4a8b-ad87-5b505aa200c7, 3e03034d-a44b-4771-b1e5-2c4a6f581b7d, 891036c5-a850-46e7-8a57-1995863433c7, 824143a3-abbc-49b2-9331-d2322f3de60b, e90676f8-6de2-46f1-8261-28420135e323, a10919dc-4ada-461b-9041-beb9c603d99e, e5e795f2-7f35-4b11-ba7d-d1c45cbec182 |
| International House Helsinki | Lintulahdenkuja 2 00530 Helsinki  | 60407796-efbd-4e21-a8f0-4f0a9b1fbc42 | e5e795f2-7f35-4b11-ba7d-d1c45cbec182 |

### Step 3

Make sure you have a Pushbullet access token, you can get one here: https://www.pushbullet.com/#settings/account, also make sure you know the device you want to push to (currently only one is supported) by going to https://www.pushbullet.com/#devices and click on the device you want to use. In the URL there is an ID which you need.

### Step 4

Create a `.env` file with the content of `.env.example` and fill in the values:
 - PUSHBULLET_ACCESS_TOKEN: The values from step 5
 - PUSHBULLET_DEVICE_ID: The values from step 5
 - OFFICE_ID: The value from step 2
 - SERVICE_ID: The value from step 1
 - CURRENT_APPOINTMENT_DATE: Your current appointment date, if you don't have one I recommend to make one now as soon as possible and use this tool to optimise based on that.

### Step 5:

Run the program with `npm start`.

**NOTE:** If you want to use this tool for multiple offices/services you can create seperate `.env` files and run `source [env-name] && node index.js`.

## Disclaimer

I'm in no way responsible for your appointments, or whatever might not work. I build and maintained this as long as I needed it. But after I have my residence this script my neglect very fast. Do however feel free to fork this repo and update the script to make it work for the current version of the appointment tool.
