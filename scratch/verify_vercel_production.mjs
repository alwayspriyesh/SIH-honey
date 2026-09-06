import https from 'https';

const domain = 'honey-chain-lac.vercel.app';
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

async function check(path) {
  return new Promise((resolve) => {
    https.get(`https://${domain}${path}`, (res) => {
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
  console.log(`Checking Live Vercel Production: https://${domain}`);
  let allPass = true;
  for (const ep of endpoints) {
    const res = await check(ep);
    const pass = res.status === 200 ? '✓ PASS' : '✗ FAIL';
    if (res.status !== 200) allPass = false;
    console.log(`${pass} [${res.status}] https://${domain}${res.path} (${res.length} bytes)`);
  }
  if (allPass) {
    console.log('\nAll production routes and static JSON batch assets verified successfully!');
  } else {
    console.error('\nSome production endpoints failed.');
    process.exit(1);
  }
}

run();
