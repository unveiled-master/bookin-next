import { demoAccounts, type UserRole, type DemoUser } from '../../data/data'
export { demoAccounts }
export type { UserRole, DemoUser }
const SESSION_KEY = 'bookinn-demo-user'
const demoEnabled = import.meta.env.VITE_DEMO_MODE !== 'false'
const legacyEmail = import.meta.env.VITE_DEMO_EMAIL || 'guest@bookinn.test'
const legacyPassword = import.meta.env.VITE_DEMO_PASSWORD || 'bookinn123'
const legacyName = import.meta.env.VITE_DEMO_USER_NAME || 'Bookinn Guest'

export function getCurrentDemoUser(): DemoUser | null {
  try {
    const value = sessionStorage.getItem(SESSION_KEY)
    if (!value) return null
    const user = JSON.parse(value) as DemoUser
    if (!user?.id || !['student', 'parent', 'owner'].includes(user.role)) return null
    return user
  } catch { return null }
}
export function signInDemo(email: string, password: string): DemoUser {
  if (!demoEnabled) throw new Error('Demo sign-in is currently disabled.')
  const account = demoAccounts.find(item => item.email.toLowerCase() === email.trim().toLowerCase() && item.password === password)
  if (account) {
    const { password: _password, ...user } = account
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user))
    return user
  }
  if (email.trim().toLowerCase() === legacyEmail.toLowerCase() && password === legacyPassword) {
    const user: DemoUser = { id: 'demo-legacy-student', name: legacyName, email: legacyEmail, role: 'student' }
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user))
    return user
  }
  throw new Error('Those details do not match a demo account. Use one of the demo accounts shown below.')
}
export function registerDemo(name: string, email: string, role: UserRole): DemoUser {
  if (!demoEnabled) throw new Error('Demo registration is currently disabled.')
  const user: DemoUser = { id: `demo-${role}-${Date.now()}`, name: name.trim() || 'Bookinn Guest', email: email.trim(), role }
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(user))
  return user
}
export function signOutDemo() { sessionStorage.removeItem(SESSION_KEY) }
