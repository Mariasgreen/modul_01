


const newArray = (lenght,n,m) => {
   
    const newArr = [];
     


    for (let i = 0; i < lenght; i++ ) {
        
        
        newArr[i]=(Math.floor(Math.random()* (m-n)) + n);
    

     
    }
    return newArr
  }
  console.log(newArray (5,10,20))
  console.log(newArray (5,-10,-20))
  console.log(newArray (5,40,20))



