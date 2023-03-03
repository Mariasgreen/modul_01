const list = document.querySelectorAll('.props__list');
const listitem = document.querySelectorAll('.props__item');
const fullitem = document.querySelectorAll('.item');

const one = document.querySelectorAll('.props__item_one');
const two = document.querySelectorAll('.props__item_two');
const three = document.querySelectorAll('.props__item_three');
const four = document.querySelectorAll('.props__item_four');
const five = document.querySelectorAll('.props__item_five');
const six = document.querySelectorAll('.props__item_six');
const adv = document.getElementsByClassName('ads')

const title = document.querySelectorAll('.item__title');


fullitem[4].before(fullitem[0]);
four[3].before(four[5]);

two[7].after(two[8]);
two[8].after(two[9]);
adv[0].remove()

document.querySelector('.item_five .content').append(document.querySelector('.item_six .item__title'));
document.querySelector('.item_two .props__list').before(document.querySelector('.item_five .item__title'));
document.querySelector('.item_six .props__list').before(document.querySelector('.item_two .item__title'));




//const elem =document.createTextNode('trololo')

const h2 = document.createElement('h2')
h2.classList.add('item__title')

const text =document.createTextNode('This и прототипы объектов')


h2.append(text)

title[2].replaceWith(h2)



document.querySelector('.item_three .content').append(document.querySelector('.item_five .props__list'));
document.querySelector('.item_five .content').append(document.querySelector('.item_three .props__list'));


console.log(title);

console.log();


