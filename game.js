/* eslint-disable require-jsdoc */
'use strict';
(() => {
  const arr = ['rock', 'scissors', 'paper'];


  const getRandomIntInclusive = (min, max) => {
    min = 0;
    max = 2;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const findAnswer = (arr, n) => {
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i].indexOf(n) === 0) {
        return arr[i];
      }
    }
    return false;
  };


  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };


    return function start() {
      const answer = prompt(`Выбери: "${arr.join('", "')}" ?`);

      let computerChoice = arr[getRandomIntInclusive()];

      if (answer === null) {
        alert('bye');
        return;
      }
      let userChoice = findAnswer(arr, answer.toLowerCase());
      if (userChoice === computerChoice) {
        alert(`Компьютер: ${computerChoice}
     Вы: ${userChoice}
     НИЧЬЯ!`);
      } else if (
        (computerChoice === arr[0] && userChoice === arr[2]) ||
               (computerChoice === arr[1] && userChoice === arr[0]) ||
               (computerChoice === arr[2] && userChoice === arr[1])
      ) {
        result.player++;
        alert(`Компьютер: ${computerChoice}.
     Вы: ${userChoice}.
     Вы выйграли!`);
      } else if (
        (computerChoice === arr[1] && userChoice === arr[0]) ||
        (computerChoice === arr[0] && userChoice === arr[1]) ||
        (computerChoice === arr[2] && userChoice === arr[2])
      ) {
        result.computer++;
        alert(`Компьютер: ${computerChoice}.
     Вы: ${userChoice}.
     Вы проиграли!`);
      }
      if (!confirm(`Поиграем еще?`)) {
        alert( 'your result ' + result.player + '\n' + 'computer  ' + result.computer) ; 
        return;
      }

      return start();
    }

}
  window.RPS = game;
})();