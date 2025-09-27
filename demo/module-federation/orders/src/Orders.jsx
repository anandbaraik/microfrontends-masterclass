import React, { useState } from 'react';

// Initialize eventBus for standalone mode
if (!window.eventBus) {
  window.eventBus = {
    emit: (event, data) => console.log('[Mock EventBus]', event, data),
    on: (event, handler) => console.log('[Mock EventBus] Listener added for:', event),
    off: (event, handler) => console.log('[Mock EventBus] Listener removed for:', event),
  };
}

const Orders = ({ user = null }) => {
  const [orders] = useState([
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 459.97,
      items: [
        { name: 'Laptop', quantity: 1, price: 399.99 },
        { name: 'Mouse', quantity: 2, price: 29.99 }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-20',
      status: 'Shipped',
      total: 189.98,
      items: [
        { name: 'Headphones', quantity: 1, price: 149.99 },
        { name: 'USB Cable', quantity: 2, price: 19.99 }
      ]
    }
  ]);

  if (!user) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Please log in to view orders</h2>
        <button onClick={() => {
          window.eventBus.emit('user:login', {
            user: { id: 1, name: 'John Doe', email: 'john@example.com' }
          });
        }} style={{
          padding: '0.75rem 2rem',
          background: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Log In
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1>My Orders</h1>
      
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {orders.map(order => (
          <div key={order.id} style={{
            background: 'white',
            borderRadius: '10px',
            padding: '2rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div>
                <h3>Order #{order.id}</h3>
                <p style={{ color: '#666' }}>Placed on {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <span style={{
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                background: order.status === 'Delivered' ? '#d4edda' : '#cce5ff',
                color: order.status === 'Delivered' ? '#155724' : '#004085'
              }}>
                {order.status}
              </span>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              {order.items.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Total: ${order.total.toFixed(2)}
              </span>
              <button style={{
                padding: '0.5rem 1.5rem',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
