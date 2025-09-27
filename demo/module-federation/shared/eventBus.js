// Shared Event Bus utility that works in both federated and standalone mode

// Check if we're running in standalone mode
const isStandalone = !window.eventBus;

// Create a mock eventBus for standalone development
if (isStandalone) {
  console.log('Running in standalone mode - creating mock eventBus');
  
  window.eventBus = {
    emit: (eventName, data = {}) => {
      console.log(`[Mock EventBus] Event emitted: ${eventName}`, data);
    },
    on: (eventName, handler) => {
      console.log(`[Mock EventBus] Listener registered for: ${eventName}`);
      // Return a no-op handler for standalone mode
      return () => {};
    },
    off: (eventName, handler) => {
      console.log(`[Mock EventBus] Listener removed for: ${eventName}`);
    },
    once: (eventName, handler) => {
      console.log(`[Mock EventBus] One-time listener registered for: ${eventName}`);
    }
  };
  
  // Add common event names for reference
  window.eventBus.events = {
    NAVIGATE: 'navigate',
    ROUTE_CHANGED: 'route:changed',
    ADD_TO_CART: 'cart:add',
    REMOVE_FROM_CART: 'cart:remove',
    UPDATE_CART: 'cart:update',
    CLEAR_CART: 'cart:clear',
    USER_LOGIN: 'user:login',
    USER_LOGOUT: 'user:logout',
    USER_UPDATE: 'user:update',
    PRODUCT_SELECTED: 'product:selected',
    PRODUCT_SEARCH: 'product:search',
    ORDER_PLACED: 'order:placed',
    ORDER_UPDATED: 'order:updated',
    SHOW_NOTIFICATION: 'notification:show',
    HIDE_NOTIFICATION: 'notification:hide',
  };
}

export default window.eventBus;
