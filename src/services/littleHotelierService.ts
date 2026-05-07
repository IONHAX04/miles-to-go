/**
 * Little Hotelier / Direct-book.com Integration Utility
 */

export const LITTLE_HOTELIER_CONFIG = {
  propertySlug: 'milestogoairporthotel',
  baseUrl: 'https://direct-book.com/properties/milestogoairporthotel',
  locale: 'en',
  currency: 'CHF',
}

export interface BookingParams {
  checkIn: string // YYYY-MM-DD
  checkOut: string // YYYY-MM-DD
  adults?: number
  children?: number
  infants?: number
  rateId?: string // Optional: deep link to a specific room/rate
}

/**
 * Generates a URL for the Little Hotelier booking engine.
 */
export function getLittleHotelierUrl(params: BookingParams): string {
  const { checkIn, checkOut, adults = 2, children = 0, infants = 0, rateId } = params

  const url = new URL(LITTLE_HOTELIER_CONFIG.baseUrl)
  url.searchParams.set('locale', LITTLE_HOTELIER_CONFIG.locale)
  url.searchParams.set('currency', LITTLE_HOTELIER_CONFIG.currency)
  url.searchParams.set('checkInDate', checkIn)
  url.searchParams.set('checkOutDate', checkOut)
  url.searchParams.set('items[0][adults]', adults.toString())
  url.searchParams.set('items[0][children]', children.toString())
  url.searchParams.set('items[0][infants]', infants.toString())
  
  if (rateId) {
    url.searchParams.set('items[0][rateId]', rateId)
  }

  url.searchParams.set('trackPage', 'yes')

  return url.toString()
}
