'use strict'




const item = prompt('Наименование товара') ;
const count = Number(prompt('Количество товара'))
const category = prompt('Категория товара') ;
const price =  Number(prompt('Цена товара'))



  console.log(typeof item);
  console.log(typeof count);
  console.log(typeof category);
  console.log(typeof price);


  console.log( `На складе  ${count} единицы товара  ${item} на сумму товара: ${count * price} деревянных` ) ;


  