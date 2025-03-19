import { NextResponse } from 'next/server'

export async function GET() {
  const logsData = [
    { id: 1,  sender: 'Alice', recipient: 'Bob', type: 'Email', status: 'Sent', timestamp: '2023-10-01 10:00:00' },
    { id: 2, sender: 'Charlie', recipient: 'Dave', type: 'SMS', status: 'Failed', timestamp: '2023-10-01 11:00:00' },
    { id: 3, sender: 'Eve', recipient: 'Frank', type: 'Push Notification', status: 'Delivered', timestamp: '2023-10-01 12:00:00' },
    { id: 4, sender: 'Grace', recipient: 'Heidi', type: 'Email', status: 'Pending', timestamp: '2023-10-01 13:00:00' },
    { id: 5, sender: 'Ivan', recipient: 'Judy', type: 'SMS', status: 'Sent', timestamp: '2023-10-01 14:00:00' },
  ]

  return NextResponse.json({ data: logsData, message: 'Data loaded successfully' }, { status: 200 })

}