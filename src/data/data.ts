/**
 * Bookinn frontend mock data and shared data types.
 * All records in this file are illustrative demo content, not live inventory.
 */

export type UserRole = 'student' | 'parent' | 'owner'
export type DemoUser = { id: string; name: string; email: string; role: UserRole; linkedStudentName?: string }
export type DemoAccount = DemoUser & { password: string }

export type AccommodationType = 'Private room' | 'Shared apartment' | 'Hostel'
export type Accommodation = {
  id: string
  name: string
  city: string
  university: string
  distance: string
  price: number
  type: AccommodationType
  duration: string[]
  tag: string
  premium: boolean
  bills: string
  deposit: number
  available: string
  furnished: boolean
  description: string
  amenities: string[]
  image: string
  gallery: string[]
}

export type HomePreview = {
  name: string
  place: string
  price: number
  rating: string
  type: AccommodationType
  tag: string
  duration: string
  image: string
  premium: boolean
  details: string
}

export type CampusDestination = { name: string; school: string; image: string }

export type OwnerListingStatus = 'Active' | 'Paused' | 'Draft'
export type OwnerListing = { id: number; name: string; location: string; university: string; price: number; category: string; status: OwnerListingStatus }
export type OwnerInquiry = { id: number; student: string; email: string; listing: string; message: string; date: string; confirmed: boolean }

export const demoAccounts: DemoAccount[] = [
  { id: 'demo-student', name: 'Ama Mensah', email: 'student@bookinn.test', password: 'bookinn123', role: 'student' },
  { id: 'demo-parent', name: 'Kwame Mensah', email: 'parent@bookinn.test', password: 'bookinn123', role: 'parent', linkedStudentName: 'Ama Mensah' },
  { id: 'demo-owner', name: 'Nana Owusu', email: 'owner@bookinn.test', password: 'bookinn123', role: 'owner' },
]

export const accommodations: Accommodation[] = [
  { id: 'legon-student-room', name: 'Legon Student House', city: 'Accra (Legon)', university: 'University of Ghana', distance: 'Short commute to the Legon campus', price: 1800, type: 'Private room', duration: ['Academic year', 'Calendar year'], tag: 'Budget friendly', premium: false, bills: 'Water included; electricity separate', deposit: 1800, available: 'September 2026 (sample)', furnished: true, description: 'A sample furnished room in a shared student home around Legon. The example listing includes a shared kitchen and study-friendly space, with local transport links to campus.', amenities: ['Furnished room', 'Shared kitchen', 'Wi-Fi', 'Water storage', 'Shared outdoor space'], image: 'photo-1522708323590-d24dbb6b0267', gallery: ['photo-1522708323590-d24dbb6b0267', 'photo-1600607687939-ce8a6c25118c', 'photo-1600210492486-724fe5c67fb0'] },
  { id: 'knust-shared-apartment', name: 'Kumasi Campus Shared Apartment', city: 'Kumasi', university: 'Kwame Nkrumah University of Science and Technology (KNUST)', distance: 'Convenient access to the KNUST campus', price: 2200, type: 'Shared apartment', duration: ['Academic year', 'Calendar year'], tag: 'Great value', premium: false, bills: 'Utilities shared by housemates', deposit: 2200, available: 'August 2026 (sample)', furnished: true, description: 'An illustrative shared apartment for students in Kumasi, with furnished common areas and space to study. Confirm the exact location, utility arrangements and tenancy terms with the provider.', amenities: ['Furnished common area', 'Shared kitchen', 'Study space', 'Water storage', 'Laundry area'], image: 'photo-1600607687939-ce8a6c25118c', gallery: ['photo-1600607687939-ce8a6c25118c', 'photo-1600607687920-4e2a09cf159d', 'photo-1600210492486-724fe5c67fb0'] },
  { id: 'ucc-premium-room', name: 'Cape Coast Study Residence', city: 'Cape Coast', university: 'University of Cape Coast (UCC)', distance: 'Student-friendly area with campus transport links', price: 3200, type: 'Private room', duration: ['Academic year', 'Calendar year', 'Flexible'], tag: 'Premium pick', premium: true, bills: 'Water included; electricity separate', deposit: 3200, available: 'September 2026 (sample)', furnished: true, description: 'A higher-comfort illustrative student room in Cape Coast, with a private washroom and dedicated study area. Property details and charges are examples only and must be confirmed.', amenities: ['Furnished room', 'Private washroom', 'Dedicated study area', 'Secure entry', 'Water storage'], image: 'photo-1600210492486-724fe5c67fb0', gallery: ['photo-1600210492486-724fe5c67fb0', 'photo-1600607687920-4e2a09cf159d', 'photo-1600607687939-ce8a6c25118c'] },
  { id: 'upsa-hostel-bedspace', name: 'Accra Student Hostel', city: 'Accra (Madina)', university: 'University of Professional Studies, Accra (UPSA)', distance: 'Accessible to UPSA and nearby campuses', price: 950, type: 'Hostel', duration: ['Semester', 'Short stay'], tag: 'Lower-cost option', premium: false, bills: 'Confirm utilities with provider', deposit: 950, available: 'Available date to be confirmed', furnished: true, description: 'An example shared hostel option for students around Madina. Confirm whether the quoted amount is per person, the payment schedule, facilities and current availability before making any decision.', amenities: ['Bed space', 'Shared washroom', 'Shared kitchen', 'Common area', 'Local transport access'], image: 'photo-1555854877-bab0e564b8d5', gallery: ['photo-1555854877-bab0e564b8d5', 'photo-1522708323590-d24dbb6b0267', 'photo-1600607687939-ce8a6c25118c'] },
]

export const homePreviews: HomePreview[] = [
  { name: 'Legon Student House', place: 'Accra (Legon) · near the University of Ghana', price: 1800, rating: 'Sample', type: 'Private room', tag: 'Budget friendly', duration: 'Academic year', image: 'photo-1522708323590-d24dbb6b0267', premium: false, details: 'Furnished · Shared kitchen · Utility details to confirm' },
  { name: 'Kumasi Campus Shared Apartment', place: 'Kumasi · 12 min to campus', price: 2200, rating: 'Sample', type: 'Shared apartment', tag: 'Great value', duration: 'Calendar year', image: 'photo-1600607687939-ce8a6c25118c', premium: false, details: 'Furnished · Shared living areas · Utility details to confirm' },
  { name: 'Cape Coast Study Residence', place: 'Cape Coast · near University of Cape Coast', price: 3200, rating: 'Sample', type: 'Private room', tag: 'Premium pick', duration: 'Flexible', image: 'photo-1600210492486-724fe5c67fb0', premium: true, details: 'Private washroom · Study area · Utility details to confirm' },
  { name: 'Accra Student Hostel', place: 'Accra (Madina) · campus area', price: 950, rating: 'Sample', type: 'Hostel', tag: 'Lowest monthly price', duration: 'Short stay', image: 'photo-1555854877-bab0e564b8d5', premium: false, details: 'Shared facilities · Furnished · Availability to confirm' },
]

export const campusDestinations: CampusDestination[] = [
  { name: 'Accra (Legon)', school: 'University of Ghana and nearby colleges', image: 'photo-1518005020951-eccb494ad742' },
  { name: 'Cape Coast', school: 'University of Cape Coast and more', image: 'photo-1511818966892-d7d671e672a2' },
  { name: 'Kumasi', school: 'KNUST and nearby colleges', image: 'photo-1519608487953-e999c86e7455' },
  { name: 'Accra (Madina)', school: 'UPSA and nearby colleges', image: 'photo-1516979187457-637546e3f8f2' },
]

export const initialOwnerListings: OwnerListing[] = [
  { id: 1, name: 'Legon Student House', location: 'Accra · Legon', university: 'University of Ghana', price: 1800, category: 'Private room', status: 'Active' },
  { id: 2, name: 'Madina Student Hostel', location: 'Accra · Madina', university: 'University of Professional Studies, Accra', price: 950, category: 'Hostel bedspace', status: 'Draft' },
  { id: 3, name: 'Kumasi Campus Shared Apartment', location: 'Kumasi', university: 'KNUST', price: 2200, category: 'Shared apartment', status: 'Active' },
]

export const initialOwnerInquiries: OwnerInquiry[] = [
  { id: 1, student: 'Akosua Agyeman', email: 'akosua@example.test', listing: 'Legon Student House', message: 'Is the room still available for the next academic year?', date: 'Today', confirmed: false },
  { id: 2, student: 'Yaw Boateng', email: 'yaw@example.test', listing: 'Kumasi Campus Shared Apartment', message: 'Could you confirm what is included in the rent?', date: 'Yesterday', confirmed: false },
  { id: 3, student: 'Esi Mensah', email: 'esi@example.test', listing: 'Legon Student House', message: 'I have moved in and would like to confirm my resident status.', date: '12 Nov', confirmed: true },
]

/** Default saved listing IDs for the student demo profile. */
export const initialStudentSavedAccommodationIds: string[] = ['legon-student-room', 'knust-shared-apartment']
