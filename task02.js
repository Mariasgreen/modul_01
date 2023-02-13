


function ucFirst(string){
   
    string = prompt('принимает строку и возвращает модифицированную строку') ;
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  };



const stringResult = ucFirst();
console.log(stringResult);

