import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Check, Flame, Clock } from 'lucide-react';

export default function FoodCard({ dish, buttonLabel = 'Order Now' }) {
  const { addToCart, cartItems } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  // Check if item is already in cart
  const itemInCart = cartItems.find((i) => i.id === dish.id);

  const handleAdd = () => {
    addToCart(dish, 1);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1200);
  };

  return (
    <div
      className="rustic-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#3a251a',
        borderRadius: '12px',
        border: '1px solid rgba(193, 138, 69, 0.25)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Food Image Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '210px',
          overflow: 'hidden',
          backgroundColor: '#21150F',
        }}
      >
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />

        {/* Dark gradient overlay for visual depth */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(33, 21, 15, 0.85) 0%, rgba(33, 21, 15, 0.1) 60%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Badge (Chef's Special / Signature / Most Loved) */}
        {dish.badge && (
          <span
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: 'rgba(33, 21, 15, 0.85)',
              color: '#E2B66F',
              border: '1px solid #C18A45',
              padding: '4px 10px',
              borderRadius: '9999px',
              fontSize: '0.72rem',
              fontWeight: '600',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            {dish.badge}
          </span>
        )}

        {/* Category tag */}
        <span
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            color: '#F3E8D5',
            fontSize: '0.75rem',
            backgroundColor: 'rgba(73, 48, 35, 0.85)',
            border: '1px solid rgba(193, 138, 69, 0.3)',
            padding: '2px 8px',
            borderRadius: '4px',
            backdropFilter: 'blur(4px)',
          }}
        >
          {dish.categoryLabel}
        </span>

        {/* Preparation time / spiciness indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.72rem',
            color: '#E2B66F',
            backgroundColor: 'rgba(33, 21, 15, 0.85)',
            padding: '2px 8px',
            borderRadius: '4px',
            border: '1px solid rgba(193, 138, 69, 0.2)',
          }}
        >
          {dish.spiciness && dish.spiciness !== 'None' ? (
            <>
              <Flame size={12} color="#E2B66F" />
              <span>{dish.spiciness}</span>
            </>
          ) : (
            <>
              <Clock size={12} color="#E2B66F" />
              <span>{dish.preparationTime}</span>
            </>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          {/* Dish Name */}
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.22rem',
              color: '#F3E8D5',
              marginBottom: '0.5rem',
              lineHeight: '1.3',
            }}
          >
            {dish.name}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: '0.86rem',
              color: '#D8C7B0',
              lineHeight: '1.55',
              marginBottom: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '4rem',
            }}
          >
            {dish.description}
          </p>
        </div>

        {/* Price & Action Footer */}
        <div
          style={{
            borderTop: '1px solid rgba(193, 138, 69, 0.2)',
            paddingTop: '0.85rem',
            marginTop: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span style={{ fontSize: '0.72rem', color: '#A8957D', display: 'block', textTransform: 'uppercase' }}>
              Sample Price
            </span>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                fontWeight: '700',
                color: '#E2B66F',
                letterSpacing: '0.02em',
              }}
            >
              {dish.priceFormatted}
            </span>
          </div>

          <button
            onClick={handleAdd}
            className={justAdded ? 'btn' : 'btn btn-primary'}
            style={{
              padding: '0.55rem 1.05rem',
              fontSize: '0.85rem',
              borderRadius: '6px',
              backgroundColor: justAdded ? '#493023' : '#C18A45',
              borderColor: justAdded ? '#E2B66F' : 'transparent',
              color: justAdded ? '#E2B66F' : '#21150F',
              boxShadow: justAdded ? '0 0 12px rgba(226, 182, 111, 0.4)' : undefined,
            }}
            aria-label={`Order ${dish.name} for ${dish.priceFormatted}`}
          >
            {justAdded ? (
              <>
                <Check size={15} />
                <span>Added!</span>
              </>
            ) : itemInCart ? (
              <>
                <ShoppingBag size={15} />
                <span>Add More ({itemInCart.quantity})</span>
              </>
            ) : (
              <>
                <ShoppingBag size={15} />
                <span>{buttonLabel}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

