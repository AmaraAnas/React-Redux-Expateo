const fs = require('fs');
console.log('------------------------');
console.log('>>> STARTING BOOTSTRAP');
if (process.env.URL) {
  const envContent = `PUBLIC_URL=${process.env.DEPLOY_PRIME_URL}`;
  console.log('   > write :', envContent);
  fs.writeFileSync('./.env', envContent);
  console.log('   > wrote.');
}
console.log('>>> ENDING BOOTSTRAP');
console.log('------------------------');
process.exit();
