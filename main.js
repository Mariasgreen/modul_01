'use strict'




const item = prompt('Наименование товара') ;
const count = prompt('Количество товара') ;
const category = prompt('Категория товара') ;
const price = prompt('Цена товара') ;


const number = Number(count);
const secnumber =  Number(price);


  console.log(typeof item);
  console.log(typeof number);
  console.log(typeof category);
  console.log(typeof secnumber);


  console.log('На складе ' + count + ' единицы товара ' + item + ` на сумму товара: ${count * price}`  + ' деревянных' ) ;


  