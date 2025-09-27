# How to Run Single-SPA Demo

## Quick Start

### 1. Install Dependencies
```bash
cd demo/single-spa
npm install
```

### 2. Build the MFE Wrappers
```bash
npm run build:mfes
```

### 3. Start the Development Server
```bash
npm start
```

### 4. Open in Browser
Visit http://localhost:9000

## What You'll See

1. **Framework-Agnostic Orchestration**: Single-SPA managing multiple React MFEs
2. **Lazy Loading**: MFEs loaded only when their routes are active
3. **Lifecycle Management**: Bootstrap, mount, unmount for each MFE
4. **Shared Dependencies**: React and ReactDOM shared via SystemJS
5. **Cross-MFE Communication**: Event bus working across all MFEs

## Features Demonstrated

✅ **Application Lifecycle**: Each MFE has bootstrap, mount, unmount methods
✅ **Route-Based Activation**: MFEs activate based on URL patterns
✅ **Error Boundaries**: Failures isolated per MFE
✅ **Shared Router**: Single-SPA handles all routing
✅ **Event Bus**: Same communication as other demos
✅ **Status Indicator**: Shows Single-SPA is active

## Architecture

```
Browser
  └─> Single-SPA Root Config
        ├─> Route Matching
        ├─> Application Registration
        ├─> Lifecycle Management
        └─> MFE Applications
              ├─> Home (/)
              ├─> Products (/products)
              ├─> Cart (/cart)
              ├─> Checkout (/checkout)
              └─> Orders (/orders)
```

## Browser DevTools

Open the console to see:
- Single-SPA lifecycle events
- Route changes
- MFE mounting/unmounting
- Event bus communication

## Troubleshooting

### MFEs not loading?
1. Check that MFEs are built: `ls mfe-builds/`
2. Rebuild if needed: `npm run build:mfes`
3. Check browser console for errors

### SystemJS errors?
- Make sure you're accessing via http://localhost:9000
- Check that all external scripts are loading

### Route not working?
- Single-SPA uses browser history API
- Make sure webpack dev server has `historyApiFallback: true`

## Key Differences from Other Approaches

| Aspect | Single-SPA | Module Federation | Import Maps |
|--------|------------|------------------|-------------|
| **Setup Complexity** | Moderate | High | Low |
| **Framework Support** | Excellent | Good | Good |
| **Lifecycle Control** | Full | Limited | Limited |
| **Bundle Size** | Good | Excellent | Good |
| **Dev Experience** | Good | Excellent | Good |

## Testing Cross-MFE Communication

1. Navigate to Products page
2. Click "Add to Cart" on any product
3. See cart count update in header
4. Navigate to Cart page
5. See all added items
6. Clear cart and see count reset

## Production Considerations

1. **Deployment**: Each MFE can be deployed independently
2. **Caching**: Use content-hash in filenames
3. **Performance**: Consider preloading critical MFEs
4. **Error Handling**: Implement fallback UI for failed MFEs
5. **Monitoring**: Track MFE load times and errors
