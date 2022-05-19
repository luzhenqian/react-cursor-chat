// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'node-fetch';

export default async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  if (req.method === 'GET') {
    try {
        const response = await fetch('https://prsc.yomo.dev/api/v1/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                app_id: process.env.APP_ID,
                app_secret: process.env.APP_SECRET,
            }),
        });
        const data = await response.json();
        const token = data.data;
        if (token) {
          res.status(200).json(token)
        } else {
          res.status(400).json({ msg: data.message })
        }
    } catch (error) {

      res.status(500).json({ msg: errror.message })
    }
  } else {
    res.status(400).json({ msg: '' })
  }
}