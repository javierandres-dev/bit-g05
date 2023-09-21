'use strict';
const d = document;
const $form = d.querySelector('form');
const $p = d.querySelector('p');

let username = null;

$form.name.addEventListener('input', (event) => {
  username = event.target.value;
});

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  saludar(username);
});

function saludar(name) {
  if (name) {
    $p.classList.add('success');
    $p.textContent = `Hola, ${name}!`;
    $form.reset();
  } else {
    $p.classList.add('danger');
    $p.textContent = 'Por favor ingresa tu nombre.';
    setTimeout(() => {
      $p.classList.remove('danger');
      $p.textContent = '';
    }, 3000);
  }
}
