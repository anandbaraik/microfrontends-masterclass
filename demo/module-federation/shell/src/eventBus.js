// Global Event Bus for Cross-MFE Communication
window.eventBus = {
  // Emit an event with optional data
  emit: (eventName, data = {}) => {
    console.log(`[EventBus] Emitting: ${eventName}`, data);
    const event = new CustomEvent(eventName, { 
      detail: data,
      bubbles: true,
      cancelable: true 
    });
    window.dispatchEvent(event);
  },

  // Listen for an event
  on: (eventName, handler) => {
    console.log(`[EventBus] Subscribing to: ${eventName}`);
    const wrappedHandler = (event) => handler(event);
    window.addEventListener(eventName, wrappedHandler);
    return wrappedHandler; // Return for removal
  },

  // Remove event listener
  off: (eventName, handler) => {
    console.log(`[EventBus] Unsubscribing from: ${eventName}`);
    window.removeEventListener(eventName, handler);
  },

  // One-time event listener
  once: (eventName, handler) => {
    const wrappedHandler = (event) => {
      handler(event);
      window.eventBus.off(eventName, wrappedHandler);
    };
    window.eventBus.on(eventName, wrappedHandler);
  }
};

// Common events used across MFEs
window.eventBus.events = {
  // Navigation
  NAVIGATE: 'navigate',
  ROUTE_CHANGED: 'route:changed',
  
  // Cart
  ADD_TO_CART: 'cart:add',
  REMOVE_FROM_CART: 'cart:remove',
  UPDATE_CART: 'cart:update',
  CLEAR_CART: 'cart:clear',
  
  // User
  USER_LOGIN: 'user:login',
  USER_LOGOUT: 'user:logout',
  USER_UPDATE: 'user:update',
  
  // Products
  PRODUCT_SELECTED: 'product:selected',
  PRODUCT_SEARCH: 'product:search',
  
  // Orders
  ORDER_PLACED: 'order:placed',
  ORDER_UPDATED: 'order:updated',
  
  // Notifications
  SHOW_NOTIFICATION: 'notification:show',
  HIDE_NOTIFICATION: 'notification:hide',
};
