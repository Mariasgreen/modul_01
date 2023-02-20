

  

  const Arr = (lenght) => {
   
    const newArr = [];

    for (let i = 0; i < lenght; i++ ) {
        newArr[i]=(Math.floor(Math.random() * 100) + 1);
    

     
    }
    return newArr
  }
  console.log(Arr (5))