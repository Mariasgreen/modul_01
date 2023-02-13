



function calculate(basketAmount, countGoods, promo) {
  


    if ( countGoods > 10) {
        const countThreeProcent = basketAmount/100*3;
        const ThreeProcent = basketAmount-countThreeProcent

        return 'товаров больше 10,применяется скидка 3% ко всей сумме ' + ThreeProcent ;
      }

      if (basketAmount > 30000) {
        const countFiftProcent = basketAmount/100*15;
        const countDifference = basketAmount - countFiftProcent;
       // totalAmount = countDifference - countFiftProcent;
        return 'больше 30 000 ₽ ' + countDifference ;
      }

      if (promo == 'METHED') {
        const countTenProcent = basketAmount/100*10;
       const promoDis = basketAmount - countTenProcent ;
       return 'METHED ' +  promoDis; 
      }


      if (promo == 'G3H2Z1' && basketAmount >= 20000) {
        const countFifteenProcent = basketAmount/100*15;
        const promototal = basketAmount - countFifteenProcent;
        return 'G3H2Z1 ' +  promototal; 
      }


  }
  
  const total =  calculate(3000,11);
  const total2 =  calculate(35000,2);
  const total3 =  calculate(3000,1, 'METHED');
  const total4 =  calculate(30000,1,'G3H2Z1');

  console.log(total);
  console.log(total2);
  console.log(total3);
  console.log(total4);


  