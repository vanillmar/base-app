type NotificationStatus = 'sent' | 'failed' | 'pending'

type NotificationType = 'email' | 'sms' | 'in-app'

export interface Notification {
  id: string
  type: NotificationType
  senderId: string
  recipientId: string | null
  groupId: string | null
  message: string
  status: NotificationStatus
  timestamp: Date
}