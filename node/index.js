// Módulos propios

/*
const propiedad = require('./miModulo');
console.log(propiedad);
*/

/*
const operacionesBasicas = require('./miModulo');
console.log(operacionesBasicas);
console.log(operacionesBasicas.suma(20, 5));
console.log(operacionesBasicas.resta(20, 5));
console.log(operacionesBasicas.multiplicacion(20, 5));
console.log(operacionesBasicas.division(20, 5));
console.log(operacionesBasicas.division(20, 0));
*/

// Módulos integrados
/*
const os = require('os');
console.log(os);
console.log(os.platform());
console.log(os.release());
console.log(os.version());
console.log(os.totalmem());
console.log(os.freemem());
*/

/*
const http = require('http');
console.log(http);
http
  .createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.write(`
  <!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Documento HTML</title>
  </head>
  <body>
    <h1>Respuesta de mi servidor HTTP desde NodeJS.</h1>
  </body>
</html>
  `);
    response.end();
  })
  .listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000...');
  });
*/
