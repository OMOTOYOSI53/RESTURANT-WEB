import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  AlertCircle,
  CheckCircle2,
  Receipt
} from 'lucide-react';

export default function OrderCart({ asEmbedded = false }) {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    cartTotal, 
    formatNaira,
    generateWhatsAppOrderUrl 
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [fulfillmentType, setFulfillmentType] = useState('Dine-In');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      setErrorMsg('Please add at least one dish to your order before checkout.');
      return;
    }

    if (!customerName.trim()) {
      setErrorMsg('Please enter your name so our kitchen knows who to prepare the order for.');
      return;
    }

    if (!phone.trim()) {
      setErrorMsg('Please provide a contact phone number.');
      return;
    }

    if (fulfillmentType === 'Delivery' && !deliveryAddress.trim()) {
      setErrorMsg('Please enter your delivery address.');
      return;
    }

    setErrorMsg('');

    const url = generateWhatsAppOrderUrl({
      customerName,
      phone,
      fulfillmentType,
      deliveryAddress,
      specialInstructions,
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Content of the cart
  const cartContent = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div
        style={{
          padding: '1.4rem 1.6rem',
          borderBottom: '1px solid rgba(193, 138, 69, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#2b1b13',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#493023',
              border: '1px solid #C18A45',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShoppingBag size={18} color="#E2B66F" />
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                color: '#F3E8D5',
                lineHeight: 1,
              }}
            >
              Your Food Order
            </h3>
            <span style={{ fontSize: '0.78rem', color: '#D8C7B0' }}>
              {cartItems.length === 0
                ? 'Your order is currently empty'
                : `${cartItems.reduce((acc, i) => acc + i.quantity, 0)} item(s) selected`}
            </span>
          </div>
        </div>

        {!asEmbedded && (
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#D8C7B0',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '4px',
              display: 'flex',
            }}
            aria-label="Close cart drawer"
          >
            <X size={22} />
          </button>
        )}
      </div>

      {/* Cart Items List */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.4rem 1.6rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {cartItems.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              color: '#A8957D',
            }}
          >
            <Receipt size={48} color="#80502D" style={{ margin: '0 auto 1rem auto' }} />
            <h4 style={{ color: '#F3E8D5', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
              No dishes in your order yet
            </h4>
            <p style={{ fontSize: '0.9rem', maxWidth: '280px', margin: '0 auto', color: '#D8C7B0' }}>
              Explore our menu to add authentic Nigerian Jollof, Egusi soup, grilled specialties, and refreshing Chapman.
            </p>
          </div>
        ) : (
          cartItems.map((item) => {
            const lineTotal = item.price * item.quantity;
            return (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '12px',
                  backgroundColor: '#2b1b13',
                  borderRadius: '8px',
                  padding: '12px',
                  border: '1px solid rgba(193, 138, 69, 0.2)',
                  alignItems: 'center',
                }}
              >
                {/* Thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '6px',
                    objectFit: 'cover',
                    flexShrink: 0,
                    border: '1px solid rgba(193, 138, 69, 0.2)',
                  }}
                />

                {/* Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '0.98rem',
                      color: '#F3E8D5',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: '#C18A45', marginBottom: '6px' }}>
                    {formatNaira(item.price)} each
                  </div>

                  {/* Quantity Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        backgroundColor: '#3a251a',
                        border: '1px solid rgba(193, 138, 69, 0.35)',
                        borderRadius: '4px',
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#F3E8D5',
                          padding: '4px 8px',
                          cursor: 'pointer',
                        }}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span
                        style={{
                          fontSize: '0.86rem',
                          fontWeight: '600',
                          padding: '0 6px',
                          color: '#E2B66F',
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#F3E8D5',
                          padding: '4px 8px',
                          cursor: 'pointer',
                        }}
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <span style={{ fontSize: '0.86rem', fontWeight: '600', color: '#F3E8D5', marginLeft: 'auto' }}>
                      {formatNaira(lineTotal)}
                    </span>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#A8957D',
                        cursor: 'pointer',
                        padding: '4px',
                        marginLeft: '4px',
                      }}
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}

        {cartItems.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
            <button
              onClick={clearCart}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#A8957D',
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                textDecoration: 'underline',
              }}
            >
              <Trash2 size={13} />
              Clear entire order
            </button>
          </div>
        )}

        {/* Customer Checkout Details Form */}
        {cartItems.length > 0 && (
          <div
            style={{
              marginTop: '1.2rem',
              borderTop: '1px solid rgba(193, 138, 69, 0.25)',
              paddingTop: '1.2rem',
            }}
          >
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem',
                color: '#F3E8D5',
                marginBottom: '1rem',
              }}
            >
              Customer & Delivery Details
            </h4>

            {errorMsg && (
              <div
                style={{
                  backgroundColor: 'rgba(180, 83, 9, 0.2)',
                  border: '1px solid #d97706',
                  color: '#fbbf24',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '1rem',
                }}
              >
                <AlertCircle size={15} flexShrink={0} />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '0.82rem' }}>
                Your Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                style={{ padding: '0.65rem 0.9rem', fontSize: '0.88rem' }}
                placeholder="e.g. Adebayo Johnson"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '0.82rem' }}>
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                className="form-input"
                style={{ padding: '0.65rem 0.9rem', fontSize: '0.88rem' }}
                placeholder="e.g. 0814 463 8639"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '0.82rem' }}>
                Fulfillment Option
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                {['Dine-In', 'Takeaway', 'Delivery'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFulfillmentType(type)}
                    style={{
                      padding: '8px 4px',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: fulfillmentType === type ? '600' : '400',
                      backgroundColor: fulfillmentType === type ? '#C18A45' : '#3a251a',
                      color: fulfillmentType === type ? '#21150F' : '#F3E8D5',
                      border: `1px solid ${fulfillmentType === type ? '#E2B66F' : 'rgba(193, 138, 69, 0.3)'}`,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {fulfillmentType === 'Delivery' && (
              <div className="form-group">
                <label className="form-label" style={{ fontSize: '0.82rem' }}>
                  Delivery Address <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  style={{ padding: '0.65rem 0.9rem', fontSize: '0.88rem' }}
                  placeholder="Street address, apartment/office, area"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                />
              </div>
            )}

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '0.82rem' }}>
                Special Instructions (Optional)
              </label>
              <input
                type="text"
                className="form-input"
                style={{ padding: '0.65rem 0.9rem', fontSize: '0.88rem' }}
                placeholder="Pepper level, extra cutlery, table number, etc."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer & Checkout Total */}
      {cartItems.length > 0 && (
        <div
          style={{
            padding: '1.4rem 1.6rem',
            backgroundColor: '#2b1b13',
            borderTop: '1px solid rgba(193, 138, 69, 0.25)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '1rem',
            }}
          >
            <span style={{ fontSize: '0.92rem', color: '#D8C7B0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Estimated Total:
            </span>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.65rem',
                fontWeight: '700',
                color: '#E2B66F',
              }}
            >
              {formatNaira(cartTotal)}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.95rem',
              fontSize: '1rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <MessageCircle size={19} />
            <span>Submit Order via WhatsApp</span>
          </button>

          <p
            style={{
              fontSize: '0.74rem',
              color: '#A8957D',
              textAlign: 'center',
              marginTop: '0.75rem',
              lineHeight: '1.4',
            }}
          >
            Submitting opens a WhatsApp chat with Blessings (+234 814 463 8639) with your full itemized order.
          </p>
        </div>
      )}
    </div>
  );

  // If used as embedded card inside the Services page
  if (asEmbedded) {
    return (
      <div
        className="rustic-card"
        style={{
          borderRadius: '12px',
          border: '1px solid rgba(193, 138, 69, 0.35)',
          backgroundColor: '#3a251a',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          height: '100%',
          minHeight: '520px',
        }}
      >
        {cartContent}
      </div>
    );
  }

  // If used as Slide-Over Drawer
  if (!isCartOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: '#3a251a',
          boxShadow: '-8px 0 35px rgba(0, 0, 0, 0.8)',
          borderLeft: '1px solid rgba(193, 138, 69, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 10000,
          animation: 'fadeIn 0.25s ease-out',
        }}
      >
        {cartContent}
      </div>
    </div>
  );
}

