import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FoodCard from '../components/FoodCard';
import TestimonialCard from '../components/TestimonialCard';
import { SIGNATURE_DISHES } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { 
  UtensilsCrossed, 
  ShieldCheck, 
  Sparkles, 
  Home as HomeIcon, 
  ArrowRight, 
  CalendarDays, 
  PhoneCall,
  Clock,
  Heart
} from 'lucide-react';

const whyIcons = {
  UtensilsCrossed: UtensilsCrossed,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Home: HomeIcon,
};

export default function Home() {
  return (
    <div>
      {/* SECTION A — HERO */}
      <Hero
        isHomePage={true}
        tag="WELCOME TO BLESSINGS"
        title="Experience the True Taste of Africa."
        subtitle="Discover authentic Nigerian flavours, freshly prepared meals, and unforgettable dining experiences at Blessings."
        bgImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85"
        primaryCtaText="Explore Our Menu"
        primaryCtaLink="/services"
        secondaryCtaText="Book a Table"
        secondaryCtaLink="/services#reservation-section"
      />

      {/* SECTION B — WELCOME INTRODUCTION */}
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
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div>
              <span className="section-tag">Authentic Nigerian Heritage</span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 3.5vw, 2.9rem)',
                  color: '#F3E8D5',
                  marginBottom: '1.4rem',
                  lineHeight: '1.2',
                }}
              >
                Where Every Meal Tells a Story
              </h2>

              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: '#D8C7B0',
                  marginBottom: '1.6rem',
                }}
              >
                At Blessings, we believe great food brings people together. Our
                kitchen celebrates the richness of African cuisine, combining
                authentic recipes, fresh ingredients, and passionate
                preparation to create meals worth remembering.
              </p>

              <p
                style={{
                  fontSize: '0.96rem',
                  lineHeight: '1.75',
                  color: '#A8957D',
                  marginBottom: '2.2rem',
                }}
              >
                From firewood-infused Jollof rice to slow-simmered Egusi soup
                and succulent suya grills, every delicacy is crafted with respect
                for time-honored African traditions and heartfelt hospitality.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-primary">
                  <span>Learn Our Story</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn btn-outline">
                  <span>View Our Menu</span>
                </Link>
              </div>
            </div>

            {/* Right Food Image Showcase */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '2px solid rgba(193, 138, 69, 0.4)',
                  boxShadow: 'var(--shadow-lg), 0 0 30px rgba(193, 138, 69, 0.15)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85"
                  alt="Authentic Nigerian food feast at Blessings"
                  style={{
                    width: '100%',
                    height: '460px',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(33, 21, 15, 0.6) 0%, transparent 60%)',
                  }}
                />
              </div>

              {/* Floating Highlight Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  left: '24px',
                  backgroundColor: '#3a251a',
                  border: '1.5px solid #C18A45',
                  borderRadius: '10px',
                  padding: '14px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(193, 138, 69, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E2B66F',
                  }}
                >
                  <Heart size={20} />
                </div>
                <div>
                  <div style={{ color: '#F3E8D5', fontWeight: '600', fontSize: '0.92rem' }}>
                    100% Authentic Recipes
                  </div>
                  <div style={{ color: '#C18A45', fontSize: '0.78rem' }}>
                    Fresh & traditional Nigerian spices
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C — FEATURED DISHES */}
      <section
        id="signature-dishes"
        style={{
          padding: '6rem 0',
          backgroundColor: '#1c110b',
          borderTop: '1px solid rgba(193, 138, 69, 0.2)',
          borderBottom: '1px solid rgba(193, 138, 69, 0.2)',
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Chef's Culinary Highlights</span>
            <h2 className="section-title">Our Signature Dishes</h2>
            <div className="gold-divider">
              <div className="gold-divider-diamond" />
            </div>
            <p className="section-subtitle">
              Savour our most celebrated authentic Nigerian delicacies, made with
              premium cuts, rich native herbs, and aromatic slow-cooking mastery.
            </p>
          </div>

          {/* 6 Signature Dishes Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3.5rem',
            }}
          >
            {SIGNATURE_DISHES.map((dish) => (
              <FoodCard key={dish.id} dish={dish} buttonLabel="Order Now" />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn btn-outline btn-lg">
              <span>View Full Interactive Menu (20+ Dishes)</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION D — WHY CHOOSE US */}
      <section
        style={{
          padding: '6rem 0',
          backgroundColor: '#21150F',
          position: 'relative',
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-tag">The Blessings Standard</span>
            <h2 className="section-title">Why Choose Blessings?</h2>
            <div className="gold-divider">
              <div className="gold-divider-diamond" />
            </div>
            <p className="section-subtitle">
              We bring together culinary authenticity, warm hospitality, and a
              rustic luxury atmosphere to make every meal an exceptional occasion.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            {RESTAURANT_INFO.whyChooseUs.map((item, idx) => {
              const IconComp = whyIcons[item.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="rustic-card"
                  style={{
                    padding: '2.2rem 1.8rem',
                    backgroundColor: '#3a251a',
                    border: '1px solid rgba(193, 138, 69, 0.28)',
                    borderRadius: '12px',
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
                      backgroundColor: 'rgba(73, 48, 35, 0.8)',
                      border: '1.5px solid #C18A45',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.4rem',
                      color: '#E2B66F',
                      boxShadow: '0 4px 16px rgba(193, 138, 69, 0.25)',
                    }}
                  >
                    <IconComp size={28} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.3rem',
                      color: '#F3E8D5',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#D8C7B0', lineHeight: '1.65' }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION E — RESTAURANT EXPERIENCE */}
      <section
        style={{
          position: 'relative',
          padding: '8rem 0',
          backgroundImage:
            'url("https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1920&q=85")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          textAlign: 'center',
        }}
      >
        {/* Deep rustic overlay with golden glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(33, 21, 15, 0.85) 0%, rgba(33, 21, 15, 0.9) 100%)',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 5, maxWidth: '780px' }}>
          <span className="section-tag">An Atmosphere to Remember</span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              color: '#F3E8D5',
              marginBottom: '1.25rem',
              lineHeight: '1.2',
            }}
          >
            More Than Food, It's an Experience.
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: '1.8',
              color: '#D8C7B0',
              marginBottom: '2.5rem',
              fontWeight: '300',
            }}
          >
            "From the first welcome to the last bite, every moment at Blessings is designed to make you feel at home."
          </p>

          <Link to="/about" className="btn btn-primary btn-lg">
            <span>Discover Our Story</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* SECTION F — CUSTOMER TESTIMONIALS */}
      <section
        style={{
          padding: '6rem 0',
          backgroundColor: '#21150F',
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Guest Impressions</span>
            <h2 className="section-title">What Our Guests Say</h2>
            <div className="gold-divider">
              <div className="gold-divider-diamond" />
            </div>
            <p className="section-subtitle">
              Read impressions from diners who enjoy authentic African dining with us. (Sample reviews until customer testimonials are compiled).
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {RESTAURANT_INFO.testimonials.map((test) => (
              <TestimonialCard key={test.id} testimonial={test} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION G — CALL TO ACTION */}
      <section
        style={{
          padding: '5.5rem 0',
          backgroundColor: '#170e0a',
          borderTop: '1px solid rgba(193, 138, 69, 0.3)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <span className="section-tag">Join Us At Our Table</span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: '#F3E8D5',
              marginBottom: '1rem',
            }}
          >
            Your Table Is Waiting.
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#D8C7B0',
              marginBottom: '2.2rem',
              lineHeight: '1.7',
            }}
          >
            Come hungry, leave happy. Experience the taste of authentic African cuisine.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <Link to="/services#reservation-section" className="btn btn-primary btn-lg">
              <CalendarDays size={18} />
              <span>Reserve a Table</span>
            </Link>

            <Link to="/contact" className="btn btn-outline btn-lg">
              <PhoneCall size={18} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

