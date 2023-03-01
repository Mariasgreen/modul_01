/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

'use strict';
(() => {
  function compEvenOdd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  const game = () => {
    let userBalls = 5;
    let compBalls = 5;

    function result() {
      alert('GAME OVER' + '\n' + 'your result ' + userBalls + '\n' + 'computer  ' + compBalls);
    }


    return function start() {
      const resultFunc = compEvenOdd(1, 2);
      console.log(resultFunc);
      const answer = prompt(`how many marbles do you put? you have ${userBalls} now`);
      const guessPlayesBalls = +answer;
      console.log(guessPlayesBalls);


      if (answer === null) {
        alert('bye');
        return;
      }

      if (guessPlayesBalls <= 0 || guessPlayesBalls > userBalls || isNaN(guessPlayesBalls)) {
        alert('Error! Wrong bet');
      } else if ((resultFunc === 2 && (answer % 2 !== 0)) || (resultFunc === 1 && (answer % 2 === 0))) {
        userBalls += guessPlayesBalls;
        compBalls -= guessPlayesBalls;
        alert('you won');
      } else if ((resultFunc === 2 && (answer % 2 === 0)) || (resultFunc === 1 && (answer % 2 !== 0))) {
        userBalls -= guessPlayesBalls;
        compBalls += guessPlayesBalls;
        alert('you lost');
      }


      if (compBalls <= 0 || userBalls >= 10) {
        compBalls = 0;
        userBalls = 10;
        result();
        return;
      } else if (userBalls <= 0 || compBalls >= 10) {
        compBalls = 10;
        userBalls = 0;
        result();
        return;
      }


      return start();
    };
  };
  window.RPS = game;
})();
