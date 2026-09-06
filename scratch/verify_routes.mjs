import http from 'http';

const endpoints = [
  '/',
  '/login',
  '/dashboard',
  '/scan',
  '/verify/HC1024',
  '/verify/HC1001',
  '/history',
  '/qrcodes',
  '/data/batches/HC1024.json',
  '/data/batches/HC1001.json',
  '/data/batches/manifest.json',
];

async function checkEndpoint(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ path, status: res.statusCode, length: data.length });
      });
    }).on('error', (err) => {
      resolve({ path, status: 'ERROR', error: err.message });
    });
  });
}

async function run() {
  console.log('Testing Honey Chain Web & API Endpoints:');
  for (const ep of endpoints) {
    const res = await checkEndpoint(ep);
    const pass = res.status === 200 ? '✓ PASS' : '✗ FAIL';
    console.log(`${pass} [${res.status}] ${res.path} (${res.length || 0} bytes)`);
  }
}

run();
