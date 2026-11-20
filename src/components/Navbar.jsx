import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { 
  Menu, 
  X, 
  ShoppingBag, 
  CalendarDays, 
  Phone, 
  UtensilsCrossed 
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top micro bar with contact & reservation reassurance */}
      <div
        style={{
          backgroundColor: '#170e0a',
          borderBottom: '1px solid rgba(193, 138, 69, 0.15)',
          padding: '6px 0',
          fontSize: '0.8rem',
          color: '#D8C7B0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#E2B66F' }}>✦</span> Authentic African & Nigerian Luxury Dining
            </span>
            <span className="hide-on-mobile" style={{ color: '#80502D' }}>|</span>
            <span className="hide-on-mobile" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={12} color="#C18A45" />
              <a href="tel:+2348144638639" style={{ color: '#D8C7B0', textDecoration: 'none' }}>
                +234 814 463 8639
              </a>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ color: '#C18A45', fontSize: '0.78rem' }}>
              📍 Prospira Nig. Ltd., Nigeria
            </span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: isScrolled
            ? 'rgba(33, 21, 15, 0.96)'
            : 'rgba(33, 21, 15, 0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${
            isScrolled ? 'rgba(193, 138, 69, 0.35)' : 'rgba(193, 138, 69, 0.2)'
          }`,
          boxShadow: isScrolled ? '0 8px 30px rgba(0, 0, 0, 0.6)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '78px',
          }}
        >
          {/* Brand Logo / Wordmark */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
            }}
            aria-label="BLESSINGS Home"
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                border: '1.5px solid #C18A45',
                backgroundColor: '#3a251a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(193, 138, 69, 0.25)',
              }}
            >
              <UtensilsCrossed size={22} color="#E2B66F" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  color: '#F3E8D5',
                  lineHeight: '1',
                  background: 'linear-gradient(135deg, #F3E8D5 30%, #E2B66F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                BLESSINGS
              </span>
              <span
                style={{
                  fontSize: '0.66rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C18A45',
                  marginTop: '2px',
                  fontWeight: '500',
                }}
              >
                African Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.2rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                style={({ isActive }) => ({
                  color: isActive ? '#E2B66F' : '#F3E8D5',
                  fontSize: '0.96rem',
                  fontWeight: isActive ? '600' : '400',
                  letterSpacing: '0.02em',
                  position: 'relative',
                  padding: '8px 0',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none',
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(73, 48, 35, 0.7)',
                border: '1px solid rgba(193, 138, 69, 0.4)',
                color: '#F3E8D5',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              title="View your food order"
              aria-label={`View order (${cartCount} items)`}
            >
              <ShoppingBag size={20} color="#E2B66F" />
              {cartCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-6px',
                    backgroundColor: '#C18A45',
                    color: '#21150F',
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 10px rgba(226, 182, 111, 0.6)',
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Prominent Desktop "Book a Table" CTA */}
            <Link
              to="/services#reservation-section"
              className="btn btn-primary desktop-cta"
              style={{
                padding: '0.75rem 1.45rem',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontWeight: '600',
              }}
            >
              <CalendarDays size={16} />
              <span>Book a Table</span>
            </Link>

            {/* Hamburger Button on Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(73, 48, 35, 0.6)',
                border: '1px solid rgba(193, 138, 69, 0.3)',
                color: '#F3E8D5',
                cursor: 'pointer',
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#21150F',
              borderBottom: '2px solid #C18A45',
              padding: '1.5rem',
              animation: 'fadeIn 0.25s ease-out',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: isActive
                        ? 'rgba(193, 138, 69, 0.15)'
                        : 'rgba(73, 48, 35, 0.3)',
                      border: `1px solid ${
                        isActive ? '#C18A45' : 'rgba(193, 138, 69, 0.2)'
                      }`,
                      color: isActive ? '#E2B66F' : '#F3E8D5',
                      fontSize: '1.05rem',
                      fontWeight: isActive ? '600' : '400',
                      textDecoration: 'none',
                    }}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#E2B66F',
                        }}
                      />
                    )}
                  </Link>
                );
              })}

              <div
                style={{
                  height: '1px',
                  backgroundColor: 'rgba(193, 138, 69, 0.25)',
                  margin: '0.5rem 0',
                }}
              />

              <Link
                to="/services#reservation-section"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.95rem',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <CalendarDays size={18} />
                <span>Book a Table</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Nav Link active line style via inline stylesheet */}
      <style>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 24px;
          height: 2px;
          background-color: var(--color-gold-amber);
          transition: transform 0.25s ease;
          border-radius: 2px;
        }
        .nav-link:hover {
          color: var(--color-gold-amber) !important;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          transform: translateX(-50%) scaleX(1);
        }
        
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

