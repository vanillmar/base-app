import { type  NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
  const permissionsData = [
    { id: 1, name: 'John Doe', type: 'Email', allowed: true },
    { id: 2, name: 'Jane Smith', type: 'SMS', allowed: false },
    { id: 3, name: 'Alice Johnson', type: 'Push Notification', allowed: true },
    { id: 4, name: 'Bob Brown', type: 'Email', allowed: false },
    { id: 5, name: 'Charlie Davis', type: 'SMS', allowed: true },
  ]

  return NextResponse.json({ data: permissionsData, message: 'Data loaded successfully' }, { status: 200 })
}