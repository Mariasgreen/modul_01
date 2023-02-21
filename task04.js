



      const chooseYears = ( start,end) => {
   
        const yearArr = [];
    
    
        for (let i = start; i <= end; i++ ) {
            
      

          if ((i % 100 && !(i % 4)) || !(i % 400)){
            yearArr.push(i)
          }

         
         
        }
      

        return yearArr
      }
    
    
   
          console.log(chooseYears (2000,2018))