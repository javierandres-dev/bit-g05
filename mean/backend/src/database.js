const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_ATLAS_URI)
  .then((db) => console.log('Successfully! Database connected.'))
  .catch((err) => console.log("Failed. Database isn't connected."));
