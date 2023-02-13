


const curency = ( money ) =>{
    const euroAmount = Number(prompt('стоимость покупки в евро'));


    const getDol = ( money ) =>{
        const euro = 1.2;
        return euroAmount*euro;
    };
  
     const dollar = getDol();



    const getRub = ( exchange ) =>{
        const rub = 64;
        return dollar*rub;
    };

    const rubl = getRub();


  return rubl

 }

 const result = curency();
 console.log(result)
