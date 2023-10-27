import type { NextApiRequest, NextApiResponse } from 'next'
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url'
import { authenticate } from '@google-cloud/local-auth';

type CalendarEvent = {
    kind: string,
    etag: string,
    id: string,
    status: string,
    htmlLink: string,
    created: string,
    updated: string,
    summary: string,
    description: string,
    location: string,
    creator: {
        email: string,
        self: boolean
    },
    organizer: {
        email: string
    },
    start: {
        dateTime: string,
        timeZone: string
    },
    end: {
        dateTime: string,
        timeZone: string
    },
    transparency: string,
    visibility: string,
    iCalUID: string,
    sequence: number,
    attendees: [
        {
            email: string,
            self: boolean,
            responseStatus: string
        }
    ],
    guestsCanInviteOthers: boolean,
    privateCopy: boolean,
    reminders: {
        useDefault: boolean
    },
    source: {
        url: string,
        title: string
    },
    eventType: string
}

interface CalendarResponse extends Response {
    "kind": string,
    "etag": string,
    "summary": string,
    "description": string,
    "updated": string, // datetime
    "timeZone": string,
    "accessRole": string,
    "defaultReminders": [
        {
            "method": string,
            "minutes": number
        }
    ],
    "nextPageToken": string,
    "nextSyncToken": string,
    "items": Array<CalendarEvent>
}

type Data = {
    items: Array<CalendarEvent>
}

interface GetScheduleRequest extends NextApiRequest {
    query: {
        timeMin: string;
        timeMax: string;
    }
}

export default async function handler(
    req: GetScheduleRequest,
    res: NextApiResponse<Response>
) {
    const { timeMin, timeMax } = req.query
    // const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/pattondt1992%40gmail.com/events' + new URLSearchParams({ timeMin, timeMax }), {
    const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/pattondt1992%40gmail.com/events?timeMin=2023-05-01T04%3A00%3A00.000Z&timeZone=2023-06-01T04%3A00%3A00.000Z&key=' + process.env.GCAL_KEY, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.GCAL_KEY}`
        }
    });
    console.log(response)
    const body = response.body as ReadableStream<Uint8Array>;
    // const reader = body.getReader();
    // const json = await reader.read();
    // console.log(json)
    console.log(body)
    // res.status(200).json(response)
    res.status(200).json({ items: 'penis' })
}
