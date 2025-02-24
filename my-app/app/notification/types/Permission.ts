import { type ColumnDef } from '@tanstack/react-table'

export type Permission = {
  id: number;
  name: string;
  type: string;
  allowed: boolean;
}

export const columns: ColumnDef<Permission>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'allowed',
    header: 'Allowed',
  },
]