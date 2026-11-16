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
  { id: 'delft-student-house', name: 'The Student House', city: 'Delft', university: 'TU Delft', distance: '8 min by bike to campus', price: 425, type: 'Private room', duration: ['Academic year', 'Calendar year'], tag: 'Budget friendly', premium: false, bills: 'Included', deposit: 425, available: '1 September 2026', furnished: true, description: 'A bright, furnished room in a friendly shared student home. There is space to study, a shared kitchen for cooking together and easy access to campus and the city centre.', amenities: ['Furnished room', 'Shared kitchen', 'High-speed Wi-Fi', 'Bike storage', 'Laundry facilities'], image: 'photo-1522708323590-d24dbb6b0267', gallery: ['photo-1522708323590-d24dbb6b0267', 'photo-1600607687939-ce8a6c25118c', 'photo-1600210492486-724fe5c67fb0'] },
  { id: 'utrecht-shared-flat', name: 'Canal Side Shared Flat', city: 'Utrecht', university: 'Utrecht University', distance: '12 min by bike to campus', price: 510, type: 'Shared apartment', duration: ['Calendar year', 'Flexible'], tag: 'Great value', premium: false, bills: 'Not included', deposit: 750, available: '15 August 2026', furnished: true, description: 'Share a comfortable city apartment with other students. The home has a welcoming living room, a practical kitchen and good connections to university buildings.', amenities: ['Furnished', 'Shared living room', 'Bike storage', 'Balcony', 'Washing machine'], image: 'photo-1600607687939-ce8a6c25118c', gallery: ['photo-1600607687939-ce8a6c25118c', 'photo-1600607687920-4e2a09cf159d', 'photo-1600210492486-724fe5c67fb0'] },
  { id: 'rotterdam-study-loft', name: 'The Study Loft', city: 'Rotterdam', university: 'Erasmus University Rotterdam', distance: '10 min by metro to campus', price: 695, type: 'Private room', duration: ['Academic year', 'Calendar year', 'Flexible'], tag: 'Premium pick', premium: true, bills: 'Included', deposit: 695, available: '1 September 2026', furnished: true, description: 'A more elevated student living option with a private bathroom, dedicated study area and shared resident facilities. A little extra comfort while staying connected to campus.', amenities: ['Private bathroom', 'Dedicated study area', 'Bills included', 'Secure entry', 'Resident lounge'], image: 'photo-1600210492486-724fe5c67fb0', gallery: ['photo-1600210492486-724fe5c67fb0', 'photo-1600607687920-4e2a09cf159d', 'photo-1600607687939-ce8a6c25118c'] },
  { id: 'leiden-campus-hostel', name: 'Campus Corner Hostel', city: 'Leiden', university: 'Leiden University', distance: '6 min walk to city campus', price: 295, type: 'Hostel', duration: ['Short stay', 'Flexible'], tag: 'Lowest monthly price', premium: false, bills: 'Included', deposit: 150, available: 'Available now', furnished: true, description: 'A flexible, lower-cost option for students who need somewhere to land for a shorter period. Shared facilities make it easy to meet other students.', amenities: ['Furnished bed space', 'Shared kitchen', 'Wi-Fi', 'Laundry facilities', 'Common room'], image: 'photo-1555854877-bab0e564b8d5', gallery: ['photo-1555854877-bab0e564b8d5', 'photo-1522708323590-d24dbb6b0267', 'photo-1600607687939-ce8a6c25118c'] },
]
