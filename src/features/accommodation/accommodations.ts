export type Accommodation = {
  id: string
  name: string
  city: string
  university: string
  distance: string
  price: number
  type: 'Private room' | 'Shared apartment' | 'Hostel'
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

export const accommodations: Accommodation[] = [
  { id: 'legon-student-room', name: 'Legon Student House', city: 'Accra (Legon)', university: 'University of Ghana', distance: 'Short commute to the Legon campus', price: 1800, type: 'Private room', duration: ['Academic year', 'Calendar year'], tag: 'Budget friendly', premium: false, bills: 'Water included; electricity separate', deposit: 1800, available: 'September 2026 (sample)', furnished: true, description: 'A sample furnished room in a shared student home around Legon. The example listing includes a shared kitchen and study-friendly space, with local transport links to campus.', amenities: ['Furnished room', 'Shared kitchen', 'Wi-Fi', 'Water storage', 'Shared outdoor space'], image: 'photo-1522708323590-d24dbb6b0267', gallery: ['photo-1522708323590-d24dbb6b0267', 'photo-1600607687939-ce8a6c25118c', 'photo-1600210492486-724fe5c67fb0'] },
  { id: 'knust-shared-apartment', name: 'Kumasi Campus Shared Apartment', city: 'Kumasi', university: 'Kwame Nkrumah University of Science and Technology (KNUST)', distance: 'Convenient access to the KNUST campus', price: 2200, type: 'Shared apartment', duration: ['Academic year', 'Calendar year'], tag: 'Great value', premium: false, bills: 'Utilities shared by housemates', deposit: 2200, available: 'August 2026 (sample)', furnished: true, description: 'An illustrative shared apartment for students in Kumasi, with furnished common areas and space to study. Confirm the exact location, utility arrangements and tenancy terms with the provider.', amenities: ['Furnished common area', 'Shared kitchen', 'Study space', 'Water storage', 'Laundry area'], image: 'photo-1600607687939-ce8a6c25118c', gallery: ['photo-1600607687939-ce8a6c25118c', 'photo-1600607687920-4e2a09cf159d', 'photo-1600210492486-724fe5c67fb0'] },
  { id: 'ucc-premium-room', name: 'Cape Coast Study Residence', city: 'Cape Coast', university: 'University of Cape Coast (UCC)', distance: 'Student-friendly area with campus transport links', price: 3200, type: 'Private room', duration: ['Academic year', 'Calendar year', 'Flexible'], tag: 'Premium pick', premium: true, bills: 'Water included; electricity separate', deposit: 3200, available: 'September 2026 (sample)', furnished: true, description: 'A higher-comfort illustrative student room in Cape Coast, with a private washroom and dedicated study area. Property details and charges are examples only and must be confirmed.', amenities: ['Furnished room', 'Private washroom', 'Dedicated study area', 'Secure entry', 'Water storage'], image: 'photo-1600210492486-724fe5c67fb0', gallery: ['photo-1600210492486-724fe5c67fb0', 'photo-1600607687920-4e2a09cf159d', 'photo-1600607687939-ce8a6c25118c'] },
  { id: 'upsa-hostel-bedspace', name: 'Accra Student Hostel', city: 'Accra (Madina)', university: 'University of Professional Studies, Accra (UPSA)', distance: 'Accessible to UPSA and nearby campuses', price: 950, type: 'Hostel', duration: ['Semester', 'Short stay'], tag: 'Lower-cost option', premium: false, bills: 'Confirm utilities with provider', deposit: 950, available: 'Available date to be confirmed', furnished: true, description: 'An example shared hostel option for students around Madina. Confirm whether the quoted amount is per person, the payment schedule, facilities and current availability before making any decision.', amenities: ['Bed space', 'Shared washroom', 'Shared kitchen', 'Common area', 'Local transport access'], image: 'photo-1555854877-bab0e564b8d5', gallery: ['photo-1555854877-bab0e564b8d5', 'photo-1522708323590-d24dbb6b0267', 'photo-1600607687939-ce8a6c25118c'] },
]
