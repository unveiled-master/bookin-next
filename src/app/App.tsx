import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'
import { HomePage } from '../features/home/HomePage'
import { LoginPage } from '../features/auth/LoginPage'
import { RegisterPage } from '../features/auth/RegisterPage'
import { ForgotPasswordPage } from '../features/auth/ForgotPasswordPage'
export default function App() { return <Routes><Route element={<SiteLayout />}><Route path='/' element={<HomePage />} /></Route><Route path='/login' element={<LoginPage />} /><Route path='/register' element={<RegisterPage />} /><Route path='/forgot-password' element={<ForgotPasswordPage />} /><Route path='*' element={<HomePage />} /></Routes> }
