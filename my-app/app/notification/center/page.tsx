
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import React from 'react'
import { DataTable } from '@/components/custom-ui/datatable'
import axiosInstance from '@/lib/axios'
import { columns as permissionColumns } from '../types/Permission'
import { columns as logColumns } from '../types/NotificationLogs'

async function getServerSideProps() {
  const logsResponse = await axiosInstance.get('/notifications/logs')
  const logsData = await logsResponse.data.data

  const permissionsResponse = await axiosInstance.get('/notifications/permissions')
  const permissionsData = await permissionsResponse.data.data

  return {
    props: {
      logsData,
      permissionsData,
    },
  }
}

export default async function NotificationCenterPage() {
  const { props: { logsData, permissionsData } } = await getServerSideProps()
  return (
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Notification Dashboard</h1>
    
          {/* Overview Cards */}
          <div className="grid grid-cols-3 gap-4">
            <Card title="Total Emails Sent" content="5000" />
            <Card title="Total SMS Sent" content="2000" />
            <Card title="Total In-App Notifications Sent" content="1500" />
          </div>
    
          {/* Tabs for Logs and Permissions */}
          <Tabs defaultValue="logs">
            <TabsList>
              <TabsTrigger value="logs">Logs</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
            </TabsList>
    
            {/* Logs Tab */}
            <TabsContent value="logs">
              <DataTable
                columns={ logColumns }
                data={logsData}
              />
            </TabsContent>
    
            {/* Permissions Tab */}
            <TabsContent value="permissions">
              <DataTable
                columns={ permissionColumns }
                data={ permissionsData }
              />
            </TabsContent>
          </Tabs>
        </div>
  )
}