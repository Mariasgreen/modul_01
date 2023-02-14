



function calculate(basketAmount, countGoods, promo) {
  
  let total = basketAmount;

    if ( countGoods >= 10) {

        const countThreeProcent = basketAmount/100*3;
        total =  basketAmount-countThreeProcent

        
      }

      if (basketAmount >= 30000) {
      total= total-((total-30000)*0.15)
      
       
      }

       if (promo == 'METHED') {
        const countTenProcent = total/100*10;
        total = total - countTenProcent ;
   
      } 

 if (promo == 'G3H2Z1' && basketAmount >= 20000) {
        const countFifteenProcent = total/100*15;
         total = total- countFifteenProcent;
         
      }

return total

  }
  
/*
  const totalResult =  calculate(50000,11);

  console.log(totalResult);

*/



  const total1 =  calculate(3000,11);
  const total2 =  calculate(35000,2);
  const total3 =  calculate(3000,1, 'METHED');
  const total4 =  calculate(30000,1,'G3H2Z1');

 
  console.log(total1);
  console.log(total2);
  console.log(total3);
  console.log(total4);


  