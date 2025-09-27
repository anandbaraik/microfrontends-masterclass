import React, { useState, useEffect } from 'react';

// Initialize eventBus for standalone mode
if (!window.eventBus) {
  window.eventBus = {
    emit: (event, data) => console.log('[Mock EventBus]', event, data),
    on: (event, handler) => console.log('[Mock EventBus] Listener added for:', event),
    off: (event, handler) => console.log('[Mock EventBus] Listener removed for:', event),
  };
}

const Checkout = ({ items = [], user = null }) => {
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const calculateTotal = () => {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    return {
      subtotal,
      tax,
      total: subtotal + tax
    };
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    window.eventBus.emit('notification:show', {
      type: 'success',
      message: `Order ${orderId} placed successfully!`
    });
    
    window.eventBus.emit('cart:clear');
    
    setTimeout(() => {
      window.eventBus.emit('navigate', { route: 'orders' });
    }, 2000);
  };

  const { subtotal, tax, total } = calculateTotal();

  if (items.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>No items in checkout</h2>
        <p>Please add items to your cart first</p>
        <button onClick={() => window.eventBus.emit('navigate', { route: 'cart' })}>
          Back to Cart
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1>Checkout</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '2rem' }}>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '10px' }}>
          <form onSubmit={handleSubmit}>
            <h2>Shipping Information</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem' }}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem' }}
            />
            
            <h2>Payment Information</h2>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem' }}
            />
            
            <button type="submit" style={{
              width: '100%',
              padding: '1rem',
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}>
              Place Order
            </button>
          </form>
        </div>
        
        <div style={{ background: 'white', padding: '2rem', borderRadius: '10px', height: 'fit-content' }}>
          <h2>Order Summary</h2>
          {items.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span>{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Tax:</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '1rem' }}>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
