import { type ColumnDef } from '@tanstack/react-table'

export type NotificationLog = {
    id: number;
    sender: string;
    recipient: string;
    type: string;
    status: string;
    timestamp: string;
}

export const columns: ColumnDef<NotificationLog>[] = [
  {
    accessorKey: 'sender',
    header: 'Sender',
  },
  {
    accessorKey: 'recipient',
    header: 'Recipient',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'timestamp',
    header: 'Timestamp',
  },
]