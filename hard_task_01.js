



function comparisonIntegers (a,b) {
    if ( a>b){
      a = a % b
      return a
    }
     
  else {
      b = b % a
      return b ;
  }
      
     
  }
  
  
  console.log(comparisonIntegers(180,150));