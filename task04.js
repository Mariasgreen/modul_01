
     

const chooseYears = (lenght, start,end) => {
   
    const yearArr = [];


    for (let i = 0; i < lenght; i++ ) {
        
        
        yearArr[i]=(Math.floor(Math.random()* (start-end)) + end);

    let result = [];

    yearArr.forEach(function(year) {
        if (getLeapYear(year))
        result.push(year);
   });
 
   return result;

     
    }
  
  }


  function getLeapYear(year) {
        if (year % 400 === 0) return true;
        if (year % 100 === 0) return false;
        if (year % 4 === 0) return true;
        return false
      }
  
      console.log(chooseYears (10,2000,2018))


