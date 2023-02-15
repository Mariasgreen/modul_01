



function calculate(basketAmount, countGoods, promo) {
  
  let total = basketAmount;

    if ( countGoods > 10) {

        const countThreeProcent = basketAmount/100*3;
        total =  basketAmount-countThreeProcent

        
      }

      if (basketAmount > 30000) {
      total= total-((total-30000)*0.15)
      
       
      }

       if (promo == 'METHED') {
        const countTenProcent = total/100*10;
        total = total - countTenProcent ;
   
      } 

 if (promo == 'G3H2Z1' && total > 2000) {

         total = total- 500;
         
      }

return total

  }
  




  const total1 =  calculate(3000,11);
  const total2 =  calculate(35000,2);
  const total3 =  calculate(3000,12, 'METHED');
  const total4 =  calculate(30000,11,'G3H2Z1');

 
  console.log(total1);
  console.log(total2);
  console.log(total3);
  console.log(total4);


  