import { getFirstNameFromEmail } from '@/lib/utils'
import { type NextRequest, NextResponse } from 'next/server'


export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  // Replace this with your actual authentication logic
  if (email === 'test@example.com' && password === 'password123') {
    return NextResponse.json({ 
      id: 1,
      name: getFirstNameFromEmail(email),
      email,
      role: '',
      avatarUrl: '',
      message: 'Login successful' 
    }, { status: 200 })
  }
  return NextResponse.json({ error_type:'error', error_message: 'Invalid credentials' }, { status: 401 })
}
