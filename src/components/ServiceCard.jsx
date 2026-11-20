import React from 'react';
import { 
  Utensils, 
  Bike, 
  ShoppingBag, 
  PartyPopper, 
  SunMedium, 
  CalendarCheck2, 
  ArrowRight,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Utensils: Utensils,
  Bike: Bike,
  ShoppingBag: ShoppingBag,
  PartyPopper: PartyPopper,
  SunMedium: SunMedium,
  CalendarCheck2: CalendarCheck2,
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || Utensils;

  const handleClick = (e) => {
    if (service.actionLink && service.actionLink.startsWith('#')) {
      e.preventDefault();
      const targetId = service.actionLink.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isHash = service.actionLink && service.actionLink.startsWith('#');

  return (
    <div
      className="rustic-card"
      style={{
        padding: '2.2rem 1.8rem',
        backgroundColor: '#3a251a',
        borderRadius: '12px',
        border: '1px solid rgba(193, 138, 69, 0.28)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div>
        {/* Icon & Decorative Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '10px',
              backgroundColor: 'rgba(73, 48, 35, 0.9)',
              border: '1.5px solid #C18A45',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(193, 138, 69, 0.2)',
            }}
          >
            <IconComponent size={26} color="#E2B66F" />
          </div>

          <span
            style={{
              fontSize: '0.74rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#A8957D',
            }}
          >
            BLESSINGS
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.45rem',
            color: '#F3E8D5',
            marginBottom: '0.85rem',
            letterSpacing: '0.02em',
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.94rem',
            color: '#D8C7B0',
            lineHeight: '1.65',
            marginBottom: '1.4rem',
          }}
        >
          {service.description}
        </p>

        {/* Feature bullet points */}
        {service.features && (
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              marginBottom: '1.8rem',
              borderTop: '1px dashed rgba(193, 138, 69, 0.2)',
              paddingTop: '1rem',
            }}
          >
            {service.features.map((feat, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.85rem',
                  color: '#F3E8D5',
                }}
              >
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(193, 138, 69, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Check size={11} color="#E2B66F" />
                </div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action link */}
      <div>
        {isHash ? (
          <a
            href={service.actionLink}
            onClick={handleClick}
            className="btn btn-outline"
            style={{
              width: '100%',
              fontSize: '0.88rem',
              padding: '0.75rem',
              justifyContent: 'space-between',
            }}
          >
            <span>{service.actionText}</span>
            <ArrowRight size={16} />
          </a>
        ) : (
          <Link
            to={service.actionLink}
            className="btn btn-outline"
            style={{
              width: '100%',
              fontSize: '0.88rem',
              padding: '0.75rem',
              justifyContent: 'space-between',
            }}
          >
            <span>{service.actionText}</span>
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}

