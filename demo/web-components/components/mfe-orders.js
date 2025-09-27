// Orders Web Component
class MFEOrders extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.user = null;
    
    // Mock orders data
    this.orders = [
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
      },
      {
        id: 'ORD-003',
        date: '2024-01-25',
        status: 'Processing',
        total: 89.99,
        items: [
          { name: 'Keyboard', quantity: 1, price: 89.99 }
        ]
      }
    ];
  }

  static get observedAttributes() {
    return ['user'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'user' && newValue) {
      try {
        this.user = JSON.parse(newValue);
        if (this.isConnected) {
          this.render();
        }
      } catch (e) {
        console.error('Failed to parse user:', e);
      }
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        
        h1 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #333;
        }
        
        .login-prompt {
          background: white;
          border-radius: 15px;
          padding: 3rem;
          text-align: center;
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
        }
        
        .login-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        
        .login-btn {
          background: #6a11cb;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 1rem;
        }
        
        .login-btn:hover {
          background: #5a0fb8;
          transform: scale(1.05);
        }
        
        .orders-list {
          display: grid;
          gap: 1.5rem;
        }
        
        .order-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
          transition: all 0.3s;
        }
        
        .order-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 25px rgba(0,0,0,0.12);
        }
        
        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f0f0f0;
        }
        
        .order-id {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
        }
        
        .order-date {
          color: #666;
          font-size: 0.9rem;
        }
        
        .order-status {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }
        
        .status-delivered {
          background: #d4edda;
          color: #155724;
        }
        
        .status-shipped {
          background: #cce5ff;
          color: #004085;
        }
        
        .status-processing {
          background: #fff3cd;
          color: #856404;
        }
        
        .order-items {
          margin-bottom: 1rem;
        }
        
        .order-item {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          color: #666;
        }
        
        .item-details {
          display: flex;
          gap: 1rem;
        }
        
        .item-qty {
          color: #999;
        }
        
        .order-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid #f0f0f0;
        }
        
        .order-total {
          font-size: 1.2rem;
          font-weight: bold;
          color: #6a11cb;
        }
        
        .track-btn {
          background: #6a11cb;
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .track-btn:hover {
          background: #5a0fb8;
          transform: scale(1.05);
        }
        
        .empty-orders {
          background: white;
          border-radius: 15px;
          padding: 3rem;
          text-align: center;
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
        }
        
        .empty-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }
        
        .shop-btn {
          background: #6a11cb;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 1rem;
        }
        
        .shop-btn:hover {
          background: #5a0fb8;
          transform: scale(1.05);
        }
      </style>
      
      <div class="container">
        <h1>My Orders</h1>
        
        ${!this.user ? `
          <div class="login-prompt">
            <div class="login-icon">👤</div>
            <h2>Please log in to view your orders</h2>
            <p>Sign in to access your order history and tracking information</p>
            <button class="login-btn" id="loginBtn">
              Log In
            </button>
          </div>
        ` : this.orders.length === 0 ? `
          <div class="empty-orders">
            <div class="empty-icon">📦</div>
            <h2>No orders yet</h2>
            <p>Start shopping to see your orders here</p>
            <button class="shop-btn" id="shopBtn">
              Start Shopping
            </button>
          </div>
        ` : `
          <div class="orders-list">
            ${this.orders.map(order => `
              <div class="order-card">
                <div class="order-header">
                  <div>
                    <div class="order-id">Order #${order.id}</div>
                    <div class="order-date">Placed on ${new Date(order.date).toLocaleDateString()}</div>
                  </div>
                  <div class="order-status status-${order.status.toLowerCase()}">
                    ${order.status}
                  </div>
                </div>
                
                <div class="order-items">
                  ${order.items.map(item => `
                    <div class="order-item">
                      <div class="item-details">
                        <span>${item.name}</span>
                        <span class="item-qty">x${item.quantity}</span>
                      </div>
                      <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  `).join('')}
                </div>
                
                <div class="order-footer">
                  <div class="order-total">
                    Total: $${order.total.toFixed(2)}
                  </div>
                  <button class="track-btn" data-order="${order.id}">
                    Track Order
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
    
    this.attachEventListeners();
  }

  attachEventListeners() {
    // Login button
    const loginBtn = this.shadowRoot.getElementById('loginBtn');
    if (loginBtn) {
      loginBtn.addEventListener('click', () => {
        // Simulate login
        this.dispatchEvent(new CustomEvent('mfe:user-login', {
          detail: {
            user: {
              id: 1,
              name: 'John Doe',
              email: 'john@example.com'
            }
          },
          bubbles: true,
          composed: true
        }));
      });
    }

    // Shop button
    const shopBtn = this.shadowRoot.getElementById('shopBtn');
    if (shopBtn) {
      shopBtn.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('mfe:navigate', {
          detail: { route: 'products' },
          bubbles: true,
          composed: true
        }));
      });
    }

    // Track buttons
    this.shadowRoot.querySelectorAll('.track-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const orderId = e.target.dataset.order;
        this.dispatchEvent(new CustomEvent('mfe:notification', {
          detail: {
            type: 'info',
            message: `Tracking information for order ${orderId} will be sent to your email`
          },
          bubbles: true,
          composed: true
        }));
      });
    });
  }
}

customElements.define('mfe-orders', MFEOrders);
