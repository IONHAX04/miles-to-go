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
    heading: '1. Contracting Party',
    paragraphs: [
      'Magnum AG is only the contractual partner. The rooms and parking are under ownership by a third party.',
    ],
  },
  {
    heading: '2. Tenant',
    paragraphs: [
      'The tenant agrees to the terms of the booking platform, if applicable. If in case of a direct booking, the tenant agrees to provide a valid ID.',
    ],
  },
  {
    heading: '3. Business hours',
    paragraphs: [
      'Working hours are Monday to Sunday from 10:00 am – 21:00 pm. Tenants may reach Miles To Go by phone or email during this time.',
    ],
  },
  {
    heading: '4. Handover of keys',
    paragraphs: [
      'The room will be handed over in a clean and rentable condition. The tenant will be able to access the room from 15:00 on the check in day. Tenants are able to check in daily from 15:00 to 24:00 with prior notice. The tenant receives 1 key. In case the tenant misplaces or loses a key, Miles To Go will replace the key and/or the entire lock at the tenant’s expense.',
    ],
  },
  {
    heading: '5. Use of the property',
    paragraphs: [
      'The room rented to the tenant can be used for living purposes only, unless agreed upon in advance. The inhabitants of the apartment may only be the listed customers on the rental contract. In the case of additional guests, the tenant must inform Miles to Go to add additional guests. In the case of misinformation, Miles To Go holds the right to expel the tenant without notice.',
    ],
  },
  {
    heading: '6. Maintenance',
    paragraphs: [
      'The tenant may not make major changes to the room, Keller, or any public area of the building. For urgent matters, the tenant must contact Miles To Go for repairs. In case of major reparations, the tenant must allow all work as scheduled by Miles To Go.',
    ],
  },
  {
    heading: '7. Rent',
    paragraphs: [
      'Payment of the rent must be made before the beginning of each month if renting monthly, or on the day of check in. Payments may be made by credit card payment, bank transfer or cash. All transaction costs shall be borne by the tenant.',
    ],
  },
  {
    heading: '8. Security deposits',
    paragraphs: [
      'Once the contract is signed, a rental or security deposit amount must be collected before the tenant completes the check in. The amount is based on the room type. The deposit will be returned to the tenant at the time of check out, if and only when there are no damages, minor or major, to the room or any of the items that are provided. Miles To Go reserves the right to withhold the full deposit in case if the room is returned damaged.',
    ],
  },
  {
    heading: '9. Subtenancy',
    paragraphs: [
      'The tenant is not permitted to sublet the room to anyone for any amount of time.',
    ],
  },
  {
    heading: '10. Use',
    paragraphs: [
      'The room is used for guest stays only and may not be used for commercial activities that are not permitted in advance.',
    ],
  },
  {
    heading: '11. Right of access',
    paragraphs: [
      'Miles To Go reserves the right to enter the room with a 24 hour notice.',
    ],
  },
  {
    heading: '12. Smoking',
    paragraphs: [
      'Smoking is strictly prohibited in the rooms as well as in the public areas of the building. Violations may result in charges for repair and cleaning costs.',
    ],
  },
  {
    heading: '13. Pets',
    paragraphs: [
      'Pets are allowed upon request and are subject to an additional fee.',
    ],
  },
  {
    heading: '14. Bicycles',
    paragraphs: [
      'Bicycles may be stored in the designated area.',
    ],
  },
  {
    heading: '15. Termination of contracts',
    paragraphs: [
      'The contract is final and will not be prolonged. In case the tenant wants to extend the stay, they must sign a new contract. Without a new contract submission, the tenant automatically agrees to vacate by the last day of the contract.',
    ],
  },
  {
    heading: '16. Return of the room',
    paragraphs: [
      'The tenant must return the keys and any other items belonging to Miles To Go in person during check out. Check out times are until 10:00, daily.',
    ],
  },
  {
    heading: '17. Contract',
    paragraphs: [
      'The contract contains all agreements made between the Parties. Amendments and subsequent agreements shall only be valid if they have been confirmed in advance in writing by Miles To Go.',
    ],
  },
  {
    heading: '18. Cancelation policy',
    paragraphs: [
      'Reservations made on the homepage are chargeable 100% and are non-refundable. Reservations made through online travel agents are subject to the online travel agents’ terms and conditions.',
    ],
  },
  {
    heading: 'Privacy Policy',
    paragraphs: [
      'We collect information required to process bookings and provide your stay, such as your name, email address, phone number, booking details, and payment-related data via secure providers.',
      'We use personal data to manage reservations, communicate about your stay, provide support, and improve our services.',
      'We share data only with trusted service providers needed to operate bookings, payments, and hotel operations, or when required by law. We retain data only as long as necessary for operational, legal, and accounting obligations.',
      'You may request access, correction, or deletion of your personal data, subject to legal requirements. To exercise your rights, contact us at info@milestogo.ch.',
    ],
  },
]

export function TermsAndConditionsPage() {
  return (
    <LegalPage title="Terms & Conditions" updatedOn="April 17, 2026" sections={TERMS_SECTIONS} />
  )
}

const IMPRINT_SECTIONS: LegalSection[] = [
  {
    heading: 'Responsible Entity',
    paragraphs: [
      'Magnum AG',
      'Gibraltarstrasse 15',
      '6003 Luzern',
      'Switzerland',
      'E-Mail: info@milestogo.com',
      'Phone No.: +41 763664575',
      'UID: CHE-251.490.621',
      'CH-ID: CH-100-3823323-4',
    ],
  },
  {
    heading: 'Authorized Representative',
    paragraphs: [
      'Aiste Sidlauskaite & Jithin Joseph Mariyadas',
    ],
  },
  {
    heading: 'Company Name',
    paragraphs: [
      'Magnum AG',
    ],
  },
  {
    heading: 'Disclaimer',
    paragraphs: [
      'The author assumes no responsibility for the correctness, accuracy, timeliness, reliability, or completeness of the information.',
      'Liability claims against the author for material or immaterial damages resulting from access to, use, or non-use of the published information, misuse of the connection, or technical malfunctions are excluded.',
      'All offers are non-binding. The author expressly reserves the right to change, supplement, delete parts of the pages, or cease publication temporarily or permanently without prior notice.',
    ],
  },
  {
    heading: 'Disclaimer for Content and Links',
    paragraphs: [
      'References and links to third-party websites are outside our area of responsibility. Any responsibility for such websites is rejected. Access to and use of such websites is at the sole risk of the respective user.',
    ],
  },
  {
    heading: 'Copyright Notice',
    paragraphs: [
      'The copyright and all other rights to content, images, photos, or other files on this website belong exclusively to Magnum AG or the specifically named rights holders. Written consent from the copyright holder must be obtained in advance for the reproduction of any elements.',
    ],
  },
]

export function ImprintPage() {
  return (
    <LegalPage title="Imprint Information" updatedOn="April 28, 2026" sections={IMPRINT_SECTIONS} />
  )
}

