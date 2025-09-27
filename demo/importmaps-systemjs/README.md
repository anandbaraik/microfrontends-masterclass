# Import Maps + SystemJS Demo

This demo showcases microfrontend integration using native browser Import Maps with SystemJS as a polyfill for broader browser support.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Shell Application                     │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                 Import Map                       │   │
│  │  {                                              │   │
│  │    "imports": {                                 │   │
│  │      "react": "/libs/react.js",                │   │
│  │      "react-dom": "/libs/react-dom.js",        │   │
│  │      "@mfe/home": "/mfe-builds/home.js",       │   │
│  │      "@mfe/products": "/mfe-builds/products.js"│   │
│  │    }                                            │   │
│  │  }                                              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              SystemJS (Fallback)                 │   │
│  │  - Polyfill for browsers without import maps    │   │
│  │  - Dynamic module loading                       │   │
│  │  - Shared dependency management                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Dynamic Module Loading:                               │
│  const Home = await System.import('@mfe/home');       │
└─────────────────────────────────────────────────────────┘
```

## Key Features

### 1. Native Import Maps
- Modern browsers support import maps natively
- Maps bare module specifiers to URLs
- No build-time federation needed

### 2. SystemJS Fallback
- Provides import maps support for older browsers
- Dynamic module loading
- Shared dependency management

### 3. Dynamic Loading
```javascript
// Load MFE dynamically
const module = await System.import('@mfe/home');
const Component = module.default;
```

### 4. Shared Dependencies
- React and React-DOM loaded once
- Shared across all MFEs
- Version management through import maps

## Running the Demo

### 1. Build the MFEs (One-time setup)
```bash
# Navigate to the demo directory
cd demo/importmaps-systemjs

# Install dependencies
npm install

# Build all MFEs as ES modules
npm run build:mfes
```

### 2. Start the Server

#### Option A: Using npm script (Recommended)
```bash
npm start
# Server will run at http://localhost:5000
```

### 3. Open in Browser
Visit http://localhost:5000

## Browser Support

### With Native Import Maps (No Polyfill Needed)
- Chrome 89+
- Edge 89+
- Opera 76+

### With SystemJS Polyfill
- All modern browsers
- IE11+ (with additional polyfills)

## Communication Pattern

Uses the same event bus pattern as Module Federation:
```javascript
// Emit event
window.eventBus.emit('cart:add', { product });

// Listen for events
window.eventBus.on('cart:updated', (event) => {
  console.log('Cart updated:', event.detail);
});
```

## Advantages

1. **No Build Federation**: Uses native browser features
2. **Simple Configuration**: Just update import map
3. **Dynamic Updates**: Change MFE URLs without rebuilding
4. **CDN Friendly**: MFEs can be hosted anywhere
5. **Version Management**: Easy to switch between versions

## Disadvantages

1. **Browser Support**: Limited native support
2. **Network Requests**: More HTTP requests than bundled approach
3. **Build Complexity**: MFEs need special build configuration
4. **TypeScript**: Type sharing is more complex
