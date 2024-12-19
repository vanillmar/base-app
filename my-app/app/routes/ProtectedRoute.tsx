import { type FC } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../providers/AuthProvider'
import { type ProtectedRouteProps } from './type/ProtectedRouteProps'

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component: Component, roles }) => {
  const { user } = useAuth()
  const router = useRouter()

  if (!user) {
    // Redirect to login if not authenticated
    if (typeof window !== 'undefined') {
      router.replace('/login')
    }
    return null // Avoid rendering until redirect is complete
  }

  if (roles && !roles.includes(user.role)) {
    // Redirect to home if the user's role is unauthorized
    if (typeof window !== 'undefined') {
      router.replace('/')
    }
    return null // Avoid rendering until redirect is complete
  }

  return <Component />
}

export default ProtectedRoute
