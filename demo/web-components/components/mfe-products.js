// Products Web Component
class MFEProducts extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    this.products = [
      { id: 1, name: 'Smartphone', price: 699, category: 'Electronics', rating: 4.5, icon: '📱' },
      { id: 2, name: 'Laptop', price: 1299, category: 'Electronics', rating: 4.7, icon: '💻' },
      { id: 3, name: 'Running Shoes', price: 89, category: 'Sports', rating: 4.3, icon: '👟' },
      { id: 4, name: 'Yoga Mat', price: 29, category: 'Sports', rating: 4.6, icon: '🧘' },
      { id: 5, name: 'Coffee Maker', price: 149, category: 'Home', rating: 4.4, icon: '☕' },
      { id: 6, name: 'Dress Shirt', price: 59, category: 'Fashion', rating: 4.2, icon: '👔' },
      { id: 7, name: 'Backpack', price: 79, category: 'Fashion', rating: 4.5, icon: '🎒' },
      { id: 8, name: 'Desk Lamp', price: 39, category: 'Home', rating: 4.1, icon: '💡' }
    ];
    
    this.filteredProducts = [...this.products];
    this.selectedCategory = 'all';
    this.searchTerm = '';
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    const categories = ['all', ...new Set(this.products.map(p => p.category))];
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .container {
          padding: 2rem 0;
        }
        
        .header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .header h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 0.5rem;
        }
        
        .header p {
          color: #666;
          font-size: 1.1rem;
        }
        
        .controls {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .search-box {
          flex: 1;
          min-width: 300px;
          position: relative;
        }
        
        .search-box input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 50px;
          font-size: 1rem;
        }
        
        .search-box input:focus {
          outline: none;
          border-color: #6a11cb;
        }
        
        .filters {
          display: flex;
          gap: 1rem;
        }
        
        select {
          padding: 0.75rem 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 1rem;
          background: white;
          cursor: pointer;
        }
        
        select:hover {
          border-color: #6a11cb;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .product-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
          transition: all 0.3s;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 25px rgba(0,0,0,0.15);
        }
        
        .product-image {
          height: 200px;
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
        }
        
        .product-info {
          padding: 1.5rem;
        }
        
        .product-name {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .product-category {
          color: #999;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .product-rating {
          color: #ffa500;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .product-price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #6a11cb;
        }
        
        .add-to-cart {
          background: #6a11cb;
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .add-to-cart:hover {
          background: #5a0fb8;
          transform: scale(1.05);
        }
        
        .no-products {
          text-align: center;
          padding: 4rem 2rem;
          color: #999;
          font-size: 1.2rem;
        }
        
        .results-info {
          color: #666;
          margin-bottom: 1.5rem;
        }
      </style>
      
      <div class="container">
        <div class="header">
          <h1>Product Catalog</h1>
          <p>Browse our collection of quality products</p>
        </div>
        
        <div class="controls">
          <div class="search-box">
            <input 
              type="text" 
              id="searchInput"
              placeholder="Search products..."
              value="${this.searchTerm}"
            >
          </div>
          
          <div class="filters">
            <select id="categoryFilter">
              ${categories.map(cat => `
                <option value="${cat}" ${cat === this.selectedCategory ? 'selected' : ''}>
                  ${cat === 'all' ? 'All Categories' : cat}
                </option>
              `).join('')}
            </select>
            
            <select id="sortFilter">
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
        
        <div class="results-info">
          Showing ${this.filteredProducts.length} of ${this.products.length} products
        </div>
        
        <div class="products-grid">
          ${this.filteredProducts.map(product => `
            <div class="product-card">
              <div class="product-image">${product.icon}</div>
              <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-category">${product.category}</div>
                <div class="product-rating">
                  ${'⭐'.repeat(Math.floor(product.rating))} ${product.rating}
                </div>
                <div class="product-footer">
                  <span class="product-price">$${product.price}</span>
                  <button class="add-to-cart" data-product='${JSON.stringify(product)}'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        
        ${this.filteredProducts.length === 0 ? `
          <div class="no-products">
            No products found matching your criteria
          </div>
        ` : ''}
      </div>
    `;
  }

  attachEventListeners() {
    // Search input
    this.shadowRoot.getElementById('searchInput').addEventListener('input', (e) => {
      this.searchTerm = e.target.value;
      this.filterProducts();
    });

    // Category filter
    this.shadowRoot.getElementById('categoryFilter').addEventListener('change', (e) => {
      this.selectedCategory = e.target.value;
      this.filterProducts();
    });

    // Sort filter
    this.shadowRoot.getElementById('sortFilter').addEventListener('change', (e) => {
      this.sortProducts(e.target.value);
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

  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      const matchesCategory = this.selectedCategory === 'all' || 
                             product.category === this.selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    this.render();
    this.attachEventListeners();
  }

  sortProducts(sortBy) {
    this.filteredProducts.sort((a, b) => {
      switch(sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
    this.render();
    this.attachEventListeners();
  }
}

customElements.define('mfe-products', MFEProducts);
