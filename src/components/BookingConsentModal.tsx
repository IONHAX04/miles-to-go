import { X, Check } from 'lucide-react'
import { useState } from 'react'
import './booking-consent-modal.css'

interface BookingConsentModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
}

export function BookingConsentModal({ isOpen, onClose, onAccept }: BookingConsentModalProps) {
  const [accepted, setAccepted] = useState(false)

  if (!isOpen) return null

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="booking-modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="booking-modal-header">
          <h2 className="heading-with-symbol">Booking Terms & Conditions</h2>
        </div>

        <div className="booking-modal-body">
          <p>
            Before proceeding to our booking engine, please review and accept our
            reservation policies:
          </p>
          <ul className="booking-modal-list">
            <li>
              <strong>Non-Refundable:</strong> All bookings made through our website are
              chargeable 100% and are non-refundable.
            </li>
            <li>
              <strong>Check-in/out:</strong> Check-in is from 15:00 and Check-out is by
              10:00.
            </li>
            <li>
              <strong>Property Rules:</strong> No smoking, no parties, and respect quiet
              hours after 22:00.
            </li>
          </ul>
          <p className="booking-modal-link-wrap">
            Read our full <a href="/terms-and-conditions" target="_blank">Terms & Conditions</a> and <a href="/imprint" target="_blank">Privacy Policy</a>.
          </p>

          <label className="booking-modal-checkbox">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <span className="checkbox-custom">
              {accepted && <Check size={14} strokeWidth={3} />}
            </span>
            <span className="checkbox-label">
              I have read and agree to the Terms & Conditions.
            </span>
          </label>
        </div>

        <div className="booking-modal-footer">
          <button
            type="button"
            className="primary-btn booking-modal-btn"
            disabled={!accepted}
            onClick={onAccept}
          >
            Accept & Proceed to Booking
          </button>
        </div>
      </div>
    </div>
  )
}
