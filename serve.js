// Static file server for the Truist clone.
// Local:   node serve.js            -> http://localhost:8082 (localhost only)
// Render:  node serve.js            -> uses the PORT Render provides, listens on 0.0.0.0
// Optional password: set AUTH_USER and AUTH_PASS environment variables (HTTP Basic Auth).

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, 'www.truist.com');

const ON_HOST = !!process.env.PORT;                    // Render sets PORT
const PORT = process.env.PORT || 8082;
const HOST = ON_HOST ? '0.0.0.0' : '127.0.0.1';

const AUTH_USER = process.env.AUTH_USER || '';
const AUTH_PASS = process.env.AUTH_PASS || '';

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

// True only if p is inside ROOT (blocks ../ path traversal)
function inRoot(p) {
  const resolved = path.resolve(p);
  return resolved === ROOT || resolved.startsWith(ROOT + path.sep);
}

const sha = (s) => crypto.createHash('sha256').update(s).digest();

function authorized(req) {
  if (!AUTH_USER || !AUTH_PASS) return true;           // no password configured
  const h = req.headers['authorization'] || '';
  if (!h.startsWith('Basic ')) return false;
  const decoded = Buffer.from(h.slice(6), 'base64').toString('utf8');
  const i = decoded.indexOf(':');
  if (i < 0) return false;
  const user = decoded.slice(0, i), pass = decoded.slice(i + 1);
  return crypto.timingSafeEqual(sha(user), sha(AUTH_USER)) &&
         crypto.timingSafeEqual(sha(pass), sha(AUTH_PASS));
}

function send(res, code, type, body) {
  res.writeHead(code, { 'Content-Type': type, 'X-Robots-Tag': 'noindex, nofollow' });
  res.end(body);
}

function serveFile(filePath, urlPath, fallback, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (fallback) {
        // Try static.truist.com fallback for /content/dam/ paths
        serveFile(fallback, urlPath, null, res);
      } else {
        // Try appending .html
        fs.readFile(filePath + '.html', (err2, data2) => {
          if (err2) {
            // Try as a directory — append /index.html
            fs.readFile(filePath + '/index.html', (err3, data3) => {
              if (err3) {
                send(res, 404, 'text/plain', '404 Not Found: ' + urlPath);
                console.log('[404]', urlPath);
              } else {
                send(res, 200, 'text/html; charset=utf-8', data3);
                console.log('[200] (dir index)', urlPath);
              }
            });
          } else {
            send(res, 200, 'text/html; charset=utf-8', data2);
          }
        });
      }
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': mime,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': ON_HOST ? 'public, max-age=300' : 'no-store, no-cache, must-revalidate',
      'X-Robots-Tag': 'noindex, nofollow',
    });
    res.end(data);
    const via = (filePath.includes('static.truist.com') && !urlPath.startsWith('/static.truist.com'))
      ? ' (via fallback)' : '';
    console.log('[200]' + via, urlPath);
  });
}

const server = http.createServer((req, res) => {
  // Health check for Render (no password needed)
  if (req.url === '/healthz') return send(res, 200, 'text/plain', 'ok');

  if (!authorized(req)) {
    res.writeHead(401, {
      'WWW-Authenticate': 'Basic realm="Truist clone (private)"',
      'Content-Type': 'text/plain',
      'X-Robots-Tag': 'noindex, nofollow',
    });
    return res.end('Authentication required');
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, 'text/plain', 'Method Not Allowed');

  // Decode and strip query string (a malformed URL must not crash the server)
  let urlPath;
  try {
    urlPath = decodeURIComponent(req.url.split('?')[0]);
  } catch (e) {
    return send(res, 400, 'text/plain', 'Bad Request');
  }

  if (urlPath.includes('\0')) return send(res, 400, 'text/plain', 'Bad Request');

  // Default to index.html
  if (urlPath === '/') urlPath = '/index.html';

  // Rewrite JCR paths: jcr:content -> jcrcontent (colon is invalid in Windows filenames)
  urlPath = urlPath.replace(/jcr:content/g, 'jcrcontent');

  const filePath = path.join(ROOT, urlPath);
  if (!inRoot(filePath)) return send(res, 403, 'text/plain', 'Forbidden');

  // For /content/dam/ paths, set up a static.truist.com fallback
  let fallback = null;
  if (urlPath.startsWith('/content/dam/')) {
    const fb = path.join(ROOT, 'static.truist.com', urlPath);
    if (inRoot(fb)) fallback = fb;
  }

  serveFile(filePath, urlPath, fallback, res);
});

server.listen(PORT, HOST, () => {
  console.log('');
  console.log('  Truist clone server running!');
  console.log('  Listening on ' + HOST + ':' + PORT);
  console.log('  Password protection: ' + (AUTH_USER && AUTH_PASS ? 'ON' : 'OFF'));
  console.log('  Root:  ' + ROOT);
  console.log('');
});
