import React, { useState, useEffect } from 'react';
import './productCatalog.css';

// Initialize eventBus for standalone mode
if (!window.eventBus) {
  window.eventBus = {
    emit: (event, data) => console.log('[Mock EventBus]', event, data),
    on: (event, handler) => console.log('[Mock EventBus] Listener added for:', event),
    off: (event, handler) => console.log('[Mock EventBus] Listener removed for:', event),
  };
}

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Mock product data
  const mockProducts = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, category: 'Electronics', rating: 4.5, image: '🎧' },
    { id: 2, name: 'Smart Watch', price: 299.99, category: 'Electronics', rating: 4.7, image: '⌚' },
    { id: 3, name: 'Running Shoes', price: 89.99, category: 'Sports', rating: 4.3, image: '👟' },
    { id: 4, name: 'Yoga Mat', price: 29.99, category: 'Sports', rating: 4.6, image: '🧘' },
    { id: 5, name: 'Coffee Maker', price: 149.99, category: 'Home', rating: 4.4, image: '☕' },
    { id: 6, name: 'Desk Lamp', price: 39.99, category: 'Home', rating: 4.2, image: '💡' },
    { id: 7, name: 'Backpack', price: 59.99, category: 'Fashion', rating: 4.5, image: '🎒' },
    { id: 8, name: 'Sunglasses', price: 129.99, category: 'Fashion', rating: 4.8, image: '🕶️' },
    { id: 9, name: 'Bluetooth Speaker', price: 79.99, category: 'Electronics', rating: 4.6, image: '🔊' },
    { id: 10, name: 'Water Bottle', price: 24.99, category: 'Sports', rating: 4.4, image: '💧' },
  ];

  useEffect(() => {
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);

    // Listen for search events from other MFEs
    const handleProductSearch = (event) => {
      setSearchTerm(event.detail.searchTerm || '');
      if (event.detail.category) {
        setSelectedCategory(event.detail.category);
      }
    };

    window.eventBus.on('product:search', handleProductSearch);

    return () => {
      window.eventBus.off('product:search', handleProductSearch);
    };
  }, []);

  useEffect(() => {
    // Filter and sort products
    let filtered = products;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
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

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm, sortBy]);

  const handleAddToCart = (product) => {
    // Emit event to add product to cart
    window.eventBus.emit('cart:add', {
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      }
    });

    // Show notification
    window.eventBus.emit('notification:show', {
      type: 'success',
      message: `${product.name} added to cart!`,
      duration: 3000
    });
  };

  const handleProductView = (product) => {
    // Emit event for product view analytics
    window.eventBus.emit('product:viewed', {
      productId: product.id,
      productName: product.name,
      category: product.category
    });
  };

  const categories = ['all', ...new Set(products.map(p => p.category))];

  return (
    <div className="product-catalog-container">
      <div className="catalog-header">
        <h1>Product Catalog</h1>
        <p>Explore our wide range of products</p>
      </div>

      {/* Filters and Search */}
      <div className="catalog-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filter-controls">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-filter"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>

          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-filter"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="results-info">
        Showing {filteredProducts.length} of {products.length} products
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => handleProductView(product)}
          >
            <div className="product-image">{product.image}</div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <div className="product-rating">
                {'⭐'.repeat(Math.floor(product.rating))} {product.rating}
              </div>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button 
                  className="add-to-cart-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>No products found matching your criteria</p>
        </div>
      )}

      {/* Communication Info */}
      <div className="communication-info">
        <h3>💬 Cross-MFE Communication</h3>
        <p>This Product Catalog MFE demonstrates:</p>
        <ul>
          <li>Emitting 'cart:add' events when products are added to cart</li>
          <li>Listening for 'product:search' events from other MFEs</li>
          <li>Sending 'product:viewed' analytics events</li>
          <li>Broadcasting 'notification:show' for user feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCatalog;
