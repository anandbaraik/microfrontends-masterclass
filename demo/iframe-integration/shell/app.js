// iframe Shell Application - PostMessage Communication Hub

class ShellApp {
  constructor() {
    this.currentRoute = 'home';
    this.cartItems = [];
    this.user = null;
    this.iframe = document.getElementById('mfe-frame');
    this.messageLog = document.getElementById('messageLog');
    
    // MFE URLs
    this.mfeUrls = {
      home: 'http://localhost:4001',
      products: 'http://localhost:4002',
      cart: 'http://localhost:4003',
      checkout: 'http://localhost:4004',
      orders: 'http://localhost:4005'
    };

    // Allowed origins for security
    this.allowedOrigins = Object.values(this.mfeUrls);
    
    this.init();
  }

  init() {
    // Set up navigation
    this.setupNavigation();
    
    // Set up message listener
    this.setupMessageListener();
    
    // Initialize cart from localStorage
    this.loadCart();
    
    // Load user from sessionStorage
    this.loadUser();
  }

  setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const route = e.target.dataset.route;
        this.navigate(route);
      });
    });
  }

  navigate(route) {
    if (this.mfeUrls[route]) {
      this.currentRoute = route;
      
      // Update active nav button
      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.route === route);
      });
      
      // Load new MFE in iframe
      this.iframe.src = this.mfeUrls[route];
      
      // Log navigation
      this.logMessage('NAVIGATE', { route }, 'Shell');
    }
  }

  setupMessageListener() {
    window.addEventListener('message', (event) => {
      // Security: Validate origin
      if (!this.allowedOrigins.includes(event.origin)) {
        console.warn('Rejected message from untrusted origin:', event.origin);
        return;
      }

      const { type, payload, source } = event.data;
      
      // Log the message
      this.logMessage(type, payload, source || event.origin);
      
      // Handle different message types
      switch(type) {
        case 'NAVIGATE':
          this.handleNavigate(payload);
          break;
          
        case 'ADD_TO_CART':
          this.handleAddToCart(payload);
          break;
          
        case 'REMOVE_FROM_CART':
          this.handleRemoveFromCart(payload);
          break;
          
        case 'UPDATE_CART_QUANTITY':
          this.handleUpdateCartQuantity(payload);
          break;
          
        case 'CLEAR_CART':
          this.handleClearCart();
          break;
          
        case 'USER_LOGIN':
          this.handleUserLogin(payload);
          break;
          
        case 'USER_LOGOUT':
          this.handleUserLogout();
          break;
          
        case 'SHOW_NOTIFICATION':
          this.showNotification(payload);
          break;
          
        case 'REQUEST_CART_DATA':
          this.sendCartData();
          break;
          
        case 'REQUEST_USER_DATA':
          this.sendUserData();
          break;
          
        case 'IFRAME_RESIZE':
          this.handleIframeResize(payload);
          break;
          
        default:
          console.log('Unknown message type:', type);
      }
    });
  }

  // Message Handlers
  handleNavigate(payload) {
    this.navigate(payload.route);
  }

  handleAddToCart(payload) {
    const { product } = payload;
    const existingItem = this.cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += product.quantity || 1;
    } else {
      this.cartItems.push({ ...product, quantity: product.quantity || 1 });
    }
    
    this.saveCart();
    this.updateCartUI();
    this.broadcastCartUpdate();
    this.showNotification({
      type: 'success',
      message: `${product.name} added to cart!`
    });
  }

  handleRemoveFromCart(payload) {
    const { productId } = payload;
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.saveCart();
    this.updateCartUI();
    this.broadcastCartUpdate();
  }

  handleUpdateCartQuantity(payload) {
    const { productId, quantity } = payload;
    const item = this.cartItems.find(item => item.id === productId);
    
    if (item) {
      if (quantity <= 0) {
        this.handleRemoveFromCart({ productId });
      } else {
        item.quantity = quantity;
        this.saveCart();
        this.updateCartUI();
        this.broadcastCartUpdate();
      }
    }
  }

  handleClearCart() {
    this.cartItems = [];
    this.saveCart();
    this.updateCartUI();
    this.broadcastCartUpdate();
  }

  handleUserLogin(payload) {
    this.user = payload.user;
    this.saveUser();
    this.updateUserUI();
    this.broadcastUserUpdate();
    this.showNotification({
      type: 'success',
      message: `Welcome, ${this.user.name}!`
    });
  }

  handleUserLogout() {
    this.user = null;
    sessionStorage.removeItem('user');
    this.updateUserUI();
    this.broadcastUserUpdate();
  }

  handleIframeResize(payload) {
    if (payload.height) {
      this.iframe.style.height = `${payload.height}px`;
    }
  }

  // Broadcasting methods
  broadcastCartUpdate() {
    this.postMessageToMFE({
      type: 'CART_UPDATED',
      payload: {
        items: this.cartItems,
        count: this.cartItems.reduce((sum, item) => sum + item.quantity, 0),
        total: this.calculateCartTotal()
      }
    });
  }

  broadcastUserUpdate() {
    this.postMessageToMFE({
      type: 'USER_UPDATED',
      payload: { user: this.user }
    });
  }

  sendCartData() {
    this.postMessageToMFE({
      type: 'CART_DATA',
      payload: {
        items: this.cartItems,
        count: this.cartItems.reduce((sum, item) => sum + item.quantity, 0),
        total: this.calculateCartTotal()
      }
    });
  }

  sendUserData() {
    this.postMessageToMFE({
      type: 'USER_DATA',
      payload: { user: this.user }
    });
  }

  postMessageToMFE(message) {
    if (this.iframe && this.iframe.contentWindow) {
      this.iframe.contentWindow.postMessage({
        ...message,
        timestamp: Date.now(),
        source: 'Shell'
      }, '*');
    }
  }

  // UI Update methods
  updateCartUI() {
    const cartCount = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = cartCount;
  }

  updateUserUI() {
    document.getElementById('userName').textContent = 
      this.user ? `👤 ${this.user.name}` : 'Guest';
  }

  showNotification(payload) {
    const notification = document.getElementById('notification');
    notification.className = `notification show ${payload.type}`;
    notification.textContent = payload.message;
    
    setTimeout(() => {
      notification.classList.remove('show');
    }, payload.duration || 3000);
  }

  // Utility methods
  calculateCartTotal() {
    return this.cartItems.reduce((total, item) => 
      total + (item.price * item.quantity), 0
    );
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.updateCartUI();
    }
  }

  saveUser() {
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }

  loadUser() {
    const savedUser = sessionStorage.getItem('user');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      this.updateUserUI();
    }
  }

  logMessage(type, payload, source) {
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.innerHTML = `
      <span class="log-time">${new Date().toLocaleTimeString()}</span>
      <span class="log-source">${source}</span>
      <span class="log-type">${type}</span>
      <span class="log-payload">${JSON.stringify(payload)}</span>
    `;
    
    this.messageLog.insertBefore(logEntry, this.messageLog.firstChild);
    
    // Keep only last 20 messages
    while (this.messageLog.children.length > 20) {
      this.messageLog.removeChild(this.messageLog.lastChild);
    }
  }
}

// Initialize the shell app
document.addEventListener('DOMContentLoaded', () => {
  new ShellApp();
});
