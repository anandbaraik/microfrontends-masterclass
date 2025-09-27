import React, { Suspense, lazy, useState, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';

// Lazy load microfrontends
const Home = lazy(() => import('home/Home'));
const ProductCatalog = lazy(() => import('productCatalog/ProductCatalog'));
const Cart = lazy(() => import('cart/Cart'));
const Checkout = lazy(() => import('checkout/Checkout'));
const Orders = lazy(() => import('orders/Orders'));

function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

    // Listen for navigation events
    window.eventBus.on('navigate', (event) => {
      setCurrentRoute(event.detail.route);
    });

    // Listen for cart add events
    window.eventBus.on('cart:add', (event) => {
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
        
        // Save to localStorage so Cart component can also read it
        localStorage.setItem('cart', JSON.stringify(newItems));
        
        // Show notification
        showNotification({
          type: 'success',
          message: `${product.name} added to cart!`
        });
        
        return newItems;
      });
    });

    // Listen for cart updates
    window.eventBus.on('cart:update', (event) => {
      setCartItems(event.detail.items);
    });

    // Listen for cart clear
    window.eventBus.on('cart:clear', () => {
      setCartItems([]);
      localStorage.removeItem('cart');
    });

    // Listen for user auth events
    window.eventBus.on('user:login', (event) => {
      setUser(event.detail.user);
    });

    // Listen for notification events
    window.eventBus.on('notification:show', (event) => {
      showNotification(event.detail);
    });

    return () => {
      window.eventBus.off('navigate');
      window.eventBus.off('cart:add');
      window.eventBus.off('cart:update');
      window.eventBus.off('cart:clear');
      window.eventBus.off('user:login');
      window.eventBus.off('notification:show');
    };
  }, []);

  const navigate = (route) => {
    setCurrentRoute(route);
    window.eventBus.emit('route:changed', { route });
  };

  const showNotification = (notification) => {
    setNotification(notification);
    // Auto-hide after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const renderMicrofrontend = () => {
    switch (currentRoute) {
      case 'home':
        return <Home />;
      case 'products':
        return <ProductCatalog />;
      case 'cart':
        return <Cart items={cartItems} />;
      case 'checkout':
        return <Checkout items={cartItems} user={user} />;
      case 'orders':
        return <Orders user={user} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="logo">🛍️ E-Commerce MFE</h1>
          <nav className="main-nav">
            <button 
              className={currentRoute === 'home' ? 'active' : ''} 
              onClick={() => navigate('home')}
            >
              Home
            </button>
            <button 
              className={currentRoute === 'products' ? 'active' : ''} 
              onClick={() => navigate('products')}
            >
              Products
            </button>
            <button 
              className={currentRoute === 'cart' ? 'active' : ''} 
              onClick={() => navigate('cart')}
            >
              Cart ({cartItems.length})
            </button>
            <button 
              className={currentRoute === 'checkout' ? 'active' : ''} 
              onClick={() => navigate('checkout')}
            >
              Checkout
            </button>
            <button 
              className={currentRoute === 'orders' ? 'active' : ''} 
              onClick={() => navigate('orders')}
            >
              Orders
            </button>
          </nav>
          <div className="user-info">
            {user ? `👤 ${user.name}` : 'Guest'}
          </div>
        </div>
      </header>

      <main className="app-main">
        <ErrorBoundary>
          <Suspense fallback={<div className="loading">Loading microfrontend...</div>}>
            {renderMicrofrontend()}
          </Suspense>
        </ErrorBoundary>
      </main>

      {notification && (
        <div className={`notification notification-${notification.type}`}>
          {notification.message}
        </div>
      )}

      <footer className="app-footer">
        <p>Module Federation Demo - Cross-MFE Communication via Custom Events</p>
      </footer>
    </div>
  );
}

export default App;
