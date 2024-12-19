import { getFirstNameFromEmail } from '@/lib/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    // Replace this with your actual authentication logic
    if (email === 'test@example.com' && password === 'password123') {
      return res.status(200).json({ 
        id: 1,
        name: getFirstNameFromEmail(email),
        email,
        role: '',
        canSend: false,
        channels: [],
        avatarUrl: '',
        message: 'Login successful' 
      })
    }
    return res.status(401).json({ error_type:'error', error_message: 'Invalid credentials' })
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
