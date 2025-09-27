import { registerApplication, start } from 'single-spa';

// Register MFE applications
const mfeApps = [
  {
    name: '@mfe/home',
    app: () => System.import('@mfe/home'),
    activeWhen: (location) => location.pathname === '/' || location.pathname === '',
    customProps: {
      eventBus: window.eventBus,
      domElementGetter: () => document.getElementById('mfe-container')
    }
  },
  {
    name: '@mfe/products',
    app: () => System.import('@mfe/products'),
    activeWhen: '/products',
    customProps: {
      eventBus: window.eventBus,
      domElementGetter: () => document.getElementById('mfe-container')
    }
  },
  {
    name: '@mfe/cart',
    app: () => System.import('@mfe/cart'),
    activeWhen: '/cart',
    customProps: {
      eventBus: window.eventBus,
      domElementGetter: () => document.getElementById('mfe-container')
    }
  },
  {
    name: '@mfe/checkout',
    app: () => System.import('@mfe/checkout'),
    activeWhen: '/checkout',
    customProps: {
      eventBus: window.eventBus,
      domElementGetter: () => document.getElementById('mfe-container')
    }
  },
  {
    name: '@mfe/orders',
    app: () => System.import('@mfe/orders'),
    activeWhen: '/orders',
    customProps: {
      eventBus: window.eventBus,
      domElementGetter: () => document.getElementById('mfe-container')
    }
  }
];

// Register all applications
mfeApps.forEach(app => {
  registerApplication(app);
});

// Start Single-SPA
start({
  urlRerouteOnly: true,
});

// Handle navigation clicks
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' || e.target.closest('a')) {
    const link = e.target.tagName === 'A' ? e.target : e.target.closest('a');
    const href = link.getAttribute('href');
    
    // Handle internal navigation
    if (href && href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault();
      history.pushState(null, null, href);
      
      // Trigger Single-SPA reroute
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }
});

// Log Single-SPA events for debugging
window.addEventListener('single-spa:before-app-change', (evt) => {
  console.log('[Single-SPA] App change:', evt.detail);
});

window.addEventListener('single-spa:app-change', (evt) => {
  console.log('[Single-SPA] App changed:', evt.detail);
  
  // Clear the loading message once apps are mounted
  const container = document.getElementById('mfe-container');
  if (container && container.querySelector('.loading')) {
    container.innerHTML = '';
  }
});

// Error handling
window.addEventListener('single-spa:before-routing-event', (evt) => {
  console.log('[Single-SPA] Routing:', window.location.pathname);
});

// Export for SystemJS
export default true;
