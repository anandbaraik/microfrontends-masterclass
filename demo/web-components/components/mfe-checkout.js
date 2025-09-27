// Checkout Web Component
class MFECheckout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.items = [];
    this.user = null;
  }

  static get observedAttributes() {
    return ['items', 'user'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue) {
      try {
        if (name === 'items') {
          this.items = JSON.parse(newValue);
        } else if (name === 'user') {
          this.user = JSON.parse(newValue);
        }
        if (this.isConnected) {
          this.render();
        }
      } catch (e) {
        console.error(`Failed to parse ${name}:`, e);
      }
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const subtotal = this.calculateSubtotal();
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

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
        
        .checkout-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 2rem;
        }
        
        .checkout-form {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
        }
        
        .form-section {
          margin-bottom: 2rem;
        }
        
        .form-section h2 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #333;
        }
        
        .form-group {
          margin-bottom: 1rem;
        }
        
        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #666;
          font-size: 0.9rem;
        }
        
        input, select {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
        }
        
        input:focus, select:focus {
          outline: none;
          border-color: #6a11cb;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .order-summary {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
          height: fit-content;
          position: sticky;
          top: 2rem;
        }
        
        .order-items {
          margin-bottom: 1.5rem;
        }
        
        .order-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .order-item:last-child {
          border-bottom: none;
        }
        
        .item-name {
          font-size: 0.95rem;
        }
        
        .item-qty {
          color: #666;
          font-size: 0.85rem;
        }
        
        .item-price {
          font-weight: bold;
          color: #6a11cb;
        }
        
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          color: #666;
        }
        
        .summary-row.total {
          font-size: 1.3rem;
          font-weight: bold;
          color: #333;
          padding-top: 1rem;
          border-top: 2px solid #f0f0f0;
        }
        
        .place-order-btn {
          width: 100%;
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 1.5rem;
        }
        
        .place-order-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 5px 20px rgba(106, 17, 203, 0.4);
        }
        
        .empty-checkout {
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
      </style>
      
      <div class="container">
        <h1>Checkout</h1>
        
        ${this.items.length === 0 ? `
          <div class="empty-checkout">
            <div class="empty-icon">📦</div>
            <h2>No items in checkout</h2>
            <p>Please add items to your cart first</p>
          </div>
        ` : `
          <div class="checkout-grid">
            <div class="checkout-form">
              <form id="checkoutForm">
                <div class="form-section">
                  <h2>Shipping Information</h2>
                  <div class="form-group">
                    <label for="fullName">Full Name</label>
                    <input type="text" id="fullName" required 
                           value="${this.user?.name || ''}">
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required 
                           value="${this.user?.email || ''}">
                  </div>
                  <div class="form-group">
                    <label for="address">Street Address</label>
                    <input type="text" id="address" required>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="city">City</label>
                      <input type="text" id="city" required>
                    </div>
                    <div class="form-group">
                      <label for="zipCode">Zip Code</label>
                      <input type="text" id="zipCode" required>
                    </div>
                  </div>
                </div>
                
                <div class="form-section">
                  <h2>Payment Information</h2>
                  <div class="form-group">
                    <label for="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="expiry">Expiry Date</label>
                      <input type="text" id="expiry" placeholder="MM/YY" required>
                    </div>
                    <div class="form-group">
                      <label for="cvv">CVV</label>
                      <input type="text" id="cvv" placeholder="123" required>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            <div class="order-summary">
              <h2>Order Summary</h2>
              <div class="order-items">
                ${this.items.map(item => `
                  <div class="order-item">
                    <div>
                      <div class="item-name">${item.name}</div>
                      <div class="item-qty">Qty: ${item.quantity}</div>
                    </div>
                    <div class="item-price">
                      $${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                `).join('')}
              </div>
              
              <div class="summary-row">
                <span>Subtotal:</span>
                <span>$${subtotal.toFixed(2)}</span>
              </div>
              <div class="summary-row">
                <span>Tax (8%):</span>
                <span>$${tax.toFixed(2)}</span>
              </div>
              <div class="summary-row">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div class="summary-row total">
                <span>Total:</span>
                <span>$${total.toFixed(2)}</span>
              </div>
              
              <button class="place-order-btn" id="placeOrderBtn">
                Place Order
              </button>
            </div>
          </div>
        `}
      </div>
    `;
    
    this.attachEventListeners();
  }

  attachEventListeners() {
    const placeOrderBtn = this.shadowRoot.getElementById('placeOrderBtn');
    const checkoutForm = this.shadowRoot.getElementById('checkoutForm');
    
    if (placeOrderBtn && checkoutForm) {
      placeOrderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (checkoutForm.checkValidity()) {
          // Simulate order placement
          const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();
          
          // Emit order placed event
          this.dispatchEvent(new CustomEvent('mfe:notification', {
            detail: {
              type: 'success',
              message: `Order ${orderId} placed successfully!`
            },
            bubbles: true,
            composed: true
          }));
          
          // Clear cart
          this.dispatchEvent(new CustomEvent('mfe:clear-cart', {
            bubbles: true,
            composed: true
          }));
          
          // Navigate to orders
          setTimeout(() => {
            this.dispatchEvent(new CustomEvent('mfe:navigate', {
              detail: { route: 'orders' },
              bubbles: true,
              composed: true
            }));
          }, 2000);
        } else {
          checkoutForm.reportValidity();
        }
      });
    }
  }

  calculateSubtotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}

customElements.define('mfe-checkout', MFECheckout);
