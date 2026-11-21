import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'
import { HomePage } from '../features/home/HomePage'
import { SearchResultsPage } from '../features/accommodation/SearchResultsPage'
import { AccommodationDetailPage } from '../features/accommodation/AccommodationDetailPage'
import { LoginPage } from '../features/auth/LoginPage'
import { RegisterPage } from '../features/auth/RegisterPage'
import { ForgotPasswordPage } from '../features/auth/ForgotPasswordPage'
import { AuthProvider, useAuth } from '../features/auth/AuthProvider'
import { RoleRoute } from '../features/auth/RoleRoute'
import { DashboardPage } from '../features/dashboard/DashboardPage'
import { ThemeProvider } from '../features/theme/ThemeProvider'
function LoginEntry() { const {user}=useAuth(); return user ? <Navigate to='/dashboard' replace/> : <LoginPage/> }
function DashboardEntry() { const {user}=useAuth(); if(!user) return <Navigate to='/login' replace/>; return <Navigate to={`/dashboard/${user.role}`} replace/> }
export default function App() { return <ThemeProvider><AuthProvider><Routes><Route element={<SiteLayout/>}><Route path='/' element={<HomePage/>}/><Route path='/search' element={<SearchResultsPage/>}/><Route path='/accommodation/:id' element={<AccommodationDetailPage/>}/></Route><Route path='/login' element={<LoginEntry/>}/><Route path='/register' element={<RegisterPage/>}/><Route path='/forgot-password' element={<ForgotPasswordPage/>}/><Route path='/dashboard' element={<DashboardEntry/>}/><Route element={<RoleRoute allow={['student']}/> }><Route path='/dashboard/student' element={<DashboardPage/>}/></Route><Route element={<RoleRoute allow={['parent']}/> }><Route path='/dashboard/parent' element={<DashboardPage/>}/></Route><Route element={<RoleRoute allow={['owner']}/> }><Route path='/dashboard/owner' element={<DashboardPage/>}/></Route><Route path='*' element={<Navigate to='/' replace/>}/></Routes></AuthProvider></ThemeProvider> }
