/* Soy un comentario multilinea */
// Soy un comentario de una sola línea

// Interacción
/*
console.log('hola desde JS en archivo externo!');
alert('Hola, soy un alert');
prompt('Hola soy prompt y recibo datos, ingresa un dato:');
confirm('Hola soy un confirm y recibo un dato:');
document.write('Hola!');
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
"use strict" // Habilitar el modo estricto
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
