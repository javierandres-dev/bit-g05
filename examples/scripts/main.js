/*
0. Modo estricto
1. Importaciones
2. Constantes, Variables
3. Código
4. Funciones
*/
// Leer dos números, mostrar operaciones básicas (+,-,x,/,%,exponente).
'use strict';

import {
  getAdd,
  getSubtract,
  getMultiply,
  getDivide,
  getModule,
  getExponent,
  validate,
  getFormattedResult,
} from './functions.js';

const d = document;
const $basicOperationsForm = d.getElementById('basicOperationsForm');
const $firstNumber = d.getElementById('firstNumber');
const $secondNumber = d.getElementById('secondNumber');
const $basicOperationsResults = d.getElementById('basicOperationsResults');

const operands = {
  num1: null,
  num2: null,
};

d.addEventListener('DOMContentLoaded', () => {
  eventListeners();
});

function eventListeners() {
  $basicOperationsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const isValid = validate(operands);
    if (isValid) {
      let html = '<li class="list-group-item active">Operaciones básicas</li>';
      const add = getAdd(operands.num1, operands.num2);
      html += getFormattedResult(operands.num1, operands.num2, 'add', add);
      const subtract = getSubtract(operands.num1, operands.num2);
      html += getFormattedResult(
        operands.num1,
        operands.num2,
        'subtract',
        subtract
      );
      const multiply = getMultiply(operands.num1, operands.num2);
      html += getFormattedResult(
        operands.num1,
        operands.num2,
        'multiply',
        multiply
      );
      const divide = getDivide(operands.num1, operands.num2);
      html += getFormattedResult(
        operands.num1,
        operands.num2,
        'divide',
        divide
      );
      const module = getModule(operands.num1, operands.num2);
      html += getFormattedResult(
        operands.num1,
        operands.num2,
        'module',
        module
      );
      const exponent = getExponent(operands.num1, operands.num2);
      html += getFormattedResult(
        operands.num1,
        operands.num2,
        'exponent',
        exponent
      );
      $basicOperationsResults.innerHTML = html;
    }
  });

  $firstNumber.addEventListener('input', (event) => {
    operands.num1 = event.target.valueAsNumber;
  });

  $secondNumber.addEventListener('input', (event) => {
    operands.num2 = event.target.valueAsNumber;
  });
}
