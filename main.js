const list = document.querySelectorAll('.props__list');
const listitem = document.querySelectorAll('.props__item');
const fullitem = document.querySelectorAll('.item');

const one = document.querySelectorAll('.props__item_one');
const two = document.querySelectorAll('.props__item_two');
const three = document.querySelectorAll('.props__item_three');
const four = document.querySelectorAll('.props__item_four');
const five = document.querySelectorAll('.props__item_five');
const six = document.querySelectorAll('.props__item_six');


const title = document.querySelectorAll('.item__title');


fullitem[4].before(fullitem[0]);
four[3].before(four[5]);

two[7].after(two[8]);
two[8].after(two[9]);


document.querySelector('.item_five .content').append(document.querySelector('.item_six .item__title'));
document.querySelector('.item_two .props__list').before(document.querySelector('.item_five .item__title'));
document.querySelector('.item_six .props__list').before(document.querySelector('.item_two .item__title'));





document.querySelector('.item_three .content').append(document.querySelector('.item_five .props__list'));
document.querySelector('.item_five .content').append(document.querySelector('.item_three .props__list'));


console.log(title);

console.log();
