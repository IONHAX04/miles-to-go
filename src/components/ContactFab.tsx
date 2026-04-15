import { MessageCircle, PhoneCall, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { HOTEL_CONTACT } from '../data/roomTemplates'

const FAB_MESSAGE =
  'Hello Miles to Go team, I would like to enquire about room availability and booking details.'

function normalizePhoneNumber(value: string) {
  return value.replace(/[^\d]/g, '')
}

export function ContactFab() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = useMemo(() => normalizePhoneNumber(HOTEL_CONTACT.phone), [])
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(FAB_MESSAGE)}`

  return (
    <div className="contact-fab">
      <div className={`contact-fab__panel${isOpen ? ' is-open' : ''}`}>
        <p className="contact-fab__title">Need quick help?</p>
        <div className="contact-fab__actions">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="contact-fab__action wa">
            <MessageCircle size={16} aria-hidden />
            WhatsApp
          </a>
          <a href={`tel:${HOTEL_CONTACT.phone}`} className="contact-fab__action call">
            <PhoneCall size={16} aria-hidden />
            Call
          </a>
        </div>
      </div>

      <button
        type="button"
        className="contact-fab__toggle"
        aria-label="Open quick contact options"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={20} aria-hidden /> : <MessageCircle size={20} aria-hidden />}
      </button>
    </div>
  )
}
