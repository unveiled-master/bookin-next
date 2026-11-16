import { useMemo, useState } from 'react'
import { ArrowRight, BadgeCheck, GraduationCap, Heart, MapPin, Search, ShieldCheck, Wallet, Users, BedDouble, CalendarDays, Star } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const homes = [
  { name: 'The Student House', place: 'Delft · near TU Delft', price: 425, rating: '4.8', type: 'Private room', tag: 'Budget friendly', duration: 'Academic year', image: 'photo-1522708323590-d24dbb6b0267', premium: false, details: 'Furnished · Shared kitchen · Utilities included' },
  { name: 'Canal Side Shared Flat', place: 'Utrecht · 12 min to campus', price: 510, rating: '4.9', type: 'Shared apartment', tag: 'Great value', duration: 'Calendar year', image: 'photo-1600607687939-ce8a6c25118c', premium: false, details: 'Furnished · 3 housemates · Bike storage' },
  { name: 'The Study Loft', place: 'Rotterdam · near Erasmus University', price: 695, rating: '4.9', type: 'Private room', tag: 'Premium pick', duration: 'Flexible', image: 'photo-1600210492486-724fe5c67fb0', premium: true, details: 'Private bathroom · Study area · Bills included' },
  { name: 'Campus Corner Hostel', place: 'Leiden · city centre', price: 295, rating: '4.7', type: 'Hostel', tag: 'Lowest monthly price', duration: 'Short stay', image: 'photo-1555854877-bab0e564b8d5', premium: false, details: 'Shared facilities · Furnished · Flexible check-in' },
]

const campuses = [
  { name: 'Delft', school: 'TU Delft and nearby colleges', image: 'photo-1518005020951-eccb494ad742' },
  { name: 'Rotterdam', school: 'Erasmus University and more', image: 'photo-1511818966892-d7d671e672a2' },
  { name: 'Utrecht', school: 'Utrecht University and HU', image: 'photo-1519608487953-e999c86e7455' },
  { name: 'Leiden', school: 'Leiden University', image: 'photo-1516979187457-637546e3f8f2' },
]

const photo = (id: string, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

function HomeCard({ home }: { home: typeof homes[number] }) {
  const [saved, setSaved] = useState(false)
  return <article className='stay-card'>
    <div className='stay-card__image-wrap'>
      <img src={photo(home.image)} alt={home.name} />
      <span className='stay-card__tag'>{home.tag}</span>
      <button className={`favourite-button ${saved ? 'is-saved' : ''}`} aria-label={saved ? `Remove ${home.name} from saved homes` : `Save ${home.name}`} aria-pressed={saved} onClick={() => setSaved(v => !v)}><Heart size={18} fill={saved ? 'currentColor' : 'none'} /></button>
    </div>
    <div className='stay-card__meta'><span>{home.type}</span><span className='rating'><Star size={14} fill='currentColor' /> {home.rating}</span></div>
    <h3>{home.name}</h3>
    <p className='stay-card__location'><MapPin size={14} /> {home.place}</p>
    <p className='home-card__details'>{home.details}</p>
    <div className='stay-card__price'><strong>€{home.price}</strong><span> / month · demo listing</span></div>
    <span className={`home-card__duration ${home.premium ? 'is-premium' : ''}`}>{home.duration}</span>
  </article>
}

function SearchPanel({ onSearch }: { onSearch: (filters: { place: string; budget: string; duration: string; type: string }) => void }) {
  const [place, setPlace] = useState('')
  const [budget, setBudget] = useState('Any budget')
  const [duration, setDuration] = useState('Any duration')
  const [type, setType] = useState('All accommodation')
  return <form className='search-panel student-search' onSubmit={e => { e.preventDefault(); onSearch({ place, budget, duration, type }) }}>
    <label className='search-field'><MapPin /><span><small>University or city</small><input value={place} onChange={e => setPlace(e.target.value)} placeholder='University, city or campus' /></span></label>
    <label className='search-field'><Wallet /><span><small>Monthly budget</small><select value={budget} onChange={e => setBudget(e.target.value)}><option>Any budget</option><option>Up to €350</option><option>€350–€500</option><option>€500–€700</option><option>€700+</option></select></span></label>
    <label className='search-field'><CalendarDays /><span><small>Rental period</small><select value={duration} onChange={e => setDuration(e.target.value)}><option>Any duration</option><option>Academic year</option><option>Calendar year</option><option>Semester</option><option>Short stay</option><option>Flexible</option></select></span></label>
    <label className='search-field'><BedDouble /><span><small>Accommodation</small><select value={type} onChange={e => setType(e.target.value)}><option>All accommodation</option><option>Private room</option><option>Shared apartment</option><option>Hostel</option></select></span></label>
    <button className='search-submit' type='submit'><Search size={18} /> Find a room</button>
  </form>
}

export function HomePage() {
  const [filters, setFilters] = useState({ place: '', budget: 'Any budget', duration: 'Any duration', type: 'All accommodation' })
  const [premiumVisible, setPremiumVisible] = useState(true)
  const filteredHomes = useMemo(() => homes.filter(home => {
    const term = filters.place.trim().toLowerCase()
    const matchesPlace = !term || `${home.name} ${home.place} ${home.type}`.toLowerCase().includes(term)
    const [min, max] = filters.budget === 'Up to €350' ? [0, 350] : filters.budget === '€350–€500' ? [350, 500] : filters.budget === '€500–€700' ? [500, 700] : filters.budget === '€700+' ? [700, Infinity] : [0, Infinity]
    const matchesBudget = home.price >= min && home.price <= max
    const matchesDuration = filters.duration === 'Any duration' || home.duration === filters.duration || home.duration === 'Flexible' && filters.duration !== 'Short stay'
    const matchesType = filters.type === 'All accommodation' || home.type === filters.type
    return matchesPlace && matchesBudget && matchesDuration && matchesType && (premiumVisible || !home.premium)
  }), [filters, premiumVisible])

  return <>
    <section className='hero student-hero'>
      <div className='hero__image' /><div className='hero__overlay' />
      <div className='container hero__content'>
        <span className='hero-kicker'><GraduationCap size={15} /> MADE FOR STUDENT LIFE</span>
        <h1>Your next home.<br /><em>Your next chapter.</em></h1>
        <p>Find a room near your university, meet your new housemates and settle in — with options that respect your student budget.</p>
        <a className='hero-link' href='#student-homes'>Explore student homes <ArrowRight size={17} /></a>
      </div>
      <div className='container hero-search'><SearchPanel onSearch={value => { setFilters(value); navigate('/search?' + new URLSearchParams(value).toString()) }} /></div>
      <div className='hero-caption'>More than a room. A place to belong.</div>
    </section>

    <section className='trust-strip' id='why-bookinn'><div className='container trust-strip__inner'>
      <div><Wallet /><span><strong>Budget comes first</strong><small>Affordable options up front</small></span></div>
      <div><GraduationCap /><span><strong>Close to campus</strong><small>Search around your university</small></span></div>
      <div><CalendarDays /><span><strong>Terms that fit student life</strong><small>Academic, calendar-year and more</small></span></div>
      <div><ShieldCheck /><span><strong>Clear monthly costs</strong><small>Know what you're comparing</small></span></div>
    </div></section>

    <section className='section container' id='student-homes'>
      <div className='section-row'><div className='section-heading'><span className='eyebrow'>ROOMS, FLATS & HOSTELS</span><h2>Find a place that fits your life — and budget</h2><p>{filters.place || filters.budget !== 'Any budget' || filters.duration !== 'Any duration' || filters.type !== 'All accommodation' ? `Showing demo homes matching your search.` : 'Start with affordable rooms and shared homes, with premium spaces when you want a little extra.'}</p></div>
        <button className='subtle-link clear-search' onClick={() => { setFilters({ place: '', budget: 'Any budget', duration: 'Any duration', type: 'All accommodation' }); setPremiumVisible(true) }}>Reset filters <ArrowRight size={16} /></button>
      </div>
      <div className='home-listing-toolbar'><label><input type='checkbox' checked={premiumVisible} onChange={e => setPremiumVisible(e.target.checked)} /> Include premium accommodation</label><span>Monthly prices · Demo listings</span></div>
      {filteredHomes.length ? <div className='stay-grid'>{filteredHomes.map(home => <HomeCard key={home.name} home={home} />)}</div> : <div className='empty-search'><strong>No demo homes match those filters yet.</strong><p>Try a different city, budget or rental period.</p><button className='button' onClick={() => { setFilters({ place: '', budget: 'Any budget', duration: 'Any duration', type: 'All accommodation' }); setPremiumVisible(true) }}>Show all homes</button></div>}
    </section>

    <section className='destination-section campus-section' id='campuses'><div className='container'>
      <div className='section-heading'><span className='eyebrow'>START WITH YOUR STUDIES</span><h2>Find your home near campus</h2><p>Explore student-friendly areas around popular university cities.</p></div>
      <div className='destination-grid'>{campuses.map(campus => <a className='destination-card' href='#student-homes' key={campus.name} onClick={() => setFilters(f => ({ ...f, place: campus.name }))}><img src={photo(campus.image)} alt='' /><span className='destination-card__shade' /><span className='destination-card__copy'><small>{campus.school}</small><strong>{campus.name}</strong></span><ArrowRight className='destination-card__arrow' /></a>)}</div>
    </div></section>

    <section className='editorial-cta student-cta'><div className='editorial-cta__image' /><div className='editorial-cta__copy'><span className='eyebrow'>YOUR STUDENT YEARS, YOUR SPACE</span><h2>Big plans.<br /><em>A place to call home.</em></h2><p>Whether you need a room for a semester, an academic year or longer, Bookinn helps you compare student accommodation with clear monthly prices — from essentials to premium picks.</p><Link to='/register' className='cta-link'>Create your Bookinn account <ArrowRight size={17} /></Link></div></section>
  </>
}
