const income = Number(prompt('доход'));

if(income < 15000){
   const a = income * 0.13;
    console.log(a);
} else if(income > 15000 && income < 50000){
    const b = 15000 * 0.13 + (income - 15000)*0.20 ;
    console.log(b);
}
else{
    
    const c = 15000 * 0.13 + 35000 * 0.20 + (income - 50000)*0.30 ;
    console.log(c);
}
