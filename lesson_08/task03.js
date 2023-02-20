

const even = (lenght,n,m) => {
   
    const newArr = [];

    for (let i = 0; i < lenght; i++ ) {
        
     newArr[i] = ( Math.floor(Math.random()* (m-n) /2 + n ) );

      
  if ((newArr[i] % 2 )===0){
    newArr.push(newArr[i])
 }
     
    
    }

    return newArr
  }




  console.log(even (5,80,20 ))


