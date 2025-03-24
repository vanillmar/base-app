import { Suspense } from 'react'
import UserPageLoading from './loading'

export default function UserLayout({ children }: Readonly<{children: React.ReactNode; }>) {
  return (
    <Suspense fallback={<UserPageLoading />}>
        <div className="flex h-screen bg-gray-100">
            { children }
        </div>
    </Suspense>
    )
}
  