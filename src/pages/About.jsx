import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { 
  Award, 
  Flame, 
  HeartHandshake, 
  Smile, 
  ArrowRight, 
  Target, 
  Compass, 
  Maximize2,
  X 
} from 'lucide-react';

const valueIcons = {
  Award: Award,
  Flame: Flame,
  HeartHandshake: HeartHandshake,
  Smile: Smile,
};

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('All');

  const galleryFilters = ['All', 'Interior', 'Dishes', 'Preparation', 'Experience'];

  const filteredGallery = activeGalleryFilter === 'All'
    ? RESTAURANT_INFO.gallery
    : RESTAURANT_INFO.gallery.filter((item) => item.category === activeGalleryFilter);

  return (
    <div>
      {/* SECTION A — PAGE HERO */}
      <Hero
        tag="ABOUT BLESSINGS"
        title="Our Story, Our Passion, Our Blessings."
        subtitle="Discover the passion and tradition behind every meal we serve."
        bgImage="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1920&q=85"
      />

      {/* SECTION B — OUR STORY */}
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
              gap: '4.5rem',
              alignItems: 'center',
            }}
          >
            {/* Story Text */}
            <div>
              <span className="section-tag">Brand Philosophy</span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 3.5vw, 2.85rem)',
                  color: '#F3E8D5',
                  marginBottom: '1.75rem',
                  lineHeight: '1.2',
                }}
              >
                The Story Behind Blessings
              </h2>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  fontSize: '1.05rem',
                  lineHeight: '1.85',
                  color: '#D8C7B0',
                  borderLeft: '2px solid #C18A45',
                  paddingLeft: '1.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                {RESTAURANT_INFO.story.map((paragraph, index) => (
                  <p key={index} style={{ margin: 0 }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  backgroundColor: '#3a251a',
                  border: '1px solid rgba(193, 138, 69, 0.3)',
                  padding: '1.2rem 1.6rem',
                  borderRadius: '10px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.4rem',
                    color: '#E2B66F',
                    lineHeight: 1,
                  }}
                >
                  ”
                </div>
                <div style={{ fontStyle: 'italic', color: '#F3E8D5', fontSize: '0.95rem' }}>
                  "{RESTAURANT_INFO.brandMessage}"
                </div>
              </div>
            </div>

            {/* Story Visual Frame */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '2px solid rgba(193, 138, 69, 0.4)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=85"
                  alt="Atmospheric dining room with rustic wooden tables at Blessings"
                  style={{
                    width: '100%',
                    height: '460px',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Decorative Gold Frame Offset */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  border: '1px solid rgba(193, 138, 69, 0.25)',
                  borderRadius: '22px',
                  pointerEvents: 'none',
                  zIndex: -1,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS C & D — OUR MISSION & VISION */}
      <section
        style={{
          padding: '5rem 0',
          backgroundColor: '#170e0a',
          borderTop: '1px solid rgba(193, 138, 69, 0.2)',
          borderBottom: '1px solid rgba(193, 138, 69, 0.2)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* SECTION C — OUR MISSION */}
            <div
              className="rustic-card"
              style={{
                padding: '3rem 2.2rem',
                backgroundColor: '#3a251a',
                border: '1px solid rgba(193, 138, 69, 0.35)',
                borderRadius: '14px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(73, 48, 35, 0.9)',
                  border: '1.5px solid #C18A45',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: '#E2B66F',
                }}
              >
                <Target size={26} />
              </div>

              <span
                style={{
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#C18A45',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                Our Purpose
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  color: '#F3E8D5',
                  marginBottom: '1rem',
                }}
              >
                Our Mission
              </h3>

              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: '#D8C7B0',
                }}
              >
                "{RESTAURANT_INFO.mission}"
              </p>
            </div>

            {/* SECTION D — OUR VISION */}
            <div
              className="rustic-card"
              style={{
                padding: '3rem 2.2rem',
                backgroundColor: '#3a251a',
                border: '1px solid rgba(193, 138, 69, 0.35)',
                borderRadius: '14px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(73, 48, 35, 0.9)',
                  border: '1.5px solid #C18A45',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: '#E2B66F',
                }}
              >
                <Compass size={26} />
              </div>

              <span
                style={{
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#C18A45',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                Our Aspiration
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  color: '#F3E8D5',
                  marginBottom: '1rem',
                }}
              >
                Our Vision
              </h3>

              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: '#D8C7B0',
                }}
              >
                "{RESTAURANT_INFO.vision}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E — OUR VALUES */}
      <section
        style={{
          padding: '6rem 0',
          backgroundColor: '#21150F',
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Guiding Principles</span>
            <h2 className="section-title">Our Values</h2>
            <div className="gold-divider">
              <div className="gold-divider-diamond" />
            </div>
            <p className="section-subtitle">
              The four cornerstones that guide our kitchen, inspire our hospitality, and shape every guest interaction.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem',
            }}
          >
            {RESTAURANT_INFO.values.map((val, idx) => {
              const IconComp = valueIcons[val.icon] || Award;
              return (
                <div
                  key={idx}
                  className="rustic-card"
                  style={{
                    padding: '2.4rem 1.8rem',
                    backgroundColor: '#3a251a',
                    borderRadius: '12px',
                    border: '1px solid rgba(193, 138, 69, 0.28)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(73, 48, 35, 0.9)',
                      border: '1.5px solid #C18A45',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      color: '#E2B66F',
                      boxShadow: '0 4px 15px rgba(193, 138, 69, 0.25)',
                    }}
                  >
                    <IconComp size={28} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      color: '#F3E8D5',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {val.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#D8C7B0', lineHeight: '1.65' }}>
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION F — IMAGE GALLERY */}
      <section
        style={{
          padding: '6rem 0',
          backgroundColor: '#170e0a',
          borderTop: '1px solid rgba(193, 138, 69, 0.25)',
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Visual Atmosphere</span>
            <h2 className="section-title">The Blessings Experience</h2>
            <div className="gold-divider">
              <div className="gold-divider-diamond" />
            </div>
            <p className="section-subtitle">
              Take a visual tour through our rustic wooden dining room, savory Nigerian dishes, and kitchen craftsmanship.
            </p>

            {/* Gallery Category Filter Pills */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                marginTop: '1.8rem',
              }}
            >
              {galleryFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveGalleryFilter(filter)}
                  style={{
                    padding: '6px 16px',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: activeGalleryFilter === filter ? '600' : '400',
                    backgroundColor: activeGalleryFilter === filter ? '#C18A45' : '#3a251a',
                    color: activeGalleryFilter === filter ? '#21150F' : '#F3E8D5',
                    border: `1px solid ${
                      activeGalleryFilter === filter ? '#E2B66F' : 'rgba(193, 138, 69, 0.3)'
                    }`,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                style={{
                  position: 'relative',
                  height: '280px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(193, 138, 69, 0.25)',
                  backgroundColor: '#21150F',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(33, 21, 15, 0.9) 0%, rgba(33, 21, 15, 0.2) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: '#E2B66F',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '4px',
                    }}
                  >
                    {item.category}
                  </span>
                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      color: '#F3E8D5',
                      marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: '#D8C7B0', margin: 0 }}>
                    {item.description}
                  </p>
                </div>

                {/* Zoom Icon indicator */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(33, 21, 15, 0.8)',
                    border: '1px solid rgba(193, 138, 69, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E2B66F',
                  }}
                >
                  <Maximize2 size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '850px',
              width: '100%',
              backgroundColor: '#3a251a',
              border: '1px solid #C18A45',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9)',
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(33, 21, 15, 0.85)',
                border: '1px solid #C18A45',
                color: '#F3E8D5',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
              aria-label="Close image modal"
            >
              <X size={20} />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              style={{
                width: '100%',
                maxHeight: '520px',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            <div style={{ padding: '1.5rem', backgroundColor: '#3a251a' }}>
              <span style={{ fontSize: '0.78rem', color: '#E2B66F', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {selectedImage.category}
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#F3E8D5', margin: '4px 0 8px 0' }}>
                {selectedImage.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#D8C7B0', margin: 0 }}>
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION G — CTA */}
      <section
        style={{
          padding: '5.5rem 0',
          backgroundColor: '#21150F',
          borderTop: '1px solid rgba(193, 138, 69, 0.25)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <span className="section-tag">Taste the Tradition</span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: '#F3E8D5',
              marginBottom: '1rem',
            }}
          >
            Come Experience the Blessings Difference.
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#D8C7B0',
              marginBottom: '2.2rem',
              lineHeight: '1.7',
            }}
          >
            Whether dining in our warm rustic sanctuary or enjoying delivery at home, authentic African flavour is ready for you.
          </p>

          <Link to="/services" className="btn btn-primary btn-lg">
            <span>Explore Our Services</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

