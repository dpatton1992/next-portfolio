// 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

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ name: 'John Doe' })
}
