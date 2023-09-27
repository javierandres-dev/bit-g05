const mongoose = require('mongoose');

mongoose
  .connect(process.env.ATLAS_URI)
  .then((db) => console.log('Success! Database connected.'))
  .catch((err) => console.log("Fail! Database isn't connected."));
