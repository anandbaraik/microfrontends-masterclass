import React, { useState, useEffect } from 'react';
import './cart.css';

// Initialize eventBus for standalone mode
if (!window.eventBus) {
  window.eventBus = {
    emit: (event, data) => console.log('[Mock EventBus]', event, data),
    on: (event, handler) => console.log('[Mock EventBus] Listener added for:', event),
    off: (event, handler) => console.log('[Mock EventBus] Listener removed for:', event),
  };
}

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

    // Listen for cart events
    const handleAddToCart = (event) => {
      const { product } = event.detail;
      setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === product.id);
        let newItems;
        
        if (existingItem) {
          newItems = prevItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + (product.quantity || 1) }
              : item
          );
        } else {
          newItems = [...prevItems, { ...product, quantity: product.quantity || 1 }];
        }
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(newItems));
        
        // Emit update event
        window.eventBus.emit('cart:update', { items: newItems });
        
        return newItems;
      });
    };

    const handleRemoveFromCart = (event) => {
      const { productId } = event.detail;
      setCartItems(prevItems => {
        const newItems = prevItems.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(newItems));
        window.eventBus.emit('cart:update', { items: newItems });
        return newItems;
      });
    };

    const handleClearCart = () => {
      setCartItems([]);
      localStorage.removeItem('cart');
      window.eventBus.emit('cart:update', { items: [] });
    };

    window.eventBus.on('cart:add', handleAddToCart);
    window.eventBus.on('cart:remove', handleRemoveFromCart);
    window.eventBus.on('cart:clear', handleClearCart);

    return () => {
      window.eventBus.off('cart:add', handleAddToCart);
      window.eventBus.off('cart:remove', handleRemoveFromCart);
      window.eventBus.off('cart:clear', handleClearCart);
    };
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }

    const newItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
    window.eventBus.emit('cart:update', { items: newItems });
  };

  const removeItem = (id) => {
    const newItems = cartItems.filter(item => item.id !== id);
    setCartItems(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
    window.eventBus.emit('cart:update', { items: newItems });
    window.eventBus.emit('notification:show', {
      type: 'info',
      message: 'Item removed from cart'
    });
  };

  const applyPromoCode = () => {
    // Mock promo code validation
    const promoCodes = {
      'SAVE10': 10,
      'SAVE20': 20,
      'WELCOME': 15
    };

    if (promoCodes[promoCode]) {
      setDiscount(promoCodes[promoCode]);
      window.eventBus.emit('notification:show', {
        type: 'success',
        message: `Promo code applied! ${promoCodes[promoCode]}% discount`
      });
    } else {
      window.eventBus.emit('notification:show', {
        type: 'error',
        message: 'Invalid promo code'
      });
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = (subtotal * discount) / 100;
    return subtotal - discountAmount + calculateTax();
  };

  const proceedToCheckout = () => {
    // Emit event to navigate to checkout
    window.eventBus.emit('navigate', { route: 'checkout' });
    
    // Pass cart data to checkout
    window.eventBus.emit('checkout:init', {
      items: cartItems,
      subtotal: calculateSubtotal(),
      tax: calculateTax(),
      discount: discount,
      total: calculateTotal()
    });
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
          <button 
            className="continue-shopping-btn"
            onClick={() => window.eventBus.emit('navigate', { route: 'products' })}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            <h2>Items ({cartItems.length})</h2>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">{item.image}</div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="remove-btn"
                  title="Remove item"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="promo-code-section">
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                className="promo-input"
              />
              <button onClick={applyPromoCode} className="apply-btn">
                Apply
              </button>
            </div>

            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="summary-row discount">
                  <span>Discount ({discount}%):</span>
                  <span>-${((calculateSubtotal() * discount) / 100).toFixed(2)}</span>
                </div>
              )}
              <div className="summary-row">
                <span>Tax (8%):</span>
                <span>${calculateTax().toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={proceedToCheckout}
              className="checkout-btn"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {/* Event Communication Info */}
      <div className="event-info">
        <h3>🔄 Event-Based Communication</h3>
        <p>This Cart MFE demonstrates:</p>
        <ul>
          <li>Listening for 'cart:add', 'cart:remove', 'cart:clear' events</li>
          <li>Emitting 'cart:update' when cart changes</li>
          <li>Triggering 'navigate' event for checkout</li>
          <li>Sending 'checkout:init' with cart data</li>
          <li>Persisting cart in localStorage for session continuity</li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
