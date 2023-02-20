


function guessNumber() {
    let random = Math.floor(Math.random() * 100);

 while (true) {

        let input = +prompt('Введите число от 0 до 100:');


        if (isNaN(input)){
            alert('Введи число!'); 
        }

        if (input === null) {
            alert('Отмена');
            break;
          }

       else {
        if (input > random) {
            alert('Меньше!');
          } else if (input < random) {
            alert('Больше!');
          } else if (input === random) {
            alert('Правильно!');
            break;
          }
        
        }
         
    }
}

guessNumber() 
