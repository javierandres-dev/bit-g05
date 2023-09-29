require('dotenv').config();
require('./database');
const server = require('./server');

const port = server.get('port');

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
