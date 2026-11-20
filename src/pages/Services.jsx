import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import FoodCard from '../components/FoodCard';
import ServiceCard from '../components/ServiceCard';
import OrderCart from '../components/OrderCart';
import ReservationForm from '../components/ReservationForm';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { 
  Search, 
  Utensils, 
  CalendarDays, 
  ShoppingBag, 
  ArrowRight,
  Filter,
  CheckCircle2
} from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Scroll to hash section if present in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location.hash]);

  // Filter items by category and search
  const filteredDishes = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* SECTION A — HERO */}
      <Hero
        tag="SERVICES & MENU"
        title="Delicious Food. Exceptional Service."
        subtitle="From everyday meals to special celebrations, Blessings is ready to serve you."
        bgImage="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85"
      />

      {/* SECTION B — OUR FOOD MENU */}
      <section
        id="menu-section"
        style={{
          padding: '6rem 0',
          backgroundColor: '#21150F',
          position: 'relative',
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Authentic Nigerian Cuisine</span>
            <h2 className="section-title">Our Food Menu</h2>
            <div className="gold-divider">
              <div className="gold-divider-diamond" />
            </div>
            <p className="section-subtitle">
              Freshly prepared with authentic African ingredients, rich spices, and slow-simmered goodness. Click "Add to Order" to build your order for direct WhatsApp delivery or pickup.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div
            style={{
              backgroundColor: '#3a251a',
              border: '1px solid rgba(193, 138, 69, 0.3)',
              borderRadius: '14px',
              padding: '1.5rem',
              marginBottom: '3rem',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Search Bar */}
              <div style={{ position: 'relative', width: '100%' }}>
                <Search
                  size={18}
                  color="#C18A45"
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />
                <input
                  type="text"
                  className="form-input"
                  style={{
                    paddingLeft: '42px',
                    backgroundColor: 'rgba(33, 21, 15, 0.9)',
                    borderRadius: '8px',
                  }}
                  placeholder="Search dishes (e.g., Jollof, Egusi, Suya, Chapman, Amala)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: '#A8957D',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                    }}
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Filter Pills */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#C18A45',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginRight: '6px',
                  }}
                >
                  <Filter size={15} />
                  <span>Category:</span>
                </div>

                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '0.88rem',
                      fontWeight: activeCategory === cat.id ? '600' : '400',
                      backgroundColor:
                        activeCategory === cat.id ? '#C18A45' : 'rgba(33, 21, 15, 0.7)',
                      color: activeCategory === cat.id ? '#21150F' : '#F3E8D5',
                      border: `1px solid ${
                        activeCategory === cat.id
                          ? '#E2B66F'
                          : 'rgba(193, 138, 69, 0.25)'
                      }`,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results count indicator */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              color: '#A8957D',
              fontSize: '0.9rem',
            }}
          >
            <span>
              Showing <strong style={{ color: '#E2B66F' }}>{filteredDishes.length}</strong> dish
              {filteredDishes.length === 1 ? '' : 'es'}
            </span>
            <span style={{ fontSize: '0.82rem', color: '#C18A45' }}>
              *All prices are in Nigerian Naira (₦) and can be easily customized
            </span>
          </div>

          {/* Dish Grid */}
          {filteredDishes.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 1rem',
                backgroundColor: '#3a251a',
                borderRadius: '12px',
                border: '1px solid rgba(193, 138, 69, 0.25)',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', color: '#F3E8D5', marginBottom: '0.5rem' }}>
                No dishes found matching "{searchQuery}"
              </h3>
              <p style={{ color: '#D8C7B0', marginBottom: '1.5rem' }}>
                Try searching for another dish or reset your category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="btn btn-primary btn-sm"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                gap: '2rem',
              }}
            >
              {filteredDishes.map((dish) => (
                <FoodCard key={dish.id} dish={dish} buttonLabel="Add to Order" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION C — OUR SERVICES */}
      <section
        id="services-cards-section"
        style={{
          padding: '6rem 0',
          backgroundColor: '#170e0a',
          borderTop: '1px solid rgba(193, 138, 69, 0.2)',
          borderBottom: '1px solid rgba(193, 138, 69, 0.2)',
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Hospitality Offerings</span>
            <h2 className="section-title">Our Services</h2>
            <div className="gold-divider">
              <div className="gold-divider-diamond" />
            </div>
            <p className="section-subtitle">
              We cater to all dining preferences — from intimate candlelight dinners in our rustic wooden dining room to rapid office delivery and grand celebrations.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {RESTAURANT_INFO.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D — ORDERING EXPERIENCE (Cart Summary & WhatsApp Checkout) */}
      <section
        id="ordering-experience"
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
              alignItems: 'flex-start',
            }}
          >
            {/* Left: How Ordering Works Info */}
            <div>
              <span className="section-tag">Seamless WhatsApp Ordering</span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 3.5vw, 2.85rem)',
                  color: '#F3E8D5',
                  marginBottom: '1.25rem',
                  lineHeight: '1.2',
                }}
              >
                Order Direct via WhatsApp
              </h2>

              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: '#D8C7B0',
                  marginBottom: '2rem',
                }}
              >
                We believe in hassle-free ordering. Select your favourite Nigerian dishes from our menu, specify your delivery or dine-in preference, and click submit. Our system compiles a formatted order and connects you straight with our WhatsApp dispatch team.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#C18A45',
                      color: '#21150F',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    1
                  </div>
                  <div>
                    <h4 style={{ color: '#F3E8D5', marginBottom: '3px' }}>Select Your Dishes</h4>
                    <p style={{ fontSize: '0.88rem', color: '#D8C7B0', margin: 0 }}>
                      Browse Jollof rice, soups & swallows, grills, or chilled beverages and click "Add to Order".
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#C18A45',
                      color: '#21150F',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    2
                  </div>
                  <div>
                    <h4 style={{ color: '#F3E8D5', marginBottom: '3px' }}>Review & Customise</h4>
                    <p style={{ fontSize: '0.88rem', color: '#D8C7B0', margin: 0 }}>
                      Adjust portions, enter your contact information, delivery location, or special notes.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#C18A45',
                      color: '#21150F',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    3
                  </div>
                  <div>
                    <h4 style={{ color: '#F3E8D5', marginBottom: '3px' }}>Send via WhatsApp (+234 814 463 8639)</h4>
                    <p style={{ fontSize: '0.88rem', color: '#D8C7B0', margin: 0 }}>
                      A single tap opens WhatsApp with your pre-formatted order ready for our kitchen to confirm.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#menu-section"
                className="btn btn-outline"
                style={{ display: 'inline-flex', gap: '8px' }}
              >
                <Utensils size={16} />
                <span>Jump Back to Menu</span>
              </a>
            </div>

            {/* Right: Embedded Interactive Order Cart */}
            <div>
              <OrderCart asEmbedded={true} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E — BOOKING EXPERIENCE (Table Reservation Form) */}
      <section
        id="reservation-section"
        style={{
          padding: '6rem 0',
          backgroundColor: '#170e0a',
          borderTop: '1px solid rgba(193, 138, 69, 0.25)',
        }}
      >
        <div className="container" style={{ maxWidth: '880px' }}>
          <ReservationForm />
        </div>
      </section>

      {/* SECTION F — CTA */}
      <section
        style={{
          padding: '5.5rem 0',
          backgroundColor: '#21150F',
          borderTop: '1px solid rgba(193, 138, 69, 0.2)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <span className="section-tag">Ready To Serve You</span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: '#F3E8D5',
              marginBottom: '1rem',
            }}
          >
            Good Food Is Just a Click Away.
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#D8C7B0',
              marginBottom: '2.2rem',
              lineHeight: '1.7',
            }}
          >
            Choose between ordering freshly packed meals delivered right to you, or reserving an ambient table for a cosy dine-in feast.
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
            <a href="#menu-section" className="btn btn-primary btn-lg">
              <ShoppingBag size={18} />
              <span>Order Now</span>
            </a>

            <a href="#reservation-section" className="btn btn-outline btn-lg">
              <CalendarDays size={18} />
              <span>Book a Table</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

