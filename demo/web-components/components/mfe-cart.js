// Cart Web Component
class MFECart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.items = [];
  }

  static get observedAttributes() {
    return ['items'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'items' && newValue) {
      try {
        this.items = JSON.parse(newValue);
        if (this.isConnected) {
          this.render();
          this.attachEventListeners();
        }
      } catch (e) {
        console.error('Failed to parse items:', e);
      }
    }
  }

  connectedCallback() {
    // Listen for cart updates from shell
    document.addEventListener('mfe:cart-updated', (e) => {
      this.items = e.detail.items;
      this.render();
      this.attachEventListeners();
    });
    
    this.render();
    this.attachEventListeners();
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
        
        .empty-cart {
          text-align: center;
          padding: 4rem 2rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
        }
        
        .empty-icon {
          font-size: 5rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }
        
        .empty-cart h2 {
          color: #666;
          margin-bottom: 1rem;
        }
        
        .empty-cart p {
          color: #999;
          margin-bottom: 2rem;
        }
        
        .continue-shopping {
          background: #6a11cb;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .continue-shopping:hover {
          background: #5a0fb8;
          transform: scale(1.05);
        }
        
        .cart-content {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 2rem;
        }
        
        @media (max-width: 968px) {
          .cart-content {
            grid-template-columns: 1fr;
          }
        }
        
        .cart-items {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
        }
        
        .cart-item {
          display: grid;
          grid-template-columns: 80px 1fr auto auto auto;
          gap: 1.5rem;
          align-items: center;
          padding: 1.5rem 0;
          border-bottom: 1px solid #eee;
        }
        
        .cart-item:last-child {
          border-bottom: none;
        }
        
        .item-icon {
          font-size: 3rem;
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
        
        .item-details h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        
        .item-price {
          color: #666;
        }
        
        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: #f5f5f5;
          padding: 0.5rem;
          border-radius: 50px;
        }
        
        .quantity-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: none;
          background: white;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s;
        }
        
        .quantity-btn:hover {
          background: #6a11cb;
          color: white;
        }
        
        .quantity {
          font-weight: bold;
          min-width: 30px;
          text-align: center;
        }
        
        .item-total {
          font-size: 1.2rem;
          font-weight: bold;
          color: #6a11cb;
        }
        
        .remove-btn {
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        
        .remove-btn:hover {
          opacity: 1;
        }
        
        .cart-summary {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
          height: fit-content;
          position: sticky;
          top: 2rem;
        }
        
        .cart-summary h2 {
          margin-bottom: 1.5rem;
        }
        
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          color: #666;
        }
        
        .summary-row.total {
          font-size: 1.3rem;
          font-weight: bold;
          color: #333;
          padding-top: 1rem;
          border-top: 2px solid #f0f0f0;
        }
        
        .checkout-btn {
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
        
        .checkout-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 5px 20px rgba(106, 17, 203, 0.4);
        }
      </style>
      
      <div class="container">
        <h1>Shopping Cart</h1>
        
        ${this.items.length === 0 ? `
          <div class="empty-cart">
            <div class="empty-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
            <button class="continue-shopping" id="continueShoppingBtn">
              Continue Shopping
            </button>
          </div>
        ` : `
          <div class="cart-content">
            <div class="cart-items">
              <h2>Items (${this.items.length})</h2>
              ${this.items.map(item => `
                <div class="cart-item">
                  <div class="item-icon">${item.icon || '📦'}</div>
                  <div class="item-details">
                    <h3>${item.name}</h3>
                    <p class="item-price">$${item.price.toFixed(2)}</p>
                  </div>
                  <div class="quantity-controls">
                    <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                  </div>
                  <div class="item-total">
                    $${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button class="remove-btn" data-id="${item.id}" title="Remove item">
                    ❌
                  </button>
                </div>
              `).join('')}
            </div>
            
            <div class="cart-summary">
              <h2>Order Summary</h2>
              <div class="summary-row">
                <span>Subtotal:</span>
                <span>$${subtotal.toFixed(2)}</span>
              </div>
              <div class="summary-row">
                <span>Tax (8%):</span>
                <span>$${tax.toFixed(2)}</span>
              </div>
              <div class="summary-row total">
                <span>Total:</span>
                <span>$${total.toFixed(2)}</span>
              </div>
              <button class="checkout-btn" id="checkoutBtn">
                Proceed to Checkout
              </button>
            </div>
          </div>
        `}
      </div>
    `;
  }

  attachEventListeners() {
    // Continue shopping button
    const continueBtn = this.shadowRoot.getElementById('continueShoppingBtn');
    if (continueBtn) {
      continueBtn.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('mfe:navigate', {
          detail: { route: 'products' },
          bubbles: true,
          composed: true
        }));
      });
    }

    // Quantity buttons
    this.shadowRoot.querySelectorAll('.quantity-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        const action = e.target.dataset.action;
        const item = this.items.find(i => i.id === id);
        
        if (item) {
          const newQuantity = action === 'increase' ? 
            item.quantity + 1 : item.quantity - 1;
          
          this.dispatchEvent(new CustomEvent('mfe:update-quantity', {
            detail: { productId: id, quantity: newQuantity },
            bubbles: true,
            composed: true
          }));
        }
      });
    });

    // Remove buttons
    this.shadowRoot.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        this.dispatchEvent(new CustomEvent('mfe:remove-from-cart', {
          detail: { productId: id },
          bubbles: true,
          composed: true
        }));
      });
    });

    // Checkout button
    const checkoutBtn = this.shadowRoot.getElementById('checkoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('mfe:navigate', {
          detail: { route: 'checkout' },
          bubbles: true,
          composed: true
        }));
      });
    }
  }

  calculateSubtotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}

customElements.define('mfe-cart', MFECart);
