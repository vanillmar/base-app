import { Suspense } from 'react'
import { DashboardSidebar } from '@/components/custom-ui/dashboard-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import DashboardPageLoading from './loading'

export default function DashboardLayout({ children }: Readonly<{children: React.ReactNode; }>) {
  return (
    <Suspense fallback={<DashboardPageLoading />}>
        <SidebarProvider>
            <div className="flex h-screen bg-gray-100">
                <DashboardSidebar />
                <SidebarInset className="flex-1 overflow-auto">
                    { children }
                </SidebarInset>
            </div>
        </SidebarProvider>
    </Suspense>
    )
}
  