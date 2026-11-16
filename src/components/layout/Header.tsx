import { Menu, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Brand } from '../ui/Brand'
import { Button } from '../ui/Button'
export function Header() { return <header className='site-header'><div className='container header-inner'><Brand /><nav className='main-nav'><a href='#stays'>Explore stays</a><a href='#destinations'>Destinations</a><a href='#why-bookinn'>Why Bookinn</a></nav><div className='header-actions'><Link className='host-link' to='/register'>List your property</Link><Link className='login-link' to='/login'><UserRound size={16}/> Log in</Link><Link to='/register'><Button>Sign up</Button></Link></div><button className='mobile-menu' aria-label='Open menu'><Menu/></button></div></header> }
