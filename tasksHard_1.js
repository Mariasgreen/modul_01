


const income = Number(prompt('доход'));

if(income <= 15000){
   const a = income * 0.13;
    console.log(a);
} else if(income > 15000 && income <= 50000){
    const b = income * 0.20;
    console.log(b);
}
else{
    const c = income * 0.30;
    console.log(c);
}




