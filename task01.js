'use strict';


const add = (array = []) => {
  const count = array.reduce((acc, num) => acc + num, 0);
  const result = (Math.floor(Math.random() * 11));
  array.push(result);

  if (count < 50) {
    add(array);
  }
  return array;
};

console.log(add());
