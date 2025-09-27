# Single-SPA Microfrontend Demo

## Overview

This demo showcases **Single-SPA** as a runtime integration approach for microfrontends. Single-SPA is a JavaScript router for front-end microservices that allows you to:

- Use multiple frameworks on the same page
- Deploy microfrontends independently
- Lazy load code for improved initial load times
- Share common dependencies between microfrontends

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Single-SPA Root Config                  │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │   Home   │  │ Products │  │   Cart   │  │ Checkout │   │
│  │   MFE    │  │   MFE    │  │   MFE    │  │   MFE    │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Shared Dependencies                      │   │
│  │         (React, ReactDOM, single-spa)                │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                    Event Bus                          │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Key Features Demonstrated

### 1. **Application Lifecycle**
- `bootstrap`: One-time initialization
- `mount`: Render the application
- `unmount`: Cleanup when navigating away
- `update` (optional): Handle prop updates

### 2. **Activity Functions**
Define when each microfrontend should be active based on the URL

### 3. **Shared Dependencies**
Using SystemJS Import Maps to share React and other common dependencies

### 4. **Cross-MFE Communication**
Event bus for decoupled communication between microfrontends

### 5. **Layout Engine**
Define where and when microfrontends appear in the DOM

## How Single-SPA Works

1. **Root Config**: The main entry point that registers all microfrontends
2. **Applications**: Individual microfrontends with lifecycle methods
3. **Parcels**: Reusable components that can be mounted anywhere
4. **Utilities**: Shared services and helper functions

## Benefits

✅ **Framework Agnostic**: Mix React, Vue, Angular, etc.
✅ **Independent Deployment**: Each MFE can be deployed separately
✅ **Lazy Loading**: Load MFEs only when needed
✅ **Shared Router**: Single-SPA handles all routing
✅ **Error Isolation**: Failures in one MFE don't crash others

## Comparison with Other Approaches

| Feature | Single-SPA | Module Federation | iframes | Web Components | Import Maps |
|---------|------------|------------------|---------|----------------|-------------|
| Framework Agnostic | ✅ | ✅ | ✅ | ✅ | ✅ |
| Shared Dependencies | ✅ | ✅ | ❌ | ⚠️ | ✅ |
| SEO Friendly | ✅ | ✅ | ❌ | ✅ | ✅ |
| Style Isolation | ⚠️ | ⚠️ | ✅ | ✅ | ⚠️ |
| Bundle Size | Good | Excellent | Good | Good | Good |
| Developer Experience | Good | Excellent | Fair | Good | Good |
| Browser Support | Good | Good | Excellent | Good | Modern |

## Project Structure

```
single-spa/
├── root-config/          # Single-SPA root configuration
│   ├── index.html       # Main HTML with import maps
│   ├── root-config.js   # Application registration
│   └── index.css        # Global styles
├── mfe-wrappers/        # Single-SPA wrappers for MFEs
│   ├── home.js         # Home MFE wrapper
│   ├── products.js     # Products MFE wrapper
│   ├── cart.js         # Cart MFE wrapper
│   ├── checkout.js     # Checkout MFE wrapper
│   └── orders.js       # Orders MFE wrapper
└── package.json        # Build scripts and dependencies
```

## Getting Started

```bash
# Install dependencies
npm install

# Build MFE wrappers
npm run build

# Start the development server
npm start

# Open http://localhost:9000
```

## Implementation Details

Each MFE wrapper exports the required lifecycle methods:

```javascript
export async function bootstrap(props) {
  // One-time initialization
}

export async function mount(props) {
  // Render the MFE to the DOM
  ReactDOM.render(<App />, props.domElement);
}

export async function unmount(props) {
  // Cleanup
  ReactDOM.unmountComponentAtNode(props.domElement);
}
```

The root config registers each application:

```javascript
registerApplication({
  name: "@mfe/products",
  app: () => import("@mfe/products"),
  activeWhen: ["/products"],
  customProps: { eventBus }
});
```
