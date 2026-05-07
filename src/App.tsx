import { useEffect, useState } from 'react'
import AOS from 'aos'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { SplashScreen } from './components/SplashScreen'
import { SiteLayout } from './components/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { BookingPage } from './pages/BookingPage'
import { BookingRequestPage } from './pages/BookingRequestPage'
import { ContactPage } from './pages/ContactPage'
import { EnquiryPage } from './pages/EnquiryPage'
import { HomePage } from './pages/HomePage'
import { ImprintPage, TermsAndConditionsPage } from './pages/LegalPage'
import { LocationPage } from './pages/LocationPage'

export default function App() {
  const { pathname } = useLocation()
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => {
      setShowSplash(false)
    }, 1500)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.refresh()
  }, [pathname])

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/facilities" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/imprint" element={<ImprintPage />} />
        <Route path="/booking" element={<BookingRequestPage />} />

        <Route path="/booking/:roomSlug" element={<BookingPage />} />
      </Route>
    </Routes>
  )
}
