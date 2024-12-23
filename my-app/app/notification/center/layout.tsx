import { Suspense } from 'react'
import NotificationCenterLoadingPage from './loading'

export default function NotificationCenterLayout({ children }: Readonly<{children: React.ReactNode; }>) {
  return (
    <Suspense fallback={<NotificationCenterLoadingPage />}>
        <div className="flex h-screen bg-gray-100">
            { children }
        </div>
    </Suspense>
    )
}
  