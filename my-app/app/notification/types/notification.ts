export interface Notification {
    type: 'academic' | 'event' | 'fee' | 'personal';
    title: string;
    date: string;
    content: string;
    urgent: boolean;
}
  