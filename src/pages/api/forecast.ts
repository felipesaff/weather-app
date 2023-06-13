// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    error?: string
    data?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method === 'GET') {
        const { city } = req.query;
        const { API_URL, API_KEY } = process.env;
        const response = await fetch(`${API_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7`);
        if(!response.ok) return res.status(500).json({error: await response.json()})
        
        return res.status(200).json({data: await response.json()})
    }
  return res.status(500).json({error: `Cannot ${req.method} at /api/current`})
}
