import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
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
        position: 'relative',
        height: '100%',
      }}
    >
      {/* Top watermark quote icon */}
      <div
        style={{
          position: 'absolute',
          top: '18px',
          right: '22px',
          color: 'rgba(193, 138, 69, 0.15)',
        }}
      >
        <Quote size={42} />
      </div>

      <div>
        {/* Star Rating */}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '1.2rem' }}>
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star key={i} size={17} fill="#E2B66F" color="#E2B66F" />
          ))}
        </div>

        {/* Quote text */}
        <p
          style={{
            fontStyle: 'italic',
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#F3E8D5',
            marginBottom: '1.5rem',
          }}
        >
          "{testimonial.quote}"
        </p>
      </div>

      {/* Guest Details */}
      <div
        style={{
          borderTop: '1px solid rgba(193, 138, 69, 0.2)',
          paddingTop: '1.1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#F3E8D5',
            }}
          >
            {testimonial.guestName}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#C18A45' }}>
            {testimonial.guestRole}
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.72rem',
              backgroundColor: 'rgba(73, 48, 35, 0.9)',
              border: '1px solid rgba(193, 138, 69, 0.25)',
              color: '#E2B66F',
              padding: '2px 8px',
              borderRadius: '4px',
            }}
          >
            {testimonial.favoriteDish}
          </span>
          <span
            style={{
              display: 'block',
              fontSize: '0.68rem',
              color: '#A8957D',
              marginTop: '3px',
              fontStyle: 'italic',
            }}
          >
            (Placeholder review)
          </span>
        </div>
      </div>
    </div>
  );
}

