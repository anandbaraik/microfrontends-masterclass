# iframe Integration Demo

This demo showcases iframe-based microfrontend integration with postMessage communication for secure cross-origin messaging.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Shell Application                     │
│                     (Port: 4000)                        │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              iframe Container                    │   │
│  │  ┌──────────────────────────────────────────┐  │   │
│  │  │         Active MFE in iframe             │  │   │
│  │  │    (Isolated JavaScript Context)         │  │   │
│  │  └──────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│           PostMessage Communication Hub                 │
│  ┌────────────────────────────────────────────────┐   │
│  │  Message Types:                                 │   │
│  │  - NAVIGATE, ADD_TO_CART, UPDATE_USER          │   │
│  │  - CART_UPDATED, ORDER_PLACED                  │   │
│  └────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

MFE Endpoints:
- Home: http://localhost:4001
- Product Catalog: http://localhost:4002  
- Cart: http://localhost:4003
- Checkout: http://localhost:4004
- Orders: http://localhost:4005
```

## Key Features

### 1. Complete Isolation
- Each MFE runs in its own iframe with isolated JavaScript context
- No shared dependencies or global namespace pollution
- Complete CSS isolation - no style conflicts

### 2. PostMessage Communication
```javascript
// Sending messages from MFE to Shell
parent.postMessage({
  type: 'NAVIGATE',
  payload: { route: 'products' }
}, '*');

// Receiving messages in Shell
window.addEventListener('message', (event) => {
  if (event.origin !== 'http://localhost:4001') return;
  
  switch(event.data.type) {
    case 'NAVIGATE':
      navigateTo(event.data.payload.route);
      break;
    case 'ADD_TO_CART':
      addToCart(event.data.payload.product);
      break;
  }
});
```

### 3. Security Considerations
- Origin validation for all messages
- Message type whitelisting
- Payload sanitization
- Content Security Policy headers

## Communication Protocol

### Message Structure
```typescript
interface MFEMessage {
  type: string;        // Message type identifier
  payload: any;        // Message data
  timestamp: number;   // Message timestamp
  source: string;      // Source MFE identifier
}
```

### Message Types

| Type | Direction | Description |
|------|-----------|-------------|
| NAVIGATE | MFE → Shell | Request navigation to another MFE |
| ADD_TO_CART | MFE → Shell | Add product to cart |
| REMOVE_FROM_CART | MFE → Shell | Remove product from cart |
| CART_UPDATED | Shell → MFEs | Broadcast cart changes |
| USER_LOGIN | MFE → Shell | User authentication |
| USER_UPDATED | Shell → MFEs | Broadcast user changes |
| NOTIFICATION | MFE → Shell | Show notification |
| RESIZE | MFE → Shell | Request iframe resize |

## Running the Demo

```bash
# Navigate to the iframe-integration directory
cd demo/iframe-integration

# Run the server script
node start-servers.js

# Open http://localhost:4000 in your browser
```

## Advantages
- **Complete Isolation**: No conflicts between MFEs
- **Technology Agnostic**: Can use any framework
- **Security**: Built-in browser security model
- **Simple**: No complex build configurations

## Disadvantages
- **Performance**: iframe overhead
- **SEO**: Limited search engine optimization
- **UX**: Potential scrolling and sizing issues
- **Communication**: More complex than direct function calls
