import { Link } from 'react-router-dom'
export function Brand({ light = false }: { light?: boolean }) {
 return <Link to='/' className={`brand ${light ? 'brand--light' : ''}`} aria-label='Bookinn home'>
  <span className='brand__mark' aria-hidden='true'><svg viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M20 35s12-11.2 12-20A12 12 0 1 0 8 15c0 8.8 12 20 12 20Z' stroke='currentColor' strokeWidth='2.3' strokeLinejoin='round'/><path d='m13.5 17 6.5-5.2 6.5 5.2v7.2h-13V17Z' stroke='currentColor' strokeWidth='2.1' strokeLinejoin='round'/><path d='M18 24.2v-4.5h4v4.5' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round'/></svg></span>
  <span className='brand__name'>bookinn</span></Link>
}