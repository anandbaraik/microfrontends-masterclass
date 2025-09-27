# Module Federation Demo

This demo showcases Webpack 5's Module Federation for runtime integration of microfrontends in an e-commerce application.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                     Shell Application                    │
│                    (Port: 3000)                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                  App Container                    │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐        │   │
│  │  │Navigation│ │  Router  │ │Event Bus │        │   │
│  │  └──────────┘ └──────────┘ └──────────┘        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Remote Modules Loading:                               │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │   Home   │ │ Product  │ │   Cart   │ │ Checkout │ │
│  │  (3001)  │ │  (3002)  │ │  (3003)  │ │  (3004)  │ │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
│                    ┌──────────┐                        │
│                    │  Orders  │                        │
│                    │  (3005)  │                        │
│                    └──────────┘                        │
└─────────────────────────────────────────────────────────┘
```

## Setup Instructions

### First Time Setup
```bash
# Navigate to the module-federation directory
cd demo/module-federation

# Install all dependencies
npm run install:all
```

### Running the Demo
```bash
# Start all applications simultaneously
npm run start:all

# Or start individually in separate terminals
npm run start:shell    # Shell at http://localhost:3000
npm run start:home     # Home MFE at http://localhost:3001
npm run start:products # Products at http://localhost:3002
npm run start:cart     # Cart at http://localhost:3003
npm run start:checkout # Checkout at http://localhost:3004
npm run start:orders   # Orders at http://localhost:3005
```

Open http://localhost:3000 in your browser to see the demo.

## Cross-MFE Communication

This demo uses a custom event bus for communication between microfrontends:

```javascript
// Event Bus Pattern
window.eventBus = {
  emit: (event, data) => {
    window.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  on: (event, handler) => {
    window.addEventListener(event, handler);
  },
  off: (event, handler) => {
    window.removeEventListener(event, handler);
  }
};
```

## Key Features Demonstrated

1. **Dynamic Remote Loading**: MFEs are loaded at runtime
2. **Shared Dependencies**: React, React-DOM shared across all MFEs
3. **Independent Deployment**: Each MFE can be deployed separately
4. **Version Management**: Automatic version resolution
5. **Fallback Handling**: Error boundaries for failed MFE loads
