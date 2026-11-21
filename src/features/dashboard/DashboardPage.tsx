import { ArrowRight, BadgeCheck, BedDouble, CalendarDays, ClipboardList, Heart, Home, Menu, MessageCircle, Plus, Search, ShieldCheck, UserRound, Users, Wallet, X, Pencil, Trash2, Eye, TrendingUp, CheckCircle2, Pause, Play, Building2 } from 'lucide-react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import { accommodations } from '../accommodation/accommodations'
import { initialOwnerListings, initialOwnerInquiries, type OwnerListing, type OwnerInquiry } from '../../data/data'
import { useState } from 'react'
import { ThemeSwitcher } from '../../components/ui/ThemeSwitcher'
function Metric({ icon: Icon, label, value, note }: { icon: typeof Home; label: string; value: string; note: string }) {
  return <article className='dashboard-metric'><span><Icon size={19}/></span><small>{label}</small><strong>{value}</strong><p>{note}</p></article>
}
function StudentDashboard({ name, email, onSignOut }: { name: string; email: string; onSignOut: () => void }) {
 const [section,setSection]=useState<'overview'|'saved'|'account'>('overview')
 const [mobileAsideOpen,setMobileAsideOpen]=useState(false)
 const [savedIds,setSavedIds]=useState<string[]>(['legon-student-room','knust-shared-apartment'])
 const saved=accommodations.filter(home=>savedIds.includes(home.id))
 const go=(next:'overview'|'saved'|'account')=>{setSection(next);setMobileAsideOpen(false)}
 return <div className='student-shell'>
  <aside className={`student-sidebar ${mobileAsideOpen?'is-open':''}`}>
   <div className='student-sidebar-head'><Link to='/' className='student-sidebar-brand' onClick={()=>setMobileAsideOpen(false)}>bookinn<span>.</span></Link><button type='button' className='student-sidebar-close' aria-label='Close student menu' onClick={()=>setMobileAsideOpen(false)}><X size={22}/></button></div>
   <div className='student-sidebar-user'><span>{name.charAt(0).toUpperCase()}</span><div><strong>{name}</strong><small>Student account</small></div></div>
   <div className='student-sidebar-label'>STUDENT MENU</div>
   <nav aria-label='Student links'>
    <button type='button' className={section==='overview'?'is-active':''} onClick={()=>go('overview')}><Home size={17}/> Dashboard</button>
    <Link to='/search' onClick={()=>setMobileAsideOpen(false)}><Search size={17}/> Explore stays <ArrowRight size={13}/></Link>
    <button type='button' className={section==='saved'?'is-active':''} onClick={()=>go('saved')}><Heart size={17}/> Saved stays <span>{savedIds.length}</span></button>
    <button type='button' className={section==='account'?'is-active':''} onClick={()=>go('account')}><UserRound size={17}/> My account</button>
   </nav>
   <div className='student-sidebar-theme'><small>APPEARANCE</small><ThemeSwitcher /></div><div className='student-sidebar-help'><strong>Need help?</strong><p>Get guidance on finding student accommodation in Ghana.</p><Link to='/' onClick={()=>setMobileAsideOpen(false)}>Visit Bookinn <ArrowRight size={13}/></Link></div>
   <button type='button' className='student-sidebar-signout' onClick={onSignOut}>Sign out</button><div className='student-sidebar-foot'>BOOKINN GHANA · DEMO</div>
  </aside>
  <section className='student-workspace'>
   <header className='student-workspace-top'><button type='button' className='student-mobile-menu' aria-label='Toggle student menu' aria-expanded={mobileAsideOpen} onClick={()=>setMobileAsideOpen(open=>!open)}><Menu size={20}/></button><div><small>STUDENT SPACE</small><strong>{section==='overview'?'Dashboard':section==='saved'?'Your saved stays':'My account'}</strong></div><span className='student-demo-tag'>DEMO ACCOUNT</span></header>
   {section==='overview'&&<div className='student-content'>
    <div className='student-heading'><div><span className='eyebrow'>WELCOME TO YOUR STUDENT SPACE</span><h1>Hello, {name.split(' ')[0]}.</h1><p>Keep track of the stays you love and pick up your accommodation search whenever you're ready.</p></div><Link to='/search' className='dashboard-primary'><Search size={16}/> Explore stays</Link></div>
    <div className='student-account-summary'>
     <div className='student-summary-title'><span className='eyebrow'>YOUR ACCOUNT</span><h2>Account overview</h2></div>
     <div className='student-summary-grid'>
      <div><small>Full name</small><strong>{name}</strong></div><div><small>Email address</small><strong>{email}</strong></div><div><small>Account type</small><strong>Student</strong></div><div><small>Saved listings</small><strong>{savedIds.length}</strong></div>
     </div>
     <div className='student-summary-actions'><button type='button' className='student-outline-btn' onClick={()=>go('account')}>View my account</button><button type='button' className='student-outline-btn' onClick={()=>go('saved')}>View saved stays</button></div>
    </div>
    <div className='student-section-heading'><div><span className='eyebrow'>YOUR SHORTLIST</span><h2>Your saved stays</h2><p>Rooms and accommodation you have bookmarked while browsing.</p></div><button type='button' onClick={()=>go('saved')}>See all <ArrowRight size={14}/></button></div>
    {saved.length===0?<div className='student-empty'><Heart/><strong>Nothing saved yet</strong><p>Tap the heart on a stay while browsing to keep track of it here.</p><Link to='/search' className='dashboard-primary'>Explore stays</Link></div>:<div className='student-saved-grid'>{saved.slice(0,2).map(home=><article className='student-saved-card' key={home.id}><img src={`https://images.unsplash.com/${home.image}?auto=format&fit=crop&w=600&q=80`} alt='Illustrative accommodation'/><div><small>{home.type} · {home.city}</small><strong>{home.name}</strong><span>{home.university}</span><b>GH₵{home.price.toLocaleString('en-GH')} <em>/ month*</em></b><div className='student-saved-card-actions'><Link to={`/accommodation/${home.id}`}>View stay <ArrowRight size={13}/></Link><button type='button' onClick={()=>setSavedIds(ids=>ids.filter(id=>id!==home.id))}>Remove</button></div></div></article>)}</div>}
    <p className='student-demo-note'>Sample listings and saved stays are fictional demo content. Prices and availability are not verified.</p>
   </div>}
   {section==='saved'&&<div className='student-content'><div className='student-heading'><div><span className='eyebrow'>YOUR BOOKMARKS</span><h1>Your saved stays</h1><p>Rooms you've bookmarked while browsing.</p></div><Link to='/search' className='dashboard-primary'><Search size={16}/> Explore stays</Link></div>{saved.length===0?<div className='student-empty'><Heart/><strong>Nothing saved yet</strong><p>Tap the heart icon on any listing to keep track of it here.</p><Link to='/search' className='dashboard-primary'>Explore stays</Link></div>:<div className='student-saved-grid'>{saved.map(home=><article className='student-saved-card' key={home.id}><img src={`https://images.unsplash.com/${home.image}?auto=format&fit=crop&w=600&q=80`} alt='Illustrative accommodation'/><div><small>{home.type} · {home.city}</small><strong>{home.name}</strong><span>{home.university}</span><b>GH₵{home.price.toLocaleString('en-GH')} <em>/ month*</em></b><div className='student-saved-card-actions'><Link to={`/accommodation/${home.id}`}>View stay <ArrowRight size={13}/></Link><button type='button' onClick={()=>setSavedIds(ids=>ids.filter(id=>id!==home.id))}>Remove</button></div></div></article>)}</div>}<p className='student-demo-note'>Tap the heart on a stay while browsing to keep track of it here. Demo saved stays are stored only in this page session.</p></div>}
   {section==='account'&&<div className='student-content'><div className='student-heading'><div><span className='eyebrow'>YOUR DETAILS</span><h1>My account</h1><p>Your Bookinn account information.</p></div></div><div className='student-account-summary'><div className='student-profile-identity'><span>{name.charAt(0).toUpperCase()}</span><div><strong>{name}</strong><small>{email}</small></div></div><div className='student-summary-grid'><div><small>Account type</small><strong>Student</strong></div><div><small>Saved listings</small><strong>{savedIds.length}</strong></div></div><div className='student-summary-actions'><button type='button' className='student-outline-btn' onClick={()=>go('saved')}>View saved listings</button><Link to='/search' className='student-outline-btn'>Explore stays</Link></div></div><p className='student-demo-note'>This is a frontend demo account. Account details are sample data and cannot yet be edited or synced.</p></div>}
  </section>
 </div>
}
function ParentDashboard({ name, email }: { name: string; email: string }) {
 const [showSaved,setShowSaved]=useState(false)
 return <div className='parent-account-page'>
  <div className='dashboard-welcome'><div><span className='eyebrow'>YOUR BOOKINN ACCOUNT</span><h1>My account</h1><p>View your account details and return to exploring student accommodation in Ghana.</p></div><Link className='dashboard-primary' to='/search'><Search size={17}/> Explore stays</Link></div>
  {!showSaved?<section className='dashboard-panel parent-account-card'>
   <div className='student-profile-identity'><span>{name.charAt(0).toUpperCase()}</span><div><strong>{name}</strong><small>{email}</small></div></div>
   <div className='student-summary-grid'>
    <div><small>Account type</small><strong>Parent</strong></div>
    <div><small>Saved listings</small><strong>0</strong></div>
   </div>
   <div className='student-summary-actions'>
    <button type='button' className='student-outline-btn' onClick={()=>setShowSaved(true)}>View saved listings</button>
    <Link to='/search' className='student-outline-btn'>Explore stays</Link>
   </div>
  </section>:<section className='dashboard-panel parent-saved-empty'>
   <Heart size={25}/><h2>Your saved listings</h2><p>You haven't saved any accommodation yet. Browse stays and save listings to keep them together here.</p>
   <button type='button' className='dashboard-primary' onClick={()=>setShowSaved(false)}>Back to my account</button>
   <Link to='/search' className='student-outline-btn'>Explore stays</Link>
  </section>}
 </div>
}
function OwnerDashboard({ name, tab, setTab }: { name: string; tab: 'overview'|'listings'|'inquiries'|'students'|'analytics'; setTab: (tab: 'overview'|'listings'|'inquiries'|'students'|'analytics') => void }) {
 const [listings,setListings]=useState<OwnerListing[]>(initialOwnerListings)
 const [inquiries,setInquiries]=useState<OwnerInquiry[]>(initialOwnerInquiries)
 const [formOpen,setFormOpen]=useState(false)
 const [editingId,setEditingId]=useState<number|null>(null)
 const [form,setForm]=useState({name:'',location:'',university:'',price:'',category:'Private room'})
 const [query,setQuery]=useState('')
 const [selectedInquiry,setSelectedInquiry]=useState<number|null>(null)
 const activeCount=listings.filter(x=>x.status==='Active').length
 const confirmedCount=inquiries.filter(x=>x.confirmed).length
 const rentPotential=listings.filter(x=>x.status==='Active').reduce((sum,x)=>sum+x.price,0)
 const filtered=listings.filter(x=>(x.name+' '+x.location+' '+x.university).toLowerCase().includes(query.toLowerCase()))
 const openAdd=()=>{setEditingId(null);setForm({name:'',location:'',university:'',price:'',category:'Private room'});setFormOpen(true)}
 const openEdit=(item:OwnerListing)=>{setEditingId(item.id);setForm({name:item.name,location:item.location,university:item.university,price:String(item.price),category:item.category});setFormOpen(true)}
 const saveListing=()=>{if(!form.name.trim()||!form.location.trim()||!form.university.trim()||!form.price||Number(form.price)<=0)return; if(editingId!==null){setListings(items=>items.map(x=>x.id===editingId?{...x,...form,price:Number(form.price)}:x))}else{setListings(items=>[...items,{id:Math.max(0,...items.map(x=>x.id))+1,...form,price:Number(form.price),status:'Draft'}])}setFormOpen(false)}
 const removeListing=(id:number)=>{if(window.confirm('Delete this sample listing?'))setListings(items=>items.filter(x=>x.id!==id))}
 const toggleStatus=(id:number)=>setListings(items=>items.map(x=>x.id===id?{...x,status:x.status==='Active'?'Paused':'Active'}:x))
 const confirmResident=(id:number)=>setInquiries(items=>items.map(x=>x.id===id?{...x,confirmed:!x.confirmed}:x))
 return <div className='owner-dashboard'>
  <div className='dashboard-welcome'><div><span className='eyebrow'>PROPERTY OWNER SPACE</span><h1>Welcome, {name.split(' ')[0]}.</h1><p>Manage your student accommodation, respond to enquiries and keep resident records organised.</p></div><button className='dashboard-primary' type='button' onClick={openAdd}><Plus size={17}/> Add a property</button></div>
  <nav className='owner-tabs' aria-label='Owner dashboard sections'>{([{id:'overview',label:'Overview',icon:Home},{id:'listings',label:'My listings',icon:Building2},{id:'inquiries',label:'Inquiries',icon:MessageCircle},{id:'students',label:'Students',icon:Users},{id:'analytics',label:'Performance',icon:TrendingUp}] as const).map(item=><button key={item.id} type='button' className={tab===item.id?'is-active':''} onClick={()=>setTab(item.id)}><item.icon size={16}/>{item.label}{item.id==='inquiries'&&<span>{inquiries.filter(x=>!x.confirmed).length}</span>}</button>)}</nav>
  <div className='dashboard-metrics owner-metrics'>
   <Metric icon={Building2} label='Active listings' value={String(activeCount)} note={`${listings.length} total properties`}/>
   <Metric icon={MessageCircle} label='New enquiries' value={String(inquiries.filter(x=>!x.confirmed).length)} note='Sample student requests'/>
   <Metric icon={BadgeCheck} label='Confirmed residents' value={String(confirmedCount)} note='Demo resident records'/>
   <Metric icon={Wallet} label='Monthly rent potential' value={`GH₵${rentPotential.toLocaleString('en-GH')}`} note='Active listings · sample only'/>
  </div>
  {tab==='overview'&&<div className='owner-overview-grid'>
   <section className='dashboard-panel'><div className='dashboard-panel__heading'><div><span className='eyebrow'>PROPERTY OVERVIEW</span><h2>Your accommodation</h2></div><button className='owner-text-action' onClick={()=>setTab('listings')}>Manage listings <ArrowRight size={14}/></button></div>
    {listings.slice(0,3).map(item=><div className='owner-listing-row' key={item.id}><span className='owner-property-icon'><Home size={18}/></span><div className='owner-listing-main'><strong>{item.name}</strong><small>{item.location} · {item.university}</small><b>GH₵{item.price.toLocaleString('en-GH')} / month · {item.category}</b></div><span className={`owner-state owner-state--${item.status.toLowerCase()}`}>{item.status}</span></div>)}
   </section>
   <section className='dashboard-panel'><span className='eyebrow'>RECENT ENQUIRIES</span><h2 className='owner-panel-title'>Students getting in touch</h2>{inquiries.slice(0,3).map(item=><button className='owner-inquiry-preview' key={item.id} onClick={()=>{setSelectedInquiry(item.id);setTab('inquiries')}}><span><strong>{item.student}</strong><small>{item.listing}</small></span><ArrowRight size={15}/></button>)}<button className='owner-text-action owner-view-all' onClick={()=>setTab('inquiries')}>View all enquiries <ArrowRight size={14}/></button></section>
  </div>}
  {tab==='listings'&&<section className='dashboard-panel owner-table-panel'><div className='dashboard-panel__heading'><div><span className='eyebrow'>YOUR PROPERTIES</span><h2>Manage listings</h2></div><button className='dashboard-primary' onClick={openAdd}><Plus size={15}/> Add property</button></div><input className='owner-search' value={query} onChange={e=>setQuery(e.target.value)} placeholder='Search by property, location or university'/>{filtered.length===0?<p className='owner-empty'>No matching properties found.</p>:filtered.map(item=><div className='owner-manage-row' key={item.id}><div className='owner-property-icon'><Home size={18}/></div><div className='owner-listing-main'><strong>{item.name}</strong><small>{item.location} · {item.university}</small><b>GH₵{item.price.toLocaleString('en-GH')} / month · {item.category}</b></div><span className={`owner-state owner-state--${item.status.toLowerCase()}`}>{item.status}</span><div className='owner-row-actions'><button title={item.status==='Active'?'Pause listing':'Activate listing'} aria-label={item.status==='Active'?'Pause listing':'Activate listing'} onClick={()=>toggleStatus(item.id)}>{item.status==='Active'?<Pause size={16}/>:<Play size={16}/>}</button><button title='Edit listing' aria-label='Edit listing' onClick={()=>openEdit(item)}><Pencil size={16}/></button><button title='Delete listing' aria-label='Delete listing' onClick={()=>removeListing(item.id)}><Trash2 size={16}/></button></div></div>)}</section>}
  {tab==='inquiries'&&<section className='dashboard-panel owner-table-panel'><div className='dashboard-panel__heading'><div><span className='eyebrow'>STUDENT MESSAGES</span><h2>Recent inquiries</h2></div><span className='owner-count'>{inquiries.length} total</span></div>{inquiries.length===0?<p className='owner-empty'>No inquiries yet. New student requests will appear here.</p>:inquiries.map(item=><article className={`owner-inquiry-card ${selectedInquiry===item.id?'is-selected':''}`} key={item.id}><div className='owner-inquiry-top'><div><strong>{item.student}</strong><small>{item.email} · {item.date}</small></div><span className={item.confirmed?'owner-state owner-state--active':'owner-state owner-state--draft'}>{item.confirmed?'Resident confirmed':'Enquiry'}</span></div><b>{item.listing}</b><p>{item.message}</p><button className='student-outline-btn' onClick={()=>confirmResident(item.id)}>{item.confirmed?'Undo resident confirmation':'Mark as confirmed resident'}</button></article>)}</section>}
  {tab==='students'&&<section className='dashboard-panel owner-table-panel'><div className='dashboard-panel__heading'><div><span className='eyebrow'>RESIDENT RECORDS</span><h2>Students</h2></div><span className='owner-count'>{confirmedCount} confirmed</span></div><p className='owner-section-copy'>Students marked as confirmed residents from your enquiries. These are fictional demo records.</p>{inquiries.filter(x=>x.confirmed).length===0?<p className='owner-empty'>No confirmed residents yet.</p>:inquiries.filter(x=>x.confirmed).map(item=><div className='owner-student-row' key={item.id}><span className='owner-student-avatar'>{item.student.charAt(0)}</span><div><strong>{item.student}</strong><small>{item.email} · {item.listing}</small></div><BadgeCheck size={18}/></div>)}</section>}
  {tab==='analytics'&&<div className='owner-overview-grid'><section className='dashboard-panel'><span className='eyebrow'>LISTING PERFORMANCE</span><h2 className='owner-panel-title'>Your property portfolio</h2><div className='owner-analytics-stat'><span><Eye size={17}/> Active properties</span><strong>{activeCount}</strong></div><div className='owner-analytics-stat'><span><MessageCircle size={17}/> Student enquiries</span><strong>{inquiries.length}</strong></div><div className='owner-analytics-stat'><span><Users size={17}/> Confirmed residents</span><strong>{confirmedCount}</strong></div></section><section className='dashboard-panel dashboard-tips'><span className='eyebrow'>REVENUE ESTIMATE</span><h2>GH₵{rentPotential.toLocaleString('en-GH')} / month</h2><p>Illustrative asking-rent total for active sample listings. This is not actual revenue, occupancy or payment data.</p><span className='dashboard-inline-note'><ShieldCheck size={16}/> Confirm rent and availability before publishing.</span></section></div>}
  {formOpen&&<div className='owner-modal-backdrop' role='presentation' onClick={()=>setFormOpen(false)}><section className='owner-modal' role='dialog' aria-modal='true' aria-labelledby='owner-form-title' onClick={e=>e.stopPropagation()}><div className='dashboard-panel__heading'><div><span className='eyebrow'>PROPERTY DETAILS</span><h2 id='owner-form-title'>{editingId===null?'Add a property':'Edit property'}</h2></div><button className='owner-modal-close' onClick={()=>setFormOpen(false)} aria-label='Close'><X size={19}/></button></div><label>Property name<input value={form.name} onChange={e=>setForm(x=>({...x,name:e.target.value}))} placeholder='e.g. Legon Student House'/></label><label>Location<input value={form.location} onChange={e=>setForm(x=>({...x,location:e.target.value}))} placeholder='e.g. Accra · Legon'/></label><label>Nearby university<input value={form.university} onChange={e=>setForm(x=>({...x,university:e.target.value}))} placeholder='University of Ghana'/></label><div className='owner-form-pair'><label>Monthly rent (GH₵)<input type='number' min='1' value={form.price} onChange={e=>setForm(x=>({...x,price:e.target.value}))} placeholder='1800'/></label><label>Accommodation type<select value={form.category} onChange={e=>setForm(x=>({...x,category:e.target.value}))}><option>Private room</option><option>Shared apartment</option><option>Hostel bedspace</option><option>Student residence</option></select></label></div><p className='owner-form-note'>Sample listing changes stay in this browser session only. Photo uploads, publication and enquiries need a connected backend.</p><div className='owner-modal-actions'><button className='student-outline-btn' onClick={()=>setFormOpen(false)}>Cancel</button><button className='dashboard-primary' onClick={saveListing}>{editingId===null?'Save sample listing':'Update sample listing'}</button></div></section></div>}
  <p className='student-demo-note'>Owner dashboard is a frontend demo. Properties, enquiries, residents and performance figures are fictional; changes are not saved to a server.</p>
 </div>
}
export function DashboardPage() {
 const { user, signOut } = useAuth()
 const navigate = useNavigate()
 if (!user) return <Navigate to='/login' replace/>
 const [mobileAsideOpen,setMobileAsideOpen]=useState(false)
 const [ownerTab,setOwnerTab]=useState<'overview'|'listings'|'inquiries'|'students'|'analytics'>('overview')
 const roleLabel = user.role === 'owner' ? 'Property owner' : 'Parent / guardian'
 if (user.role === 'student') return <main className='dashboard-page'><StudentDashboard name={user.name} email={user.email} onSignOut={() => { signOut(); navigate('/') }}/></main>
 const ownerItems=[{id:'overview' as const,label:'Dashboard',icon:Home},{id:'listings' as const,label:'My listings',icon:Building2},{id:'inquiries' as const,label:'Inquiries',icon:MessageCircle},{id:'students' as const,label:'Students',icon:Users},{id:'analytics' as const,label:'Performance',icon:TrendingUp}]
 const signOutNow=()=>{signOut();navigate('/')}
 return <main className='dashboard-page'><div className='student-shell account-shell'>
  <aside className={`student-sidebar ${mobileAsideOpen?'is-open':''}`}>
   <div className='student-sidebar-head'><Link to='/' className='student-sidebar-brand' onClick={()=>setMobileAsideOpen(false)}>bookinn<span>.</span></Link><button type='button' className='student-sidebar-close' aria-label='Close dashboard menu' onClick={()=>setMobileAsideOpen(false)}><X size={22}/></button></div>
   <div className='student-sidebar-user'><span>{user.name.charAt(0).toUpperCase()}</span><div><strong>{user.name}</strong><small>{roleLabel}</small></div></div>
   <div className='student-sidebar-label'>{user.role==='owner'?'PROPERTY MANAGEMENT':'PARENT MENU'}</div>
   <nav aria-label={`${roleLabel} navigation`}>
    {user.role==='owner'?ownerItems.map(item=><button key={item.id} type='button' className={ownerTab===item.id?'is-active':''} onClick={()=>{setOwnerTab(item.id);setMobileAsideOpen(false)}}><item.icon size={17}/>{item.label}{item.id==='inquiries'&&<span>2</span>}</button>):<><button type='button' className='is-active' onClick={()=>setMobileAsideOpen(false)}><Home size={17}/> My account</button><Link to='/search' onClick={()=>setMobileAsideOpen(false)}><Search size={17}/> Explore stays <ArrowRight size={13}/></Link></>}
   </nav>
   <div className='student-sidebar-help'><strong>Need help?</strong><p>{user.role==='owner'?'Manage your student accommodation on Bookinn Ghana.':'Find the right student accommodation in Ghana.'}</p><Link to='/' onClick={()=>setMobileAsideOpen(false)}>Visit Bookinn <ArrowRight size={13}/></Link></div>
   <button type='button' className='student-sidebar-signout' onClick={signOutNow}>Sign out</button><div className='student-sidebar-foot'>BOOKINN GHANA · DEMO</div>
  </aside>
  <section className='student-workspace'>
   <header className='student-workspace-top'><button type='button' className='student-mobile-menu' aria-label='Toggle dashboard menu' aria-expanded={mobileAsideOpen} onClick={()=>setMobileAsideOpen(open=>!open)}><Menu size={20}/></button><div><small>{user.role==='owner'?'PROPERTY OWNER SPACE':'PARENT SPACE'}</small><strong>{user.role==='owner'?ownerItems.find(x=>x.id===ownerTab)?.label:'My account'}</strong></div><span className='student-demo-tag'>DEMO ACCOUNT</span></header>
   <div className='account-workspace-content'>
    <div className='dashboard-demo-banner'><BadgeCheck size={16}/> DEMO WORKSPACE <span>All names, activity, properties and figures on this page are fictional sample data.</span></div>
    {user.role==='parent'&&<ParentDashboard name={user.name} email={user.email}/>}
    {user.role==='owner'&&<OwnerDashboard name={user.name} tab={ownerTab} setTab={setOwnerTab}/>}
    <footer className='dashboard-footer'>Bookinn Ghana · Frontend demo · No real bookings, payments or messages are processed.</footer>
   </div>
  </section>
 </div></main>
}
