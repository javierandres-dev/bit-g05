const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const usersRouter = require('./routers/usersRouter');
const tasksRouter = require('./routers/tasksRouter');
const loginRouter = require('./routers/loginRouter');

const server = express();
const port = process.env.PORT;

server.set('port', port);

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.use('/login/', loginRouter);
server.use('/users/', usersRouter);
server.use('/tasks/', tasksRouter);
server.get('/', (request, response) => {
  response.json({ message: 'works!' });
});

module.exports = server;
