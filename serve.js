// Simple static file server for the Truist local site
// Run: node serve.js
// Then open: http://localhost:8080

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'www.truist.com');
const PORT = 8082;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.mjs': 'application/javascript; charset=utf-8',
  '.map': 'application/json',
};

const server = http.createServer((req, res) => {
  // Decode and strip query string
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  // Default to index.html
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.join(ROOT, urlPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Try appending .html
      fs.readFile(filePath + '.html', (err2, data2) => {
        if (err2) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found: ' + urlPath);
          console.log('[404]', urlPath);
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(data2);
        }
      });
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': mime,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    });
    res.end(data);
    console.log('[200]', urlPath);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('');
  console.log('  Truist local server running!');
  console.log('  Open:  http://localhost:' + PORT);
  console.log('  Root:  ' + ROOT);
  console.log('  Press Ctrl+C to stop.');
  console.log('');
});
