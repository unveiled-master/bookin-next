export type DemoUser = { name: string; email: string }
const demoEnabled = import.meta.env.VITE_DEMO_MODE !== 'false'
const demoEmail = import.meta.env.VITE_DEMO_EMAIL || 'guest@bookinn.test'
const demoPassword = import.meta.env.VITE_DEMO_PASSWORD || 'bookinn123'
const demoName = import.meta.env.VITE_DEMO_USER_NAME || 'Bookinn Guest'

export function signInDemo(email: string, password: string): DemoUser {
  if (!demoEnabled) throw new Error('Demo sign-in is currently disabled.')
  if (email.trim().toLowerCase() !== demoEmail.toLowerCase() || password !== demoPassword) {
    throw new Error('Those details do not match our demo account. Check the demo credentials and try again.')
  }
  const user = { name: demoName, email: demoEmail }
  sessionStorage.setItem('bookinn-demo-user', JSON.stringify(user))
  return user
}

export function registerDemo(name: string, email: string): DemoUser {
  if (!demoEnabled) throw new Error('Demo registration is currently disabled.')
  const user = { name: name.trim() || 'Bookinn Guest', email: email.trim() }
  sessionStorage.setItem('bookinn-demo-user', JSON.stringify(user))
  return user
}
