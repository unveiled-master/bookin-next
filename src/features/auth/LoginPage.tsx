import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthLayout, AuthField } from './AuthLayout'
import { Button } from '../../components/ui/Button'
import { signInDemo, demoAccounts, type UserRole } from './demoAuth'
import { useAuth } from './AuthProvider'
const roleNames: Record<UserRole, string> = { student: 'Student', parent: 'Parent / guardian', owner: 'Property owner' }
export function LoginPage() {
 const [email,setEmail]=useState(demoAccounts[0].email); const [password,setPassword]=useState('bookinn123'); const [error,setError]=useState('')
 const navigate=useNavigate(); const location=useLocation(); const {refresh}=useAuth()
 function submit(e:React.FormEvent<HTMLFormElement>) { e.preventDefault(); setError(''); try { signInDemo(email,password); refresh(); navigate(email.trim().toLowerCase() === 'parent@bookinn.test' ? '/dashboard/parent' : email.trim().toLowerCase() === 'owner@bookinn.test' ? '/dashboard/owner' : '/dashboard/student',{replace:true,state:{from:location.state?.from}}) } catch(err) { setError(err instanceof Error?err.message:'Unable to sign in.') } }
 return <AuthLayout title='Good to have you back.' subtitle='Choose your demo role and sign in to your Bookinn space.'><div className='demo-hint'><strong>Try a demo account</strong>{demoAccounts.map(account=><button type='button' key={account.role} onClick={()=>{setEmail(account.email);setPassword('bookinn123');setError('')}}><span>{roleNames[account.role]}</span><b>{account.email}</b></button>)}<small>Shared demo password: bookinn123</small></div><form className='auth-form' onSubmit={submit}><AuthField id='email' label='Email address' type='email' autoComplete='email' placeholder='you@example.com' value={email} onChange={e=>setEmail(e.target.value)} required/><div className='field-with-link'><AuthField id='password' label='Password' type='password' autoComplete='current-password' placeholder='Enter your password' value={password} onChange={e=>setPassword(e.target.value)} required/><Link to='/forgot-password'>Forgot password?</Link></div>{error&&<p className='form-error' role='alert'>{error}</p>}<Button fullWidth type='submit'>Sign in</Button></form><p className='auth-switch'>New to Bookinn? <Link to='/register'>Create an account</Link></p><p className='auth-legal'>Demo sign-in only. No real authentication or personal data is processed.</p></AuthLayout>
}
