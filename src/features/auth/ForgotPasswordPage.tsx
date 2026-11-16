import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MailCheck } from 'lucide-react'
import { AuthLayout, AuthField } from './AuthLayout'
import { Button } from '../../components/ui/Button'
export function ForgotPasswordPage() { const [email,setEmail]=useState(''); const [sent,setSent]=useState(false); return <AuthLayout title='Forgot your password?' subtitle='It happens. Enter your email and we’ll help you get back in.'>{sent?<div className='success-panel'><MailCheck size={34}/><h2>Check your inbox</h2><p>If an account exists for {email}, you’ll receive a password reset link shortly.</p></div>:<form className='auth-form' onSubmit={e=>{e.preventDefault();setSent(true)}}><AuthField id='reset-email' label='Email address' type='email' autoComplete='email' placeholder='you@example.com' value={email} onChange={e=>setEmail(e.target.value)} required/><Button fullWidth type='submit'>Send reset link</Button></form>}<Link to='/login' className='return-link'><ArrowLeft size={15}/> Back to sign in</Link></AuthLayout> }
