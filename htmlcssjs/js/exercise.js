'use strict';
/* const d = document;
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
} */
const d = document,
  $root = d.getElementById('root'),
  $loader = d.getElementById('loader');

let html = '';

const showUsers = (users) => {
  for (let i = 0; i < users.length; i++) {
    html += `<li>${users[i].name}</li>`;
  }
};

(async () => {
  try {
    $loader.classList.remove('d-none');
    $loader.classList.add('loader');
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    res = await res.json();
    showUsers(res);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      $loader.classList.remove('loader');
      $loader.classList.add('d-none');
      $root.innerHTML = html;
    }, 4000);
  }
})();
