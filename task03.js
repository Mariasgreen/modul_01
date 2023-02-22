

const even = (lenght, n, m, str) => {

   const newArr = [];

   for (let i = 0; i < lenght; i++) {
      let num = (Math.floor(Math.random() * (m - n) + n)); ;
      if (str === 'odd') {
         while (!(num % 2)) {
            num = (Math.floor(Math.random() * (m - n) + n));
          
         }


      } else if (str === 'even') {
         while ((num % 2)) {
            num = (Math.floor(Math.random() * (m - n) + n));
            
         }
      }
      newArr.push(num);
   };

   return newArr ;

}


console.log(even(5, 20, 4))