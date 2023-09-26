const express = require('express');
const morgan = require('morgan');

const server = express();
const port = 4000;

server.use(morgan('dev'));

server.get('/', (request, response) => {
  response.send('works!');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = server;
