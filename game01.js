
'use strict';


const random = Math.floor(Math.random() * 101);


function guess(input){
  input = prompt ('Введите число от 0 до 100:');
  if (isNaN (+input)) {
if (input === null) {
  alert('done')
}
if (input > random) {
  alert('Меньше!');
} else if (input < random) {
  alert('Больше!');
} else if (input === random) {
  alert('Правильно!');
  return input;
}  else {
  alert('Можно вводить только числа');
}
return guess()
}
}

console.log(guess());
