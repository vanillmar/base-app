import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bell, Calendar, CreditCard, Megaphone, School } from 'lucide-react'
import React from 'react'
import type NotificationProps from './types/NotificationProps'
import { type Notification } from './types/notification'

export default function NotificationCenter() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Notification Center</h1>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="fees">Fees</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <NotificationList notifications={allNotifications} />
        </TabsContent>
        <TabsContent value="academic">
          <NotificationList notifications={academicNotifications} />
        </TabsContent>
        <TabsContent value="events">
          <NotificationList notifications={eventNotifications} />
        </TabsContent>
        <TabsContent value="fees">
          <NotificationList notifications={feeNotifications} />
        </TabsContent>
        <TabsContent value="personal">
          <NotificationList notifications={personalNotifications} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

  
const NotificationList:React.FC<NotificationProps> = ({ notifications }) => {
  return (
    <div className="space-y-4">
      {notifications.map((notification, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center gap-4">
            {getNotificationIcon(notification.type)}
            <div>
              <CardTitle>{notification.title}</CardTitle>
              <CardDescription>{notification.date}</CardDescription>
            </div>
            {notification.urgent && (
              <Badge variant="destructive" className="ml-auto">
                Urgent
              </Badge>
            )}
          </CardHeader>
          <CardContent>
            <p>{notification.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function getNotificationIcon(type: string) {
  switch (type) {
    case 'academic':
      return <School className="h-6 w-6" />
    case 'event':
      return <Calendar className="h-6 w-6" />
    case 'fee':
      return <CreditCard className="h-6 w-6" />
    case 'personal':
      return <Bell className="h-6 w-6" />
    default:
      return <Megaphone className="h-6 w-6" />
  }
}

// Sample notification data
const allNotifications: Notification[] = [
  {
    type: 'academic',
    title: 'New Assignment Posted',
    date: '2024-03-15',
    content: 'A new assignment for CS101 has been posted. Due date: March 22, 2024.',
    urgent: false,
  },
  {
    type: 'event',
    title: 'Career Fair',
    date: '2024-03-20',
    content: 'Annual Career Fair will be held on March 25, 2024. Don\'t miss this opportunity!',
    urgent: false,
  },
  {
    type: 'fee',
    title: 'Tuition Fee Reminder',
    date: '2024-03-18',
    content: 'Reminder: Spring semester tuition fee is due on March 31, 2024.',
    urgent: true,
  },
  {
    type: 'personal',
    title: 'Advisor Meeting',
    date: '2024-03-22',
    content: 'Your academic advisor has requested a meeting on March 24, 2024 at 2:00 PM.',
    urgent: false,
  },
]

const academicNotifications = allNotifications.filter(n => n.type === 'academic')
const eventNotifications = allNotifications.filter(n => n.type === 'event')
const feeNotifications = allNotifications.filter(n => n.type === 'fee')
const personalNotifications = allNotifications.filter(n => n.type === 'personal')

