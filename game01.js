/* eslint-disable require-jsdoc */

'use strict';


const random = Math.floor(Math.random() * 101);

function guess(input) {
  input = prompt('Введите число от 0 до 100:');
  if (input === null) {
    return;
  } if (!isNaN(+input)) {
    if (+input > random) {
      alert('Меньше!');
    } else if (+input < random) {
      alert('Больше!');
    } else if (+input === random) {
      alert('Правильно!');
      return;
    }
  } else {
    alert('Можно вводить только числа');
  }
  return guess();
}


guess();
