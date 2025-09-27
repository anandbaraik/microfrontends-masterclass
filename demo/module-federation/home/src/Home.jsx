import React, { useEffect, useState } from 'react';
import './home.css';

// Initialize eventBus for standalone mode
if (!window.eventBus) {
  window.eventBus = {
    emit: (event, data) => console.log('[Mock EventBus]', event, data),
    on: (event, handler) => console.log('[Mock EventBus] Listener added for:', event),
    off: (event, handler) => console.log('[Mock EventBus] Listener removed for:', event),
  };
}

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simulate fetching featured products
    setFeaturedProducts([
      { id: 1, name: 'Wireless Headphones', price: 99.99, image: '🎧' },
      { id: 2, name: 'Smart Watch', price: 299.99, image: '⌚' },
      { id: 3, name: 'Laptop Stand', price: 49.99, image: '💻' },
      { id: 4, name: 'USB-C Hub', price: 79.99, image: '🔌' },
    ]);

    setCategories([
      { id: 1, name: 'Electronics', icon: '📱', count: 156 },
      { id: 2, name: 'Fashion', icon: '👔', count: 243 },
      { id: 3, name: 'Home & Garden', icon: '🏡', count: 89 },
      { id: 4, name: 'Sports', icon: '⚽', count: 167 },
    ]);
  }, []);

  const handleProductClick = (product) => {
    // Emit event to notify other MFEs
    window.eventBus.emit('product:selected', { product });
    window.eventBus.emit('navigate', { route: 'products', productId: product.id });
  };

  const handleCategoryClick = (category) => {
    // Navigate to products with category filter
    window.eventBus.emit('navigate', { 
      route: 'products', 
      filter: { category: category.name } 
    });
  };

  const handleQuickAddToCart = (product) => {
    // Add to cart without navigation
    window.eventBus.emit('cart:add', { 
      product: {
        ...product,
        quantity: 1
      }
    });
    
    // Show notification
    window.eventBus.emit('notification:show', {
      type: 'success',
      message: `${product.name} added to cart!`
    });
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to E-Commerce MFE</h1>
          <p>Discover amazing products with Module Federation architecture</p>
          <button 
            className="cta-button"
            onClick={() => window.eventBus.emit('navigate', { route: 'products' })}
          >
            Shop Now →
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">5</span>
            <span className="stat-label">Microfrontends</span>
          </div>
          <div className="stat">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support</span>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <div 
              key={category.id} 
              className="category-card"
              onClick={() => handleCategoryClick(category)}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.count} products</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div 
                className="product-image"
                onClick={() => handleProductClick(product)}
              >
                {product.image}
              </div>
              <h3>{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button 
                className="add-to-cart-btn"
                onClick={() => handleQuickAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h2>Cross-MFE Communication Demo</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>📡 Event Bus</h3>
            <p>Click products or categories to see events being emitted across MFEs</p>
          </div>
          <div className="info-card">
            <h3>🔄 Real-time Updates</h3>
            <p>Cart count updates instantly when items are added</p>
          </div>
          <div className="info-card">
            <h3>🎯 Independent Deployment</h3>
            <p>Each MFE can be deployed separately</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
