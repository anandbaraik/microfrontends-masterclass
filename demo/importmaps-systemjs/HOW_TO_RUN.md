# How to Run Import Maps + SystemJS Demo

## Quick Start

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

#### Option B: Using Node.js directly
```bash
node start-server.js
```

### 3. Open in Browser
Visit http://localhost:5000

## What You'll See

1. **Dynamic Module Loading**: MFEs are loaded on-demand using import maps
2. **Cross-MFE Communication**: Click products to add to cart, see real-time updates
3. **Browser Compatibility**: 
   - Modern browsers use native import maps
   - Older browsers fall back to SystemJS
4. **Module Loading Status**: Bottom-right indicator shows loading status

## Browser DevTools

Open browser console to see:
- Import map configuration
- Module loading logs
- Event bus communication
- Native vs SystemJS loading mode

## Features Demonstrated

✅ **Import Maps**: Native browser module resolution
✅ **SystemJS Fallback**: For browsers without import map support
✅ **Dynamic Imports**: MFEs loaded on navigation
✅ **Shared Dependencies**: React/ReactDOM loaded from CDN
✅ **Event Bus**: Same communication pattern as Module Federation
✅ **ES Modules**: Modern JavaScript module format
✅ **No Build Federation**: Just simple ES modules

## Troubleshooting

### MFEs not loading?
1. Check that MFEs are built: `ls mfe-builds/`
2. Rebuild if needed: `npm run build:mfes`

### CORS errors?
Make sure you're accessing via http://localhost:5000, not file://

### Import map not working?
- Chrome/Edge 89+ required for native support
- SystemJS fallback should work in all modern browsers

## Browser Support

### Native Import Maps (Green indicator)
- Chrome 89+
- Edge 89+
- Opera 76+

### With SystemJS Polyfill (Yellow indicator)
- Firefox
- Safari
- Older Chrome/Edge versions

## Architecture Notes

1. **MFEs are built as ES modules** using esbuild
2. **React is external** - loaded from CDN
3. **Import map** defines module locations
4. **SystemJS** provides fallback for older browsers
5. **Event bus** enables cross-MFE communication
