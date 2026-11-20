import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export default function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: '#3a251a',
        border: '1px solid #C18A45',
        borderRadius: '8px',
        padding: '14px 20px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7), 0 0 15px rgba(193, 138, 69, 0.25)',
        color: '#F3E8D5',
        fontSize: '0.92rem',
        fontWeight: '500',
        animation: 'fadeIn 0.3s ease-out',
        maxWidth: '380px',
      }}
      role="status"
      aria-live="polite"
    >
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          backgroundColor: 'rgba(193, 138, 69, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#E2B66F',
          flexShrink: 0,
        }}
      >
        <ShoppingBag size={16} />
      </div>
      <span>{toastMessage}</span>
    </div>
  );
}

