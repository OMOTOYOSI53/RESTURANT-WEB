import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  AlertCircle, 
  ShieldCheck,
  Building2,
  CalendarCheck
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from '../components/SocialIcons';

export default function Contact() {
  return (
    <div>
      {/* SECTION A — HERO */}
      <Hero
        tag="GET IN TOUCH"
        title="We'd Love to Hear From You."
        subtitle="Have a question, want to make a reservation, or planning a special event? Get in touch with us."
        bgImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85"
      />

      {/* MAIN CONTACT CONTENT */}
      <section
        style={{
          padding: '6rem 0',
          backgroundColor: '#21150F',
          position: 'relative',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* LEFT COLUMN: CONTACT DETAILS, HOURS, LOCATION & SOCIALS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* SECTION B — CONTACT INFORMATION */}
              <div
                className="rustic-card"
                style={{
                  padding: '2.4rem',
                  backgroundColor: '#3a251a',
                  borderRadius: '14px',
                  border: '1px solid rgba(193, 138, 69, 0.35)',
                }}
              >
                <span className="section-tag" style={{ marginBottom: '1rem' }}>
                  Direct Channels
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.65rem',
                    color: '#F3E8D5',
                    marginBottom: '1.5rem',
                  }}
                >
                  Restaurant Details
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                  {/* Restaurant Name */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: '#493023',
                        border: '1px solid #C18A45',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#E2B66F',
                        flexShrink: 0,
                      }}
                    >
                      <Building2 size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', color: '#A8957D', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                        Restaurant Name
                      </span>
                      <span style={{ color: '#F3E8D5', fontSize: '1.15rem', fontWeight: '600' }}>
                        {RESTAURANT_INFO.name}
                      </span>
                    </div>
                  </div>

                  {/* Phone Number (Clickable telephone link) */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: '#493023',
                        border: '1px solid #C18A45',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#E2B66F',
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', color: '#A8957D', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                        Telephone
                      </span>
                      <a
                        href={`tel:${RESTAURANT_INFO.phoneTel}`}
                        style={{
                          color: '#E2B66F',
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        {RESTAURANT_INFO.phoneDisplay}
                      </a>
                      <span style={{ display: 'block', fontSize: '0.78rem', color: '#A8957D' }}>
                        Local: {RESTAURANT_INFO.phoneRaw}
                      </span>
                    </div>
                  </div>

                  {/* Email (Clickable mailto link) */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: '#493023',
                        border: '1px solid #C18A45',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#E2B66F',
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', color: '#A8957D', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                        Email Enquiries
                      </span>
                      <a
                        href={`mailto:${RESTAURANT_INFO.email}`}
                        style={{
                          color: '#F3E8D5',
                          fontSize: '0.98rem',
                          wordBreak: 'break-all',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#E2B66F')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#F3E8D5')}
                      >
                        {RESTAURANT_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Contact Button (International Format +2348144638639) */}
                  <div style={{ marginTop: '0.5rem' }}>
                    <a
                      href={RESTAURANT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        padding: '0.85rem',
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                      }}
                    >
                      <MessageCircle size={18} />
                      <span>Chat on WhatsApp (+234 814 463 8639)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* SECTION D — OPENING HOURS (Clearly Editable / Sample Hours) */}
              <div
                className="rustic-card"
                style={{
                  padding: '2.2rem',
                  backgroundColor: '#3a251a',
                  borderRadius: '14px',
                  border: '1px solid rgba(193, 138, 69, 0.3)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                  <Clock size={22} color="#E2B66F" />
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      color: '#F3E8D5',
                      margin: 0,
                    }}
                  >
                    Opening Hours
                  </h3>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(33, 21, 15, 0.7)',
                    borderRadius: '8px',
                    padding: '1rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                  }}
                >
                  {RESTAURANT_INFO.openingHours.map((slot, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom:
                          idx !== RESTAURANT_INFO.openingHours.length - 1
                            ? '1px dashed rgba(193, 138, 69, 0.2)'
                            : 'none',
                        paddingBottom:
                          idx !== RESTAURANT_INFO.openingHours.length - 1
                            ? '0.75rem'
                            : '0',
                      }}
                    >
                      <div>
                        <span style={{ color: '#F3E8D5', fontWeight: '500', display: 'block' }}>
                          {slot.days}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#C18A45' }}>
                          {slot.status}
                        </span>
                      </div>
                      <span style={{ color: '#E2B66F', fontWeight: '600', fontSize: '0.94rem' }}>
                        {slot.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <p
                  style={{
                    fontSize: '0.78rem',
                    color: '#A8957D',
                    fontStyle: 'italic',
                    margin: 0,
                  }}
                >
                  {RESTAURANT_INFO.openingHoursNote}
                </p>
              </div>

              {/* SECTION E — LOCATION (Provisional Placeholder Card) */}
              <div
                className="rustic-card"
                style={{
                  padding: '2.2rem',
                  backgroundColor: '#3a251a',
                  borderRadius: '14px',
                  border: '1px solid rgba(193, 138, 69, 0.3)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                  <MapPin size={22} color="#E2B66F" />
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      color: '#F3E8D5',
                      margin: 0,
                    }}
                  >
                    Restaurant Location
                  </h3>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(33, 21, 15, 0.8)',
                    border: '1px dashed rgba(193, 138, 69, 0.35)',
                    borderRadius: '10px',
                    padding: '1.5rem',
                    textAlign: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <MapPin size={34} color="#C18A45" style={{ margin: '0 auto 0.75rem auto' }} />
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      color: '#F3E8D5',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {RESTAURANT_INFO.location}
                  </div>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(193, 138, 69, 0.18)',
                      color: '#E2B66F',
                      padding: '3px 10px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                    }}
                  >
                    Provisional Location Placeholder
                  </span>
                </div>

                <p style={{ fontSize: '0.82rem', color: '#D8C7B0', lineHeight: '1.6', margin: 0 }}>
                  {RESTAURANT_INFO.locationNote} The exact street coordinates and venue details will be updated once officially designated. For detailed driving directions or pickup assistance, kindly message us on WhatsApp.
                </p>
              </div>

              {/* SECTION F — SOCIAL MEDIA PLACEHOLDERS */}
              <div
                className="rustic-card"
                style={{
                  padding: '2rem',
                  backgroundColor: '#3a251a',
                  borderRadius: '14px',
                  border: '1px solid rgba(193, 138, 69, 0.3)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    color: '#F3E8D5',
                    marginBottom: '0.75rem',
                  }}
                >
                  Follow Blessings Online
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#D8C7B0', marginBottom: '1.25rem' }}>
                  Stay connected for daily menu specials, festive banquet announcements, and culinary stories.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {RESTAURANT_INFO.socials.map((soc, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(33, 21, 15, 0.6)',
                        border: '1px solid rgba(193, 138, 69, 0.2)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {soc.name === 'Instagram' ? (
                          <InstagramIcon size={18} color="#E2B66F" />
                        ) : soc.name === 'Facebook' ? (
                          <FacebookIcon size={18} color="#E2B66F" />
                        ) : (
                          <TikTokIcon size={18} color="#E2B66F" />
                        )}
                        <span style={{ color: '#F3E8D5', fontSize: '0.9rem', fontWeight: '500' }}>
                          {soc.name}
                        </span>
                      </div>
                      <span style={{ color: '#C18A45', fontSize: '0.82rem' }}>
                        {soc.handle}
                      </span>
                    </div>
                  ))}
                </div>
                <span style={{ display: 'block', fontSize: '0.72rem', color: '#A8957D', marginTop: '0.75rem', fontStyle: 'italic' }}>
                  *Editable social media placeholders.
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: SECTION C — FUNCTIONAL CONTACT FORM */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
