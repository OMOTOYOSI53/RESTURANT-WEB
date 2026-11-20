import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Utensils, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({
  isHomePage = false,
  tag = 'WELCOME TO BLESSINGS',
  title = 'Experience the True Taste of Africa.',
  subtitle = 'Discover authentic Nigerian flavours, freshly prepared meals, and unforgettable dining experiences at Blessings.',
  bgImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
  primaryCtaText = 'Explore Our Menu',
  primaryCtaLink = '/services#menu-section',
  secondaryCtaText = 'Book a Table',
  secondaryCtaLink = '/services#reservation-section',
}) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: isHomePage ? '90vh' : '45vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#21150F',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Dark Rustic Atmospheric Multi-layer Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isHomePage
            ? 'linear-gradient(to bottom, rgba(33, 21, 15, 0.72) 0%, rgba(33, 21, 15, 0.88) 60%, #21150F 100%)'
            : 'linear-gradient(to bottom, rgba(33, 21, 15, 0.75) 0%, rgba(33, 21, 15, 0.92) 100%)',
        }}
      />

      {/* Warm Golden Ambient Glow Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 40%, rgba(226, 182, 111, 0.12) 0%, rgba(33, 21, 15, 0.85) 75%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '860px',
          paddingTop: isHomePage ? '4rem' : '2.5rem',
          paddingBottom: isHomePage ? '4rem' : '2.5rem',
        }}
      >
        {/* Welcome Tag */}
        {tag && (
          <div style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
            <span
              className="section-tag"
              style={{
                fontSize: '0.82rem',
                letterSpacing: '0.22em',
                padding: '0.45rem 1.2rem',
                backgroundColor: 'rgba(33, 21, 15, 0.75)',
                backdropFilter: 'blur(6px)',
              }}
            >
              {tag}
            </span>
          </div>
        )}

        {/* Main Headline */}
        <h1
          style={{
            fontSize: isHomePage ? 'clamp(2.5rem, 5.5vw, 4.25rem)' : 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: '700',
            lineHeight: '1.15',
            color: '#F3E8D5',
            marginBottom: '1.4rem',
            fontFamily: 'var(--font-serif)',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
          }}
        >
          {title}
        </h1>

        {/* Supporting Text */}
        <p
          style={{
            fontSize: isHomePage ? 'clamp(1.05rem, 2vw, 1.3rem)' : '1.05rem',
            color: '#D8C7B0',
            maxWidth: '680px',
            margin: '0 auto 2.2rem auto',
            lineHeight: '1.65',
            fontWeight: '300',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
          }}
        >
          {subtitle}
        </p>

        {/* CTA Buttons (for Home page or where provided) */}
        {isHomePage && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to={primaryCtaLink}
              className="btn btn-primary btn-lg"
              style={{
                boxShadow: '0 6px 25px rgba(193, 138, 69, 0.35)',
              }}
            >
              <Utensils size={18} />
              <span>{primaryCtaText}</span>
            </Link>

            <Link
              to={secondaryCtaLink}
              className="btn btn-outline btn-lg"
              style={{
                backgroundColor: 'rgba(33, 21, 15, 0.5)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <CalendarDays size={18} />
              <span>{secondaryCtaText}</span>
            </Link>
          </div>
        )}
      </div>

      {/* Decorative Golden Bottom Accent Line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, #C18A45 50%, transparent 100%)',
          opacity: 0.6,
        }}
      />
    </section>
  );
}

