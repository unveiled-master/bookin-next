import { useState } from 'react'
import { Menu, UserRound, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Brand } from '../ui/Brand'
import { Button } from '../ui/Button'
export function Header() {
 const [open,setOpen]=useState(false)
 return <header className='site-header'><div className='container header-inner'><Brand/><nav className='main-nav' aria-label='Main navigation'><a href='/#student-homes'>Student homes</a><a href='/#campuses'>University cities</a><a href='/#why-bookinn'>Why Bookinn</a></nav><div className='header-actions'><Link className='host-link' to='/register'>List your property</Link><Link className='login-link' to='/login'><UserRound size={16}/> Log in</Link><Link to='/register'><Button>Sign up</Button></Link></div><button className='mobile-menu' aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button></div>{open&&<nav className='mobile-nav' aria-label='Mobile navigation'><a href='/#student-homes' onClick={()=>setOpen(false)}>Explore stays</a><a href='/#campuses' onClick={()=>setOpen(false)}>Destinations</a><a href='/#why-bookinn' onClick={()=>setOpen(false)}>Why Bookinn</a><Link to='/login' onClick={()=>setOpen(false)}>Log in</Link><Link to='/register' onClick={()=>setOpen(false)}>Create an account</Link></nav>}</header>
}
