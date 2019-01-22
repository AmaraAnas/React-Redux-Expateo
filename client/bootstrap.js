const fs = require('fs');
if (process.env.URL) {
  fs.writeFileSync('./.env', `PUBLIC_URL=${process.env.URL}`);
}
process.exit();
