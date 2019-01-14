const fs = require('fs');
fs.writeFileSync('./.env', `PUBLIC_URL=${process.env.URL}`);
process.exit();
