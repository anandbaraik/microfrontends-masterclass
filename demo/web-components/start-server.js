#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 7070;

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

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Default to index.html
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(__dirname, filePath);

  // Get file extension
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Read and serve file
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404);
        res.end('404 Not Found');
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

server.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════╗
║                                                        ║
║   🔧 Web Components Demo Server                        ║
║                                                        ║
║   Server running at: http://localhost:${PORT}            ║
║                                                        ║
║   Features:                                            ║
║   ✅ Native Custom Elements                           ║
║   ✅ Shadow DOM encapsulation                         ║
║   ✅ No framework dependencies                        ║
║   ✅ Custom events for communication                  ║
║   ✅ Style isolation per component                    ║
║                                                        ║
║   Components:                                          ║
║   • <mfe-home>                                        ║
║   • <mfe-products>                                    ║
║   • <mfe-cart>                                        ║
║   • <mfe-checkout>                                    ║
║   • <mfe-orders>                                      ║
║                                                        ║
║   Press Ctrl+C to stop the server                     ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
  `);
});
