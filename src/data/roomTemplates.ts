import home1 from '../assets/images/HOME_1.jpg'
import home2 from '../assets/images/HOME_2.jpg'
import home3 from '../assets/images/HOME_3.jpg'
import home4 from '../assets/images/HOME_4.jpg'
import home5 from '../assets/images/HOME_5.jpg'
import home6 from '../assets/images/HOME_6.jpg'
import home7 from '../assets/images/HOME_7.jpg'
import rooms1 from '../assets/images/ROOMS1.jpg'
import rooms2 from '../assets/images/ROOMS2.jpg'
import rooms3 from '../assets/images/ROOMS3.jpg'

export type RoomsPageCategory = 'luxury' | 'suite' | 'deluxe' | 'twins'

export type AmenityKey =
  | 'wifi'
  | 'tv'
  | 'map'
  | 'dumbbell'
  | 'bed'
  | 'headphones'
  | 'bath'
  | 'fridge'
  | 'car'

export type RoomDetailTemplate = {
  id: string
  slug: string
  title: string
  /** Short line for hero H1 */
  heroTitle: string
  tagline: string
  category: RoomsPageCategory
  image: string
  heroImage: string
  mainImage: string
  secondaryImage: string
  gallery: [string, string]
  locationLabel: string
  guests: number
  children: number
  sqm: string
  beds: string
  baths: string
  pricePerNight: number
  description: [string, string]
  rules: string[]
  amenities: { key: AmenityKey; label: string }[]
  cancellation: string
  /** Three columns of bullet labels */
  features: [string[], string[], string[]]
  /** Home page card copy */
  cardDescription: string
  cardSqm: string
  cardBeds: string
  cardBaths: string
  cardPrice: string
}

const HOTEL_ADDRESS = 'Kaiserstuhlstrasse 79, 8154 Overglatt, Zurich, Switzerland'
const HOTEL_EMAIL = 'info@milestogo.ch'
const HOTEL_PHONE = '+41 76 223 45 67'

export const HOTEL_CONTACT = {
  address: HOTEL_ADDRESS,
  email: HOTEL_EMAIL,
  phone: HOTEL_PHONE,
} as const

const DEFAULT_AMENITIES: RoomDetailTemplate['amenities'] = [
  { key: 'wifi', label: 'Free Wi‑Fi' },
  { key: 'tv', label: 'Smart TV' },
  { key: 'map', label: 'Near public transport' },
  { key: 'dumbbell', label: 'Fitness nearby' },
  { key: 'bed', label: 'Quality bedding' },
  { key: 'headphones', label: '24/7 Front desk' },
  { key: 'bath', label: 'Private / shared bath' },
  { key: 'fridge', label: 'Mini fridge on request' },
  { key: 'car', label: 'Airport access' },
]

const DEFAULT_FEATURES: RoomDetailTemplate['features'] = [
  [
    'Coffee & tea making facilities',
    'Desk & chair',
    'Blackout curtains',
    'Daily housekeeping',
  ],
  [
    'High-quality bedding',
    'Storage & wardrobe',
    'Heating & ventilation',
    'USB charging points',
  ],
  [
    'Hair dryer (selected rooms)',
    'Towels & toiletries',
    'Smoke-free room',
    'Luggage storage at reception',
  ],
]

export const ALL_ROOM_DETAILS: RoomDetailTemplate[] = [
  {
    id: '1',
    slug: 'standard-private-bathroom',
    title: 'Standard Room with Private Bathroom',
    heroTitle: 'Standard Room',
    tagline: 'GREAT CHOICE FOR A RELAXING STAY NEAR ZURICH AIRPORT',
    category: 'deluxe',
    image: home1,
    heroImage: home1,
    mainImage: home1,
    secondaryImage: home2,
    gallery: [home3, home4],
    locationLabel: 'Zurich, Switzerland',
    guests: 2,
    children: 0,
    sqm: '18–22 m²',
    beds: '1 bed',
    baths: '1 bathroom',
    pricePerNight: 150,
    description: [
      'A calm, practical layout with your own bathroom—ideal after a long flight or a full day in Zurich. Clean lines, comfortable bedding, and everything you need for a restful night.',
      'Located in our quiet wing with easy access to reception, Wi‑Fi, and local transport links toward the airport and city centre.',
    ],
    rules: [
      'Check-in from 15:00 · Check-out by 11:00',
      'Maximum occupancy as booked (2 adults standard)',
      'No smoking in rooms; designated outdoor areas',
      'Quiet hours 22:00–07:00',
      'Pets on request only—contact us before booking',
      'Valid ID and payment card may be required at check-in',
    ],
    amenities: DEFAULT_AMENITIES,
    cancellation:
      'Free cancellation up to 5 days before check-in. Later changes or no-shows may be charged according to the rate you booked. Group and long-stay rules may differ—confirm in your confirmation email.',
    features: DEFAULT_FEATURES,
    cardDescription:
      'Ideal for guests seeking privacy with a dedicated bathroom and a calm, practical layout.',
    cardSqm: '— sqm',
    cardBeds: '1 Bed',
    cardBaths: '1 Bathroom',
    cardPrice: '150',
  },
  {
    id: '2',
    slug: 'double-shared-bathroom',
    title: 'Double Room with Shared Bathroom',
    heroTitle: 'Double Room',
    tagline: 'COMFORTABLE STAY WITH SHARED FACILITIES — EXCELLENT VALUE',
    category: 'deluxe',
    image: home2,
    heroImage: home2,
    mainImage: home2,
    secondaryImage: home3,
    gallery: [home1, home4],
    locationLabel: 'Zurich, Switzerland',
    guests: 2,
    children: 0,
    sqm: '16–20 m²',
    beds: '1 bed',
    baths: 'Shared bath',
    pricePerNight: 150,
    description: [
      'Perfect for couples or solo travellers who want a cosy double room and are happy to share bathroom facilities with other guests on the same floor.',
      'Bright, well-kept spaces with quick access to showers and WC—our team keeps shared areas cleaned throughout the day.',
    ],
    rules: [
      'Check-in from 15:00 · Check-out by 11:00',
      'Shared bathrooms are for guests of designated rooms only',
      'Maximum occupancy 2 adults unless booked otherwise',
      'No smoking in rooms',
      'Respect quiet hours and shared-space etiquette',
      'Extra guests or rollaway beds on request and availability',
    ],
    amenities: DEFAULT_AMENITIES,
    cancellation:
      'Free cancellation up to 5 days before check-in. Same policy applies as for our standard rates unless your booking confirmation states otherwise.',
    features: DEFAULT_FEATURES,
    cardDescription:
      'Perfect for couples or solo travellers who want comfort and value with shared facilities.',
    cardSqm: '— sqm',
    cardBeds: '1 Bed',
    cardBaths: 'Shared bath',
    cardPrice: '150',
  },
  {
    id: '3',
    slug: 'triple-shared-bathroom',
    title: 'Triple Room with Shared Bathroom',
    heroTitle: 'Triple Room',
    tagline: 'IDEAL FOR SMALL FAMILIES OR GROUPS OF THREE',
    category: 'suite',
    image: home3,
    heroImage: home3,
    mainImage: home3,
    secondaryImage: home4,
    gallery: [home2, home5],
    locationLabel: 'Zurich, Switzerland',
    guests: 3,
    children: 1,
    sqm: '22–26 m²',
    beds: '2 beds',
    baths: 'Shared bath',
    pricePerNight: 150,
    description: [
      'Extra sleeping capacity for small families or friends travelling together, with shared bathroom facilities nearby.',
      'Practical layout with storage for bags and a table for planning your Zurich itinerary.',
    ],
    rules: [
      'Check-in from 15:00 · Check-out by 11:00',
      'Occupancy limited to the number of guests booked',
      'Children under 12 stay with adult supervision',
      'Shared bathroom etiquette applies',
      'No parties or loud music in rooms',
      'Final charges follow your confirmed rate plan',
    ],
    amenities: DEFAULT_AMENITIES,
    cancellation:
      'Free cancellation up to 5 days before check-in for flexible rates. Non-refundable offers follow the terms shown at booking.',
    features: DEFAULT_FEATURES,
    cardDescription:
      'Suitable for small families or groups needing a bit more space while keeping rates fair.',
    cardSqm: '— sqm',
    cardBeds: '2 Beds',
    cardBaths: 'Shared bath',
    cardPrice: '150',
  },
  {
    id: '4',
    slug: 'quadruple-shared-bathroom',
    title: 'Quadruple Room with Shared Bathroom',
    heroTitle: 'Quadruple Room',
    tagline: 'SPACIOUS SETUP FOR LARGER GROUPS',
    category: 'twins',
    image: home4,
    heroImage: home4,
    mainImage: home4,
    secondaryImage: home5,
    gallery: [home3, home6],
    locationLabel: 'Zurich, Switzerland',
    guests: 4,
    children: 2,
    sqm: '26–30 m²',
    beds: '3 beds',
    baths: 'Shared bath',
    pricePerNight: 150,
    description: [
      'Room for everyone in your group—friends or family—with multiple beds and space to unwind after exploring Zurich.',
      'Shared bathrooms are located close by; our team can advise on the best room configuration before you arrive.',
    ],
    rules: [
      'Check-in from 15:00 · Check-out by 11:00',
      'Strict occupancy limits for safety and comfort',
      'Shared facilities—please keep noise low at night',
      'No extra visitors overnight without prior approval',
      'Group bookings may require security deposit',
      'House rules apply to all guests in the room',
    ],
    amenities: DEFAULT_AMENITIES,
    cancellation:
      'Group bookings: cancellation terms may vary. Check your confirmation email or contact us for changes.',
    features: DEFAULT_FEATURES,
    cardDescription:
      'Spacious setup for larger groups—great for friends or family travelling together.',
    cardSqm: '— sqm',
    cardBeds: '3 Beds',
    cardBaths: 'Shared bath',
    cardPrice: '150',
  },
  {
    id: '5',
    slug: 'airport-view-single',
    title: 'Airport View Single — Quiet Wing',
    heroTitle: 'Airport View Single',
    tagline: 'QUIET WING · IDEAL FOR SOLO TRAVELLERS',
    category: 'luxury',
    image: home5,
    heroImage: home5,
    mainImage: home5,
    secondaryImage: home6,
    gallery: [home7, rooms1],
    locationLabel: 'Zurich, Switzerland',
    guests: 1,
    children: 0,
    sqm: '14–16 m²',
    beds: '1 bed',
    baths: 'Shared or private — see booking',
    pricePerNight: 150,
    description: [
      'Compact and peaceful—tailored for solo travellers who want a simple base with minimal fuss and maximum rest.',
      'Ask for a high floor or courtyard view when you book; we will do our best to accommodate.',
    ],
    rules: [
      'Single occupancy unless upgraded',
      'Check-in from 15:00 · Check-out by 11:00',
      'No smoking',
      'Luggage storage subject to space',
      'Bathroom type as per your rate',
      'Early check-in on request and availability',
    ],
    amenities: DEFAULT_AMENITIES,
    cancellation: 'Free cancellation up to 5 days before check-in on flexible rates.',
    features: DEFAULT_FEATURES,
    cardDescription: 'Quiet single room in a convenient Zurich location.',
    cardSqm: '— sqm',
    cardBeds: '1 Bed',
    cardBaths: 'As booked',
    cardPrice: '150',
  },
  {
    id: '6',
    slug: 'spacious-family-corner',
    title: 'Spacious Family Corner',
    heroTitle: 'Family Corner Room',
    tagline: 'EXTRA SPACE FOR FAMILIES',
    category: 'suite',
    image: home6,
    heroImage: home6,
    mainImage: home6,
    secondaryImage: home7,
    gallery: [home5, rooms2],
    locationLabel: 'Zurich, Switzerland',
    guests: 4,
    children: 2,
    sqm: '28–32 m²',
    beds: '2 beds',
    baths: '1–2 bathrooms',
    pricePerNight: 150,
    description: [
      'Corner layout with more floor space for luggage, strollers, or an extra mattress when arranged in advance.',
      'Great for families who want to stay together in one room with hotel support just a call away.',
    ],
    rules: [
      'Family occupancy as booked only',
      'Cots and extra beds on request',
      'Check-in from 15:00 · Check-out by 11:00',
      'Children must be supervised in shared areas',
      'No cooking in rooms',
      'Damage or excessive cleaning may incur charges',
    ],
    amenities: DEFAULT_AMENITIES,
    cancellation:
      'Family packages may have specific cancellation rules—refer to your booking confirmation.',
    features: DEFAULT_FEATURES,
    cardDescription: 'Extra space for families visiting Zurich.',
    cardSqm: '— sqm',
    cardBeds: '2 Beds',
    cardBaths: 'As listed',
    cardPrice: '150',
  },
  {
    id: '7',
    slug: 'classic-twin-room',
    title: 'Classic Twin Room',
    heroTitle: 'Classic Twin Room',
    tagline: 'TWO BEDS · PERFECT FOR FRIENDS OR COLLEAGUES',
    category: 'twins',
    image: home7,
    heroImage: home7,
    mainImage: home7,
    secondaryImage: rooms1,
    gallery: [home6, rooms3],
    locationLabel: 'Zurich, Switzerland',
    guests: 2,
    children: 0,
    sqm: '18–20 m²',
    beds: '2 twin beds',
    baths: 'Shared or private — see booking',
    pricePerNight: 150,
    description: [
      'Two separate beds in a tidy room—popular with colleagues, friends, and anyone who prefers not to share a double.',
      'All Miles to Go standards for cleanliness, Wi‑Fi, and friendly service apply.',
    ],
    rules: [
      'Maximum 2 guests unless otherwise booked',
      'Check-in from 15:00 · Check-out by 11:00',
      'No smoking',
      'Bed configuration as confirmed',
      'Room changes subject to availability',
      'Rates in CHF unless stated otherwise',
    ],
    amenities: DEFAULT_AMENITIES,
    cancellation: 'Free cancellation up to 5 days before check-in on flexible rates.',
    features: DEFAULT_FEATURES,
    cardDescription: 'Twin beds for shared stays with individual comfort.',
    cardSqm: '— sqm',
    cardBeds: '2 Beds',
    cardBaths: 'As booked',
    cardPrice: '150',
  },
  {
    id: '8',
    slug: 'deluxe-double-bright',
    title: 'Deluxe Double — Bright & Modern',
    heroTitle: 'Deluxe Double',
    tagline: 'BRIGHT FINISHES · MODERN COMFORT',
    category: 'deluxe',
    image: rooms1,
    heroImage: rooms1,
    mainImage: rooms1,
    secondaryImage: home2,
    gallery: [home3, home7],
    locationLabel: 'Zurich, Switzerland',
    guests: 2,
    children: 0,
    sqm: '20–24 m²',
    beds: '1 double bed',
    baths: '1 bathroom',
    pricePerNight: 150,
    description: [
      'A fresher, lighter room style with modern touches—ideal when you want a bit more atmosphere for your Zurich stay.',
      'Includes our full service standards: fresh linen, reliable Wi‑Fi, and help from reception whenever you need it.',
    ],
    rules: [
      'Check-in from 15:00 · Check-out by 11:00',
      'Non-smoking room',
      'Occupancy 2 adults standard',
      'Mini-bar or extras charged as used',
      'Lost keys or damage may be charged',
      'Special requests in advance where possible',
    ],
    amenities: DEFAULT_AMENITIES,
    cancellation: 'Free cancellation up to 5 days before check-in on flexible rates.',
    features: DEFAULT_FEATURES,
    cardDescription: 'Bright, modern double room with Miles to Go comfort.',
    cardSqm: '— sqm',
    cardBeds: '1 Bed',
    cardBaths: '1 Bathroom',
    cardPrice: '150',
  },
]

export const DEFAULT_BOOKING_SLUG = ALL_ROOM_DETAILS[0].slug

export function getRoomBySlug(slug: string): RoomDetailTemplate | undefined {
  return ALL_ROOM_DETAILS.find((r) => r.slug === slug)
}

export function getGridRoomItems() {
  return ALL_ROOM_DETAILS.map((r) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    image: r.image,
    category: r.category,
  }))
}

export function getHomeRoomCards() {
  return ALL_ROOM_DETAILS.slice(0, 4).map((r) => ({
    slug: r.slug,
    image: r.image,
    title: r.title,
    description: r.cardDescription,
    sqm: r.cardSqm,
    beds: r.cardBeds,
    baths: r.cardBaths,
    price: r.cardPrice,
  }))
}

