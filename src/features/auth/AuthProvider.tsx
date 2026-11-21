import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { getCurrentDemoUser, signOutDemo, type DemoUser } from './demoAuth'
type AuthContextValue = { user: DemoUser | null; refresh: () => void; signOut: () => void }
const AuthContext = createContext<AuthContextValue | null>(null)
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(() => getCurrentDemoUser())
  const value = useMemo(() => ({ user, refresh: () => setUser(getCurrentDemoUser()), signOut: () => { signOutDemo(); setUser(null) } }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
