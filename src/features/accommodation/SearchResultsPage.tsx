import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BedDouble, CalendarDays, MapPin, Search, SlidersHorizontal, Star, Wallet } from 'lucide-react'
import { accommodations } from './accommodations'

export function SearchResultsPage() {
  const [params, setParams] = useSearchParams()
  const [place, setPlace] = useState(params.get('place') || '')
  const [budget, setBudget] = useState(params.get('budget') || 'Any budget')
  const [duration, setDuration] = useState(params.get('duration') || 'Any duration')
  const [type, setType] = useState(params.get('type') || 'All accommodation')
  const [sort, setSort] = useState('Lowest monthly price')
  const [includePremium, setIncludePremium] = useState(true)
  const results = useMemo(() => {
    const term = place.trim().toLowerCase()
    const [min, max] = budget === 'Up to GH₵1,000' ? [0,1000] : budget === 'GH₵1,000–2,000' ? [1000,2000] : budget === 'GH₵2,000–3,000' ? [2000,3000] : budget === 'GH₵3,000+' ? [3000,Infinity] : [0,Infinity]
    return accommodations.filter(home => {
      const matchesPlace = !term || `${home.city} ${home.university} ${home.name}`.toLowerCase().includes(term)
      const matchesBudget = home.price >= min && home.price <= max
      const matchesDuration = duration === 'Any duration' || home.duration.includes(duration)
      const matchesType = type === 'All accommodation' || home.type === type
      return matchesPlace && matchesBudget && matchesDuration && matchesType && (includePremium || !home.premium)
    }).sort((a,b) => sort === 'Highest monthly price' ? b.price-a.price : a.price-b.price)
  }, [place,budget,duration,type,sort,includePremium])
  function applySearch(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setParams({place,budget,duration,type}) }
  function reset() { setPlace('');setBudget('Any budget');setDuration('Any duration');setType('All accommodation');setSort('Lowest monthly price');setIncludePremium(true);setParams({}) }
  return <div className='results-page'>
    <div className='container results-container'>
      <Link to='/' className='back-to-home'><ArrowLeft size={16}/> Back to Bookinn</Link>
      <div className='results-heading'><span className='eyebrow'>YOUR NEXT STUDENT HOME · GHANA</span><h1>Find a room that feels right.</h1><p>Compare student rooms, shared apartments and hostels around Ghanaian universities by price, location and rental period.</p></div>
      <form className='results-filter-panel' onSubmit={applySearch}>
        <label><span><MapPin size={15}/> University or city</span><input value={place} onChange={e=>setPlace(e.target.value)} placeholder='Try Legon, Accra or KNUST'/></label>
        <label><span><Wallet size={15}/> Monthly budget</span><select value={budget} onChange={e=>setBudget(e.target.value)}><option>Any budget</option><option>Up to GH₵1,000</option><option>GH₵1,000–2,000</option><option>GH₵2,000–3,000</option><option>GH₵3,000+</option></select></label>
        <label><span><CalendarDays size={15}/> Rental period</span><select value={duration} onChange={e=>setDuration(e.target.value)}><option>Any duration</option><option>Academic year</option><option>Calendar year</option><option>Semester</option><option>Short stay</option><option>Flexible</option></select></label>
        <label><span><BedDouble size={15}/> Accommodation</span><select value={type} onChange={e=>setType(e.target.value)}><option>All accommodation</option><option>Private room</option><option>Shared apartment</option><option>Hostel</option></select></label>
        <button className='search-submit' type='submit'><Search size={17}/> Update results</button>
      </form>
      <div className='results-toolbar'><div><strong>{results.length} places to explore</strong><span>Illustrative demo listings · Prices shown in Ghana cedis (GH₵)</span></div><div className='results-sort'><SlidersHorizontal size={16}/><label htmlFor='sort-results'>Sort by</label><select id='sort-results' value={sort} onChange={e=>setSort(e.target.value)}><option>Lowest monthly price</option><option>Highest monthly price</option></select></div></div>
      <div className='results-content'>
        <aside className='results-sidebar'><h3>Refine your search</h3><label className='premium-toggle'><input type='checkbox' checked={includePremium} onChange={e=>setIncludePremium(e.target.checked)}/> Include premium homes</label><p>We put lower-cost options first, while keeping higher-comfort choices available.</p><button className='filter-reset' onClick={reset}>Clear all filters</button></aside>
        <div className='results-list'>
          {results.length ? results.map(home=><article className='result-card' key={home.id}>
            <Link to={`/accommodation/${home.id}`} className='result-card__photo'><img src={`https://images.unsplash.com/${home.image}?auto=format&fit=crop&w=850&q=85`} alt={home.name}/><span>{home.tag}</span></Link>
            <div className='result-card__body'><div className='result-card__meta'><span>{home.type}</span><span><Star size={13} fill='currentColor'/> Sample</span></div><Link to={`/accommodation/${home.id}`}><h2>{home.name}</h2></Link><p className='result-card__location'><MapPin size={14}/>{home.city} · {home.university}</p><p className='result-card__distance'>{home.distance}</p><div className='result-card__facts'><span>{home.duration.slice(0,2).join(' · ')}</span><span>{home.bills}</span></div><div className='result-card__bottom'><p><strong>GH₵{home.price.toLocaleString('en-GH')}</strong> / month*</p><Link to={`/accommodation/${home.id}`}>View details <ArrowRight size={15}/></Link></div></div>
          </article>) : <div className='empty-search'><strong>No demo homes match those filters.</strong><p>Try another Ghanaian university town, a wider budget or a different rental period.</p><button className='button' onClick={reset}>Clear filters</button></div>}
        </div>
      </div>
      <p className='demo-disclaimer'>*Monthly equivalents are illustrative examples only. Some Ghanaian accommodation providers charge by semester or academic year. These are not verified properties, current prices or live availability; confirm all rent, payment schedules, utilities and tenancy terms with the provider.</p>
    </div>
  </div>
}
