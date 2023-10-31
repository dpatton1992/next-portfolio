// import type { NextApiRequest, NextApiResponse } from 'next'
// import { google } from 'googleapis';
// import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url'

// type CalendarEvent = {
//     kind: string,
//     etag: string,
//     id: string,
//     status: string,
//     htmlLink: string,
//     created: string,
//     updated: string,
//     summary: string,
//     description: string,
//     location: string,
//     creator: {
//         email: string,
//         self: boolean
//     },
//     organizer: {
//         email: string
//     },
//     start: {
//         dateTime: string,
//         timeZone: string
//     },
//     end: {
//         dateTime: string,
//         timeZone: string
//     },
//     transparency: string,
//     visibility: string,
//     iCalUID: string,
//     sequence: number,
//     attendees: [
//         {
//             email: string,
//             self: boolean,
//             responseStatus: string
//         }
//     ],
//     guestsCanInviteOthers: boolean,
//     privateCopy: boolean,
//     reminders: {
//         useDefault: boolean
//     },
//     source: {
//         url: string,
//         title: string
//     },
//     eventType: string
// }

// interface CalendarResponse extends Response {
//     "kind": string,
//     "etag": string,
//     "summary": string,
//     "description": string,
//     "updated": string, // datetime
//     "timeZone": string,
//     "accessRole": string,
//     "defaultReminders": [
//         {
//             "method": string,
//             "minutes": number
//         }
//     ],
//     "nextPageToken": string,
//     "nextSyncToken": string,
//     "items": Array<CalendarEvent>
// }

// type Data = {
//     items: Array<CalendarEvent>
// }

// interface GetScheduleRequest extends NextApiRequest {
//     query: {
//         timeMin: string;
//         timeMax: string;
//     }
// }

// export default async function handler(
//     req: GetScheduleRequest,
//     res: NextApiResponse<Response>
// ) {
//     const { timeMin, timeMax } = req.query
//     function authenticate() {
//         return google.auth2.getAuthInstance()
//             .signIn({ scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.readonly" })
//             .then(function () { console.log("Sign-in successful"); },
//                 function (err) { console.error("Error signing in", err); });
//     }
//     function loadClient() {
//         google.client.setApiKey("YOUR_API_KEY");
//         return google.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
//             .then(function () { console.log("google client loaded for API"); },
//                 function (err) { console.error("Error loading google client for API", err); });
//     }
//     // Make sure the client is loaded and sign-in is complete before calling this method.
//     function execute() {
//         return google.client.calendar.events.list({
//             "calendarId": "pattondt1992@gmail.com",
//             "timeMin": "2023-05-01T04:00:00.000Z",
//             "timeZone": "2023-06-01T04:00:00.000Z"
//         })
//             .then(function (response) {
//                 // Handle the results here (response.result has the parsed body).
//                 res.status(200).json(response.result);
//                 console.log("Response", response);
//             },
//                 function (err) { console.error("Execute error", err); });
//     }
//     // google.client.load("client:auth2", function () {
//     //     google.auth2.init({ client_id: "YOUR_CLIENT_ID" });
//     // });

//     authenticate().then(loadClient);
//     execute();
// }
