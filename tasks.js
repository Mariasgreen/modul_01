





const rain = Math.floor(Math.random() * 2); 


if (rain == 1){
    console.log('Пошёл дождь. Возьмите зонт!');
} else{
    console.log('Дождя нет!');
}




const math = Number(prompt('Введите кол-во баллов по математике')) ;
const rus = Number(prompt('Введите кол-во баллов по русскому языку')) ;
const info = Number(prompt('Введите кол-во баллов по информатике'));



const total = math + rus + info;

if (total >= 265){
    console.log('Поздравляю, вы поступили на бюджет!')
} else{
    console.log('вы не поступили на бюджет')
}





const money = Number(prompt('сколько денег снять')) ;

if (money % 100 == 0){
    console.log(' можно снять деньги')
} else{
    console.log('нельзя снять деньги')
}
