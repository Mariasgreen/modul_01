'use strict'




const item = prompt('Наименование товара') ;
const count = Number(prompt('Количество товара'))
const category = prompt('Категория товара') ;
const price =  Number(prompt('Цена товара'))



  console.log(typeof item  + '' + typeof count +'' + typeof category +'' + typeof price);
 


  console.log('На складе ' + count + ' единицы товара ' + item + ` на сумму товара: ${count * price}`  + ' деревянных' ) ;


  