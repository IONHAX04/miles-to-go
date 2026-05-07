import { createContext, useContext, useState, type ReactNode } from 'react'
import { BookingConsentModal } from '../components/BookingConsentModal'

interface BookingContextType {
  openBooking: (url: string) => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [targetUrl, setTargetUrl] = useState('')

  const openBooking = (url: string) => {
    setTargetUrl(url)
    setModalOpen(true)
  }

  const handleAccept = () => {
    setModalOpen(false)
    if (targetUrl) {
      window.location.href = targetUrl
    }
  }

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingConsentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAccept={handleAccept}
      />
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}
