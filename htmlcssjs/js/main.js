'use strict';
const d = document;
const $root = d.getElementById('root');
const $btn = d.querySelectorAll('button');
const $aviso = d.getElementsByClassName('aviso');

d.addEventListener('DOMContentLoaded', () => {
  const $p = d.createElement('p');
  $p.textContent = 'Ocurrió un error';
  $p.classList.add('error');
  $root.appendChild($p);
});

console.log($aviso);
