import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthLayout, AuthField } from './AuthLayout'
import { Button } from '../../components/ui/Button'
import { signInDemo } from './demoAuth'
export function LoginPage() {
  const [email,setEmail]=useState(import.meta.env.VITE_DEMO_EMAIL || 'guest@bookinn.test')
  const [password,setPassword]=useState(import.meta.env.VITE_DEMO_PASSWORD || 'bookinn123')
  const [error,setError]=useState('')
  const navigate=useNavigate()
  function submit(e:React.FormEvent<HTMLFormElement>) { e.preventDefault(); setError(''); try { signInDemo(email,password); navigate('/') } catch (err) { setError(err instanceof Error ? err.message : 'Unable to sign in.') } }
  return <AuthLayout title='Good to have you back.' subtitle='Your next chapter is waiting. Sign in to pick up where you left off.'><div className='demo-hint'><strong>Demo account</strong><span>{import.meta.env.VITE_DEMO_EMAIL || 'guest@bookinn.test'} · {import.meta.env.VITE_DEMO_PASSWORD || 'bookinn123'}</span></div><form className='auth-form' onSubmit={submit}><AuthField id='email' label='Email address' type='email' autoComplete='email' placeholder='you@example.com' value={email} onChange={e=>setEmail(e.target.value)} required/><div className='field-with-link'><AuthField id='password' label='Password' type='password' autoComplete='current-password' placeholder='Enter your password' value={password} onChange={e=>setPassword(e.target.value)} required/><Link to='/forgot-password'>Forgot password?</Link></div>{error && <p className='form-error' role='alert'>{error}</p>}<Button fullWidth type='submit'>Sign in</Button></form><div className='auth-divider'><span/>or continue with<span/></div><button className='google-button' type='button' onClick={()=>{setError('Google sign-in is represented as a frontend demo only.')}}><b>G</b> Continue with Google</button><p className='auth-switch'>New to Bookinn? <Link to='/register'>Create an account</Link></p><p className='auth-legal'>By continuing, you agree to our Terms of Service and Privacy Policy.</p></AuthLayout>
}
