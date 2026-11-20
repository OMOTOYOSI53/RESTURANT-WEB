import React from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { 
  UtensilsCrossed, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ArrowUp, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#170e0a',
        borderTop: '1px solid rgba(193, 138, 69, 0.3)',
        color: '#F3E8D5',
        position: 'relative',
        paddingTop: '4.5rem',
        paddingBottom: '2rem',
      }}
    >
      {/* Subtle top golden light rim */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #C18A45, #E2B66F, #C18A45, transparent)',
        }}
      />

      <div className="container">
        {/* Top 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  border: '1px solid #C18A45',
                  backgroundColor: '#3a251a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <UtensilsCrossed size={18} color="#E2B66F" />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.65rem',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  color: '#F3E8D5',
                }}
              >
                BLESSINGS
              </span>
            </div>

            <p style={{ fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '1.25rem', color: '#D8C7B0' }}>
              "Bringing the authentic taste of Africa to your table." Indulge in
              rich Nigerian culinary traditions, smoky jollof, royal soups, and
              unforgettable hospitality in a luxury rustic atmosphere.
            </p>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{
                display: 'inline-flex',
                gap: '8px',
                fontSize: '0.85rem',
                borderColor: '#C18A45',
                color: '#E2B66F',
              }}
            >
              <MessageCircle size={15} />
              <span>Chat via WhatsApp</span>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: '#F3E8D5',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em',
                position: 'relative',
                paddingBottom: '0.5rem',
              }}
            >
              Quick Navigation
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '35px',
                  height: '2px',
                  backgroundColor: '#C18A45',
                }}
              />
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services & Menu', path: '/services' },
                { name: 'Book a Table', path: '/services#reservation-section' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    style={{
                      color: '#D8C7B0',
                      fontSize: '0.92rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#E2B66F';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#D8C7B0';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ChevronRight size={14} color="#C18A45" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Provisional Location */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: '#F3E8D5',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em',
                position: 'relative',
                paddingBottom: '0.5rem',
              }}
            >
              Contact Blessings
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '35px',
                  height: '2px',
                  backgroundColor: '#C18A45',
                }}
              />
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.9rem', color: '#D8C7B0' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Phone size={17} color="#E2B66F" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#A8957D', textTransform: 'uppercase' }}>Phone / WhatsApp</div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneTel}`}
                    style={{ color: '#F3E8D5', fontWeight: '500', textDecoration: 'none' }}
                  >
                    {RESTAURANT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Mail size={17} color="#E2B66F" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#A8957D', textTransform: 'uppercase' }}>Email Enquiries</div>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    style={{ color: '#F3E8D5', wordBreak: 'break-all', textDecoration: 'none' }}
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={17} color="#E2B66F" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#A8957D', textTransform: 'uppercase' }}>Location (Provisional)</div>
                  <span style={{ color: '#F3E8D5' }}>{RESTAURANT_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Hours & Socials */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: '#F3E8D5',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em',
                position: 'relative',
                paddingBottom: '0.5rem',
              }}
            >
              Opening Schedule
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '35px',
                  height: '2px',
                  backgroundColor: '#C18A45',
                }}
              />
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
              {RESTAURANT_INFO.openingHours.map((h, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(193, 138, 69, 0.15)', paddingBottom: '4px' }}>
                  <span style={{ color: '#D8C7B0' }}>{h.days}</span>
                  <span style={{ color: '#E2B66F', fontWeight: '500' }}>{h.hours}</span>
                </div>
              ))}
              <span style={{ fontSize: '0.72rem', color: '#A8957D', fontStyle: 'italic' }}>
                *Sample hours — editable upon schedule confirmation.
              </span>
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#C18A45', marginBottom: '0.65rem' }}>
                Connect With Us
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                {RESTAURANT_INFO.socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    title={`${s.name} (${s.handle})`}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      backgroundColor: '#3a251a',
                      border: '1px solid rgba(193, 138, 69, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#E2B66F',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#C18A45';
                      e.currentTarget.style.color = '#21150F';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#3a251a';
                      e.currentTarget.style.color = '#E2B66F';
                    }}
                  >
                    {s.name === 'Instagram' ? (
                      <InstagramIcon size={17} />
                    ) : s.name === 'Facebook' ? (
                      <FacebookIcon size={17} />
                    ) : (
                      <TikTokIcon size={17} />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Attribution & Back-to-Top bar */}
        <div
          style={{
            borderTop: '1px solid rgba(193, 138, 69, 0.18)',
            paddingTop: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#A8957D',
          }}
        >
          <div>
            © {new Date().getFullYear()} BLESSINGS African Restaurant. All rights reserved.
            <span style={{ display: 'block', fontSize: '0.74rem', marginTop: '3px', color: '#8c775f' }}>
              Authentic African & Nigerian Flavours • Warm Hospitality
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <ShieldCheck size={14} color="#C18A45" />
              Direct WhatsApp Ordering & Reservations
            </span>

            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                backgroundColor: '#3a251a',
                border: '1px solid rgba(193, 138, 69, 0.35)',
                color: '#E2B66F',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                transition: 'all 0.2s ease',
              }}
              aria-label="Back to top"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C18A45';
                e.currentTarget.style.color = '#21150F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3a251a';
                e.currentTarget.style.color = '#E2B66F';
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
