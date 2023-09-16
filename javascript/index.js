/* Soy un comentario multilinea */
// Soy un comentario de una sola línea

// Interacción
/*
prompt('Hola soy prompt y recibo datos, ingresa un dato:');
confirm('Hola soy un confirm y recibo un dato:');
console.log('hola desde JS en archivo externo!');
document.write('Hola!');
alert('Hola, soy un alert');
*/

// Variables, Constantes
/*
nombre = 'Pepita';
var apellido = "Pérez";
let segundoApellido = "Pérez";
segundoApellido = "De la Torre"
const correo = "pepita@ejemplo.com"
console.log(nombre, apellido, segundoApellido, correo);
*/

// Ámbito de las variables, Scope
/*
var nombre = "Pepita"
{
  let apellido = "Pérez"
  console.log(nombre, apellido);
}
*/

// Modo estricto
'use strict'; // Habilitar el modo estricto
/*
const nombre = "Pepita"
console.log(nombre);
*/

// Tipos de dato primitivo
/*
let cadena = 'a';
cadena = "Pepita Pérez";
cadena = `Pepa`;
console.log(cadena);
console.log(typeof cadena);
let numero = 10;
numero = 0.5;
numero = NaN;
console.log(numero);
console.log(typeof numero);
let booleano = true;
booleano = false;
console.log(booleano);
console.log(typeof booleano);
const indefinido = undefined;
console.log(indefinido);
console.log(typeof indefinido);
const nulo = null;
console.log(nulo);
console.log(typeof nulo);
*/

// Conversión de tipos
/*
let variable = "10";
variable = parseInt(variable)
variable = "10.5";
variable = parseFloat(variable)
variable = +"100";
console.log(variable);
console.log(typeof variable);
*/

// Truthy
/*
let verdadero = true;
verdadero = "false";
verdadero = 1;
verdadero = 1.5;
verdadero = [];
verdadero = {};
verdadero = Boolean(verdadero)
console.log(verdadero);
console.log(typeof verdadero);
*/

// Falsy
/*
let falso = undefined;
falso = null;
falso = "";
falso = 0;
falso = -0;
falso = NaN;
falso = false;
falso = Boolean(falso)
console.log(falso);
console.log(typeof falso);
*/

// Operadores
/*
let variable1 = "Pepita";
let variable2 = "Pérez";
let resultado = variable1 + variable2;
variable1 = 10;
variable2 = 5;
resultado = variable1 + variable2;
variable1 = "Pepita";
variable2 = 5;
resultado = variable1 + variable2;
variable1 = "10";
variable2 = 5;
resultado = variable1 + variable2;
variable1 = 10;
variable2 = 5;
resultado = variable1 - variable2;
resultado = variable1 * variable2;
resultado = variable1 / variable2;
resultado = variable1 % variable2;
resultado = ++variable1;
resultado = --variable1;
resultado = resultado ** 2
resultado += 2;
resultado -= 2;
resultado *= 2;
resultado /= 2;
resultado %= 2;
resultado **= 2;
resultado = resultado == 10
resultado = 10 == "10"
resultado = 10 === "10"
resultado = 10 < 10
resultado = 10 <= 10
resultado = 10 > 10
resultado = 10 >= 10
resultado = 10 != 10
resultado = 10 !== 10
resultado = 10 === 10 && 5 === 5;
resultado = 10 === 10 && 5 === 50;
resultado = 10 === 10 || 5 === 5;
resultado = 10 === 10 || 5 === 50;
resultado = !true;
resultado = (10 + 5) * 3
console.log(resultado);
*/

// Operador ternario
/*
const resultado = 10 === 100 ? "Si, es verdadero." : "No, es falso."
console.log(resultado);
*/

// Condicionales
/*
if (true) {
  console.log("Si, la condición fue evaluada como verdadera.");
}

if (false) {
  console.log("Si, la condición fue evaluada como verdadera.");
} else {
  console.log("No, la condición fue evaluada como falsa.");
}

const nombre = "Luis"
if (nombre === "Pepito") {
  console.log("Hola señor Pepito");
} else if (nombre === "Pepita") {
  console.log("Hola señora Pepita");
} else {
  console.log("Hola");
}

const color = 'rojo';
switch (color) {
  case 'azul':
    console.log('el color es azul.');
    break;
  case 'rojo':
    console.log('el color es rojo.');
    break;
  case 'verde':
    console.log('el color es verde.');
    break;
  default:
    console.log('El color no es válido');
    break;
}
*/

// Ciclos, loops, bucle, iteraciones
/*
for (let i = 0; i < 5; i++) {
  console.log('iterando con for, el valor de i es:', i);
}

let i = 0;
while (i < 5) {
  console.log('iterando con while, el valor de i es:', i);
  i++;
}

i = 10;
do {
  console.log('iterando con do...while, el valor de i es:', i);
  i++;
} while (i < 5);

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    break;
  } else {
    console.log('iterando con for, el valor de i es:', i);
  }
}

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  } else {
    console.log('iterando con for, el valor de i es:', i);
  }
}
*/

// Tipos de dato no primitivos
// Arreglo, array
/*
let arreglo = [];
arreglo = [1, 2, 3];
arreglo = ['a', 'b', 'c'];
arreglo = [1, 'a', true, [], {}, null];
arreglo = ['guillermo', 'mauricio', 'mateo', 'jose'];
console.log(arreglo);
console.log(arreglo[0]);
arreglo[1] = 'nelson';
console.log(arreglo);
*/

// Objeto
/*
let objeto = {};
objeto = {
  nombre: 'pepita',
  apellido: 'pérez',
  casada: false,
  hijos: 1,
  web: null,
  saludar: function () {
    console.log('hola');
  },
};
console.log(objeto);
console.log(objeto.nombre);
console.log(objeto['apellido']);
objeto.saludar();
*/

// Operador instanceof
/*
const arr = [];
console.log(arr);
console.log(typeof arr);
console.log(arr instanceof Array);
console.log(arr instanceof Object);

const obj = {};
console.log(obj);
console.log(typeof obj);
console.log(obj instanceof Object);
console.log(obj instanceof Array);
*/