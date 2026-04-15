type LegalSection = {
  heading: string
  paragraphs: string[]
}

type LegalPageProps = {
  title: string
  updatedOn: string
  sections: LegalSection[]
}

export function LegalPage({ title, updatedOn, sections }: LegalPageProps) {
  return (
    <section className="section legal-page">
      <div className="container" data-aos="fade-up">
        <p className="eyebrow">Legal</p>
        <h1 className="heading-with-symbol">{title}</h1>
        <p className="legal-page__updated">Last updated: {updatedOn}</p>
        <div className="legal-page__content">
          {sections.map((section) => (
            <article key={section.heading} className="legal-page__section" data-aos="fade-up">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: 'Bookings and confirmation',
    paragraphs: [
      'All reservations are subject to availability. A booking is confirmed only after you receive a confirmation from Miles to Go by email or through an authorized booking platform.',
      'You are responsible for providing accurate guest, contact, and payment information at the time of booking.',
    ],
  },
  {
    heading: 'Check-in and stay rules',
    paragraphs: [
      'Standard check-in is from 15:00 and check-out is by 11:00, unless otherwise agreed in writing.',
      'Guests must comply with house rules, local laws, and reasonable instructions from hotel staff. We may refuse service or terminate a stay for unsafe, unlawful, or disruptive behavior.',
    ],
  },
  {
    heading: 'Rates and payment',
    paragraphs: [
      'Rates shown are in CHF and may include or exclude local taxes and fees depending on the booking channel.',
      'We reserve the right to pre-authorize cards, request deposits where applicable, and correct obvious pricing errors.',
    ],
  },
  {
    heading: 'Liability',
    paragraphs: [
      'Miles to Go is not liable for indirect or consequential loss, including missed transport connections, except where liability cannot be excluded by law.',
      'Guests are responsible for damage caused to hotel property by themselves or their visitors.',
    ],
  },
]

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: 'What we collect',
    paragraphs: [
      'We collect information required to process bookings and provide your stay, such as your name, email address, phone number, booking details, and payment-related data via secure providers.',
      'We may also collect technical usage information on our website, including device, browser, and analytics data.',
    ],
  },
  {
    heading: 'How we use your data',
    paragraphs: [
      'We use personal data to manage reservations, communicate about your stay, provide support, and improve our services.',
      'Where permitted, we may send service-related updates and occasional marketing communications. You may opt out of marketing at any time.',
    ],
  },
  {
    heading: 'Sharing and retention',
    paragraphs: [
      'We share data only with trusted service providers needed to operate bookings, payments, and hotel operations, or when required by law.',
      'We retain data only as long as necessary for operational, legal, and accounting obligations.',
    ],
  },
  {
    heading: 'Your rights',
    paragraphs: [
      'You may request access, correction, or deletion of your personal data, subject to legal requirements.',
      'To exercise your rights, contact us at info@milestogo.ch.',
    ],
  },
]

const REFUND_SECTIONS: LegalSection[] = [
  {
    heading: 'Cancellation window',
    paragraphs: [
      'For eligible standard rates, cancellations made up to 5 days before check-in are fully refundable.',
      'Cancellations made after this window may be charged according to the rate plan selected at booking.',
    ],
  },
  {
    heading: 'Non-refundable and special rates',
    paragraphs: [
      'Promotional, non-refundable, and certain third-party rates are not eligible for refund once booked.',
      'Please review the cancellation and refund terms shown in your booking confirmation before payment.',
    ],
  },
  {
    heading: 'No-show and early departure',
    paragraphs: [
      'If you do not arrive on your check-in date without prior notice, the booking may be treated as a no-show and charges may apply.',
      'Early departure after check-in may not qualify for a partial refund unless required by law or expressly approved by the hotel.',
    ],
  },
  {
    heading: 'Refund processing time',
    paragraphs: [
      'Approved refunds are issued to the original payment method. Processing times can vary by bank or card provider.',
      'If your refund has not appeared after 10 business days, contact us at info@milestogo.ch with your booking reference.',
    ],
  },
]

export function TermsAndConditionsPage() {
  return (
    <LegalPage title="Terms & Conditions" updatedOn="April 15, 2026" sections={TERMS_SECTIONS} />
  )
}

export function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" updatedOn="April 15, 2026" sections={PRIVACY_SECTIONS} />
}

export function RefundPolicyPage() {
  return <LegalPage title="Refund Policy" updatedOn="April 15, 2026" sections={REFUND_SECTIONS} />
}
