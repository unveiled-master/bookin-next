import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Bath, BedDouble, CalendarDays, Check, GraduationCap, MapPin, ShieldCheck, Wallet, Wifi } from 'lucide-react'
import { accommodations } from './accommodations'

export function AccommodationDetailPage() {
  const { id } = useParams()
  const home = accommodations.find(item => item.id === id)
  const [activeImage,setActiveImage] = useState(0)
  const [showEnquiry,setShowEnquiry] = useState(false)
  const [sent,setSent] = useState(false)
  if (!home) return <div className='container detail-not-found'><h1>We couldn't find that demo listing.</h1><Link to='/search'>Browse accommodation <ArrowRight size={16}/></Link></div>
  const images = home.gallery
  function submitEnquiry(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true) }
  return <div className='detail-page'><div className='container detail-container'>
    <Link to='/search' className='back-to-home'><ArrowLeft size={16}/> Back to search results</Link>
    <div className='detail-title-row'><div><span className='eyebrow'>{home.type.toUpperCase()} · DEMO LISTING</span><h1>{home.name}</h1><p><MapPin size={16}/>{home.city}, Netherlands <span>·</span> {home.university}</p></div><span className={`detail-tag ${home.premium?'is-premium':''}`}>{home.tag}</span></div>
    <div className='detail-gallery'><div className='detail-gallery__main'><img src={`https://images.unsplash.com/${images[activeImage]}?auto=format&fit=crop&w=1500&q=90`} alt={home.name}/></div><div className='detail-gallery__thumbs'>{images.map((image,index)=><button key={image} className={activeImage===index?'is-active':''} onClick={()=>setActiveImage(index)} aria-label={`Show photo ${index+1}`}><img src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=500&q=80`} alt=''/></button>)}</div></div>
    <div className='detail-layout'><main className='detail-main'>
      <section className='detail-overview'><div><h2>A student home in {home.city}</h2><p>{home.description}</p></div><div className='detail-highlights'><span><GraduationCap/> {home.university}</span><span><MapPin/> {home.distance}</span><span><CalendarDays/> Available {home.available}</span></div></section>
      <section className='detail-section'><h2>What this place offers</h2><div className='amenities-grid'>{home.amenities.map(item=><span key={item}><Check size={16}/>{item}</span>)}</div></section>
      <section className='detail-section'><h2>Rental details</h2><div className='rental-facts'><div><small>Rental periods</small><strong>{home.duration.join(', ')}</strong></div><div><small>Furnished</small><strong>{home.furnished?'Yes':'No'}</strong></div><div><small>Utilities</small><strong>{home.bills}</strong></div><div><small>Deposit (demo)</small><strong>€{home.deposit}</strong></div></div></section>
      <section className='detail-note'><ShieldCheck/><div><strong>Check before you commit</strong><p>This is a sample listing for the Bookinn frontend preview. Property verification, contracts, payment and availability checks are not active yet.</p></div></section>
    </main><aside className='detail-booking-card'><span className='detail-price'><strong>€{home.price}</strong> / month</span><p className='detail-price-note'>Illustrative monthly rent · demo listing</p><div className='detail-booking-line'><span>Deposit</span><strong>€{home.deposit}</strong></div><div className='detail-booking-line'><span>Bills</span><strong>{home.bills}</strong></div><div className='detail-booking-line'><span>Available</span><strong>{home.available}</strong></div><button className='button button--full' onClick={()=>{setShowEnquiry(true);setSent(false)}}>Enquire about this place <ArrowRight size={16}/></button><p className='detail-enquiry-caption'>No payment or booking is taken in this demo.</p>{showEnquiry && (sent?<div className='enquiry-success'><Check/><strong>Demo enquiry prepared</strong><p>This preview doesn't send messages yet. Your enquiry flow is ready for backend integration.</p></div>:<form className='enquiry-form' onSubmit={submitEnquiry}><h3>Send an enquiry</h3><label>Your name<input required placeholder='Your name'/></label><label>Email address<input required type='email' placeholder='you@example.com'/></label><label>Message<textarea required rows={3} defaultValue={`Hi, I'm interested in ${home.name}. Could you tell me more?`}/></label><button className='button button--full' type='submit'>Prepare demo enquiry</button></form>)}</aside></div>
    <div className='detail-back-link'><Link to='/search'><ArrowLeft size={15}/> Back to all accommodation</Link></div>
  </div></div>
}
