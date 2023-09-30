const express = require('express');
const morgan = require('morgan');
const usersRouter = require('./routers/usersRouter');

const server = express();
const port = process.env.PORT;

server.set('port', port);

server.use(express.json());
server.use(morgan('dev'));

server.use('/users/', usersRouter);
server.get('/', (request, response) => {
  response.json({ message: 'works!' });
});

module.exports = server;
