import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'blessings_cart_items_v1';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load cart from storage', e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to storage', e);
    }
  }, [cartItems]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (item, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prevItems, { ...item, quantity }];
    });
    showToast(`Added "${item.name}" to your order!`);
  };

  const updateQuantity = (itemId, delta) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((i) => {
          if (i.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== itemId));
    showToast('Item removed from order');
  };

  const clearCart = () => {
    setCartItems([]);
    showToast('Order cleared');
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formatNaira = (amount) => `₦${Number(amount).toLocaleString('en-NG')}`;

  const generateWhatsAppOrderUrl = ({
    customerName = '',
    phone = '',
    fulfillmentType = 'Dine-In',
    deliveryAddress = '',
    specialInstructions = '',
  }) => {
    if (cartItems.length === 0) return '';

    let text = `👑 *NEW ORDER - BLESSINGS RESTAURANT*\n`;
    text += `═══════════════════════════\n`;
    text += `👤 *Customer:* ${customerName.trim() || 'Not specified'}\n`;
    text += `📞 *Phone:* ${phone.trim() || 'Not specified'}\n`;
    text += `🍽️ *Fulfillment:* ${fulfillmentType}\n`;
    if (fulfillmentType === 'Delivery' && deliveryAddress.trim()) {
      text += `📍 *Delivery Address:* ${deliveryAddress.trim()}\n`;
    }
    if (specialInstructions.trim()) {
      text += `📝 *Notes/Allergies:* ${specialInstructions.trim()}\n`;
    }
    text += `═══════════════════════════\n`;
    text += `*ITEMS ORDERED:*\n`;

    cartItems.forEach((item, index) => {
      const lineTotal = item.price * item.quantity;
      text += `${index + 1}. ${item.name}\n   Qty: ${item.quantity} × ${formatNaira(item.price)} = ${formatNaira(lineTotal)}\n`;
    });

    text += `═══════════════════════════\n`;
    text += `💰 *TOTAL ESTIMATE:* ${formatNaira(cartTotal)}\n`;
    text += `═══════════════════════════\n`;
    text += `_Sent via Blessings Restaurant Web Ordering. Please confirm availability and preparation time._`;

    const encoded = encodeURIComponent(text);
    return `https://wa.me/2348144638639?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
        formatNaira,
        generateWhatsAppOrderUrl,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

