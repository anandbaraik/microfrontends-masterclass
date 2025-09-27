# Web Components Demo

This demo showcases Web Components as a microfrontend integration approach, using custom elements with Shadow DOM for encapsulation and custom events for communication.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                   Shell Application                      │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │            Custom Element Registry               │   │
│  │  <mfe-home>  <mfe-products>  <mfe-cart>        │   │
│  │  <mfe-checkout>  <mfe-orders>                   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │         Custom Events Communication              │   │
│  │  - mfe:navigate                                 │   │
│  │  - mfe:add-to-cart                             │   │
│  │  - mfe:cart-updated                            │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Each Web Component:                                   │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Shadow DOM (Encapsulated styles & markup)      │   │
│  │  Lifecycle callbacks                            │   │
│  │  Custom properties & attributes                 │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

## Key Features

### 1. Native Browser Technology
- No framework dependencies
- Built on web standards
- Works in all modern browsers

### 2. Encapsulation with Shadow DOM
```javascript
class MFEHome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Styles are scoped to this component */
        :host { display: block; }
      </style>
      <div>Component content</div>
    `;
  }
}
customElements.define('mfe-home', MFEHome);
```

### 3. Custom Events Communication
```javascript
// Dispatching custom events
this.dispatchEvent(new CustomEvent('mfe:navigate', {
  detail: { route: 'products' },
  bubbles: true,
  composed: true // Crosses shadow DOM boundary
}));

// Listening for events
document.addEventListener('mfe:navigate', (event) => {
  console.log('Navigation requested:', event.detail);
});
```

### 4. Properties and Attributes
```javascript
// Setting attributes
<mfe-cart items='[{"id":1,"name":"Product"}]'></mfe-cart>

// Observing attribute changes
static get observedAttributes() {
  return ['items', 'user'];
}

attributeChangedCallback(name, oldValue, newValue) {
  // React to attribute changes
}
```

## Running the Demo

Just open the `index.html` file in the `demo/web-components` directory in a modern browser.

## Communication Patterns

### Event-Based Communication
All MFEs communicate through custom events:

| Event | Description | Payload |
|-------|-------------|---------|
| mfe:navigate | Request navigation | `{ route: string }` |
| mfe:add-to-cart | Add item to cart | `{ product: Product }` |
| mfe:cart-updated | Cart state changed | `{ items: Item[], total: number }` |
| mfe:user-login | User authenticated | `{ user: User }` |
| mfe:notification | Show notification | `{ message: string, type: string }` |

### State Management
- Local state within each component
- Shared state through custom events
- Optional integration with state management libraries

## Browser Support

- Chrome 67+
- Firefox 63+
- Safari 13.1+
- Edge 79+

## Advantages

1. **No Build Step**: Pure web standards, no compilation needed
2. **Framework Agnostic**: Can wrap any framework or vanilla JS
3. **True Encapsulation**: Shadow DOM provides style isolation
4. **Small Bundle Size**: No framework overhead
5. **Future Proof**: Based on web standards

## Disadvantages

1. **Browser Support**: Older browsers need polyfills
2. **Learning Curve**: Different paradigm from frameworks
3. **Tooling**: Less mature ecosystem compared to frameworks
4. **SSR Complexity**: Server-side rendering is challenging
