// Home Web Component
class MFEHome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Component state
    this.featuredProducts = [
      { id: 1, name: 'Wireless Earbuds', price: 79.99, icon: '🎧' },
      { id: 2, name: 'Smart Watch', price: 299.99, icon: '⌚' },
      { id: 3, name: 'Tablet', price: 499.99, icon: '📱' },
      { id: 4, name: 'Laptop', price: 1299.99, icon: '💻' }
    ];
    
    this.categories = [
      { name: 'Electronics', icon: '📱', count: 156 },
      { name: 'Fashion', icon: '👔', count: 243 },
      { name: 'Home', icon: '🏡', count: 89 },
      { name: 'Sports', icon: '⚽', count: 167 }
    ];
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .container {
          padding: 2rem 0;
        }
        
        .hero {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: white;
          padding: 4rem 2rem;
          border-radius: 15px;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .cta-button {
          background: white;
          color: #6a11cb;
          border: none;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          border-radius: 50px;
          cursor: pointer;
          transition: transform 0.3s;
          font-weight: bold;
        }
        
        .cta-button:hover {
          transform: scale(1.05);
        }
        
        .section {
          margin-bottom: 3rem;
        }
        
        .section h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #333;
        }
        
        .categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .category-card {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        }
        
        .category-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .category-name {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .category-count {
          color: #666;
          font-size: 0.9rem;
        }
        
        .products {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .product-card {
          background: white;
          border-radius: 10px;
          padding: 1.5rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        }
        
        .product-icon {
          font-size: 4rem;
          text-align: center;
          margin-bottom: 1rem;
        }
        
        .product-name {
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .product-price {
          font-size: 1.3rem;
          color: #6a11cb;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        .add-to-cart {
          width: 100%;
          background: #6a11cb;
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s;
          font-size: 1rem;
        }
        
        .add-to-cart:hover {
          background: #5a0fb8;
        }
        
        .info-box {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 15px;
          margin-top: 3rem;
        }
        
        .info-box h3 {
          color: #6a11cb;
          margin-bottom: 1rem;
        }
        
        .info-box ul {
          list-style: none;
          padding: 0;
        }
        
        .info-box li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
        }
        
        .info-box li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #6a11cb;
          font-weight: bold;
        }
      </style>
      
      <div class="container">
        <!-- Hero Section -->
        <div class="hero">
          <h1>Welcome to Web Components MFE</h1>
          <p>Experience native web components with custom events communication</p>
          <button class="cta-button" id="shopNowBtn">
            Shop Now →
          </button>
        </div>
        
        <!-- Categories -->
        <div class="section">
          <h2>Shop by Category</h2>
          <div class="categories">
            ${this.categories.map(cat => `
              <div class="category-card" data-category="${cat.name}">
                <div class="category-icon">${cat.icon}</div>
                <div class="category-name">${cat.name}</div>
                <div class="category-count">${cat.count} products</div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <!-- Featured Products -->
        <div class="section">
          <h2>Featured Products</h2>
          <div class="products">
            ${this.featuredProducts.map(product => `
              <div class="product-card">
                <div class="product-icon">${product.icon}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price}</div>
                <button class="add-to-cart" data-product='${JSON.stringify(product)}'>
                  Add to Cart
                </button>
              </div>
            `).join('')}
          </div>
        </div>
        
        <!-- Info Box -->
        <div class="info-box">
          <h3>🎯 Web Components Communication</h3>
          <p>This component demonstrates:</p>
          <ul>
            <li>Shadow DOM encapsulation for isolated styles</li>
            <li>Custom events with composed: true for crossing shadow boundaries</li>
            <li>Lifecycle callbacks (connectedCallback, disconnectedCallback)</li>
            <li>No framework dependencies - pure web standards</li>
          </ul>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    // Shop Now button
    this.shadowRoot.getElementById('shopNowBtn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('mfe:navigate', {
        detail: { route: 'products' },
        bubbles: true,
        composed: true
      }));
    });

    // Category cards
    this.shadowRoot.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.category;
        this.dispatchEvent(new CustomEvent('mfe:navigate', {
          detail: { route: 'products', filter: category },
          bubbles: true,
          composed: true
        }));
      });
    });

    // Add to cart buttons
    this.shadowRoot.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const product = JSON.parse(e.target.dataset.product);
        this.dispatchEvent(new CustomEvent('mfe:add-to-cart', {
          detail: { product },
          bubbles: true,
          composed: true
        }));
      });
    });
  }

  disconnectedCallback() {
    // Cleanup if needed
    console.log('Home component disconnected');
  }
}

// Register the custom element
customElements.define('mfe-home', MFEHome);
