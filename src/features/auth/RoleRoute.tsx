import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'
import type { UserRole } from './demoAuth'
export function RoleRoute({ allow }: { allow: UserRole[] }) {
  const { user } = useAuth()
  const location = useLocation()
  if (!user) return <Navigate to='/login' replace state={{ from: location.pathname }} />
  if (!allow.includes(user.role)) return <Navigate to='/dashboard' replace />
  return <Outlet />
}
