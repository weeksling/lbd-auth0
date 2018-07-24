require('dotenv').config();

const server = require('./src/server');

server.listen(process.env.PORT || 3000);

process.on('uncaughtException', err => {
  console.error(err, 'Uncaught Exception thrown');
  process.exit(1);
});
