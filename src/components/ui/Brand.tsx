import { Link } from 'react-router-dom'
export function Brand({ light = false }: { light?: boolean }) { return <Link to='/' className={`brand ${light ? 'brand--light' : ''}`} aria-label='Bookinn home'><span className='brand__mark'>b.</span><span className='brand__name'>bookinn<span>.</span></span></Link> }
