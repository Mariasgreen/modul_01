

  const even = (lenght,n,m,str) => {
   
   const newArr = [];
      

      if(str == 'even'){
         for (let i = 0; i < lenght; i++ ){
       
            newArr[i] =(Math.floor(Math.random()* (m-n)/2 + n)*2);

            if ((i % 2 )===0){
                newArr.push(i)
            }



         }
       
      }
      


     
      

    
return newArr
     
     
    }
  
   
   

   


 console.log(even (5,4,20, 'even'))