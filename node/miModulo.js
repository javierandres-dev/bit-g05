//exports.propiedad = 'valor de la propiedad';
const operacionesBasicas = {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b,
  multiplicacion: (a, b) => a * b,
  division: (a, b) => {
    if (b === 0) {
      return 'Error: La diviión en cero no es válida.';
    } else {
      return a / b;
    }
  },
};
module.exports = operacionesBasicas;
