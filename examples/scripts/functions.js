export const getAdd = (a, b) => a + b;
export const getSubtract = (a, b) => a - b;
export const getMultiply = (a, b) => a * b;
export const getDivide = (a, b) => a / b;
export const getModule = (a, b) => a % b;
export const getExponent = (a, b) => a ** b;

export const validate = (obj) => {
  for (const key in obj) {
    if (!obj[key]) {
      return false;
    }
  }
  return true;
};

export function getFormattedResult(num1, num2, operation, result) {
  switch (operation) {
    case 'add':
      return `<li class="list-group-item">${num1} + ${num2} = ${result}</li>`;
      break;
    case 'subtract':
      return `<li class="list-group-item">${num1} - ${num2} = ${result}</li>`;
      break;
    case 'multiply':
      return `<li class="list-group-item">${num1} x ${num2} = ${result}</li>`;
      break;
    case 'divide':
      return `<li class="list-group-item">${num1} / ${num2} = ${result}</li>`;
      break;
    case 'module':
      return `<li class="list-group-item">${num1} % ${num2} = ${result}</li>`;
      break;
    case 'exponent':
      return `<li class="list-group-item">${num1} ^ ${num2} = ${result}</li>`;
      break;
    default:
      console.log('Operación ni válida.');
      break;
  }
}
