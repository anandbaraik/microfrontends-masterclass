#!/usr/bin/env node

/**
 * Simple HTTP server script to run all iframe MFEs
 * Run with: node start-servers.js
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// Configuration for each MFE
const servers = [
  { name: 'Shell', port: 4000, dir: 'shell' },
  { name: 'Home', port: 4001, dir: 'home' },
  { name: 'Product Catalog', port: 4002, dir: 'product-catalog' },
  { name: 'Cart', port: 4003, dir: 'cart' },
  { name: 'Checkout', port: 4004, dir: 'checkout' },
  { name: 'Orders', port: 4005, dir: 'orders' }
];

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Create server for each MFE
servers.forEach(({ name, port, dir }) => {
  const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }

    // Parse URL
    let filePath = path.join(__dirname, dir, req.url === '/' ? 'index.html' : req.url);
    
    // Get file extension
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Read and serve file
    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === 'ENOENT') {
          // Try to serve index.html as fallback
          const indexPath = path.join(__dirname, dir, 'index.html');
          fs.readFile(indexPath, (err, indexContent) => {
            if (err) {
              res.writeHead(404);
              res.end('404 Not Found');
            } else {
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.end(indexContent, 'utf-8');
            }
          });
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${error.code}`);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });

  server.listen(port, () => {
    console.log(`✅ ${name} MFE running at http://localhost:${port}`);
  });
});

console.log('\n🚀 All iframe MFEs are running!');
console.log('📱 Open http://localhost:4000 in your browser to see the demo\n');
console.log('Press Ctrl+C to stop all servers\n');
