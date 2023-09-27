const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://u-bit2023:P-BIT2023@cluster0.krahm.mongodb.net/?retryWrites=true&w=majority'
  )
  .then((db) => console.log('Bien, conectado a la base de datos'))
  .catch((err) => console.log('Mal, no se conectó a la base de datos'));
