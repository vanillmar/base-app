'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Table, TableRow, TableHeader, TableCell, TableBody } from '@/components/ui/table'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from '@/components/ui/dropdown-menu'
import type User from '@/app/user/type/user'
import { PermissionType } from '../types/PermissionType'

const NotificationCenter = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1, name: 'John Doe', email: 'john@example.com', role: 'Notification Manager', canSend: true, channels: ['Email', 'Push'],
      avatarUrl: ''
    },
    {
      id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Viewer', canSend: false, channels: [],
      avatarUrl: ''
    },
  ])


  const togglePermission = (userId: number, permissionType: PermissionType) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? { ...user, [permissionType]: !user[permissionType] }
          : user
      )
    )
  }

  const updateChannels = (userId: number, channel: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === userId) {
          const channels = user.channels.includes(channel)
            ? user.channels.filter((ch) => ch !== channel)
            : [...user.channels, channel]
          return { ...user, channels }
        }
        return user
      })
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Notification Center</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Can Send Notifications</TableCell>
            <TableCell>Channels</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <Switch
                checked={user.canSend}
                onCheckedChange={() => togglePermission(user.id, PermissionType.CanSend)}
              />
            </TableCell>
            <TableCell>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm">Manage Channels</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {['Email', 'Push', 'SMS'].map((channel) => (
                    <DropdownMenuItem
                      key={channel}
                      onClick={() => updateChannels(user.id, channel)}
                    >
                      <Switch checked={user.channels.includes(channel)} /> {channel}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
            <TableCell>
            <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <h2 className="text-lg font-bold">Edit Permissions for {user.name}</h2>
                  {/* Custom form fields for editing roles/permissions can be added here */}
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>

      {/* Add User Button */}
      <Button className="mt-4" variant="primary">
        Add User
      </Button>
    </div>
  )
}

export default NotificationCenter
