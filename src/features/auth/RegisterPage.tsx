import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthLayout, AuthField } from './AuthLayout'
import { Button } from '../../components/ui/Button'
import { registerDemo, type UserRole } from './demoAuth'
import { useAuth } from './AuthProvider'
export function RegisterPage() {
 const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [role,setRole]=useState<UserRole>('student'); const [error,setError]=useState('')
 const navigate=useNavigate(); const {refresh}=useAuth()
 function submit(e:React.FormEvent<HTMLFormElement>) { e.preventDefault(); if(password.length<8){setError('Please use at least 8 characters for your password.');return} try{registerDemo(name,email,role);refresh();navigate('/dashboard')}catch(err){setError(err instanceof Error?err.message:'Unable to create demo account.')} }
 return <AuthLayout title='Your next chapter starts here.' subtitle='Create a Bookinn demo account for the role that best describes you.'><form className='auth-form' onSubmit={submit}><AuthField id='name' label='Full name' autoComplete='name' placeholder='Your name' value={name} onChange={e=>setName(e.target.value)} required/><AuthField id='register-email' label='Email address' type='email' autoComplete='email' placeholder='you@example.com' value={email} onChange={e=>setEmail(e.target.value)} required/><label className='auth-field' htmlFor='account-role'><span>I am joining Bookinn as</span><select id='account-role' value={role} onChange={e=>setRole(e.target.value as UserRole)}><option value='student'>Student</option><option value='parent'>Parent / guardian</option><option value='owner'>Property owner</option></select></label><AuthField id='register-password' label='Create password' type='password' autoComplete='new-password' placeholder='At least 8 characters' minLength={8} value={password} onChange={e=>setPassword(e.target.value)} required/>{error&&<p className='form-error' role='alert'>{error}</p>}<Button fullWidth type='submit'>Create demo account</Button></form><p className='auth-switch'>Already have an account? <Link to='/login'>Sign in</Link></p><p className='auth-legal'>Demo registration is stored only in this browser session. No real account is created.</p></AuthLayout>
}
