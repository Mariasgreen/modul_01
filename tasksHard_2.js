const tax = Number(prompt('доход 2'));

if(tax < 15000){
   const a = tax * 0.13;
    console.log(a);
} else if(tax > 15000 && tax < 50000){
    const b = 15000 * 0.13 + (tax - 15000)*0.20 ;
    console.log(b);
}
else{
    
    const c = (15000 * 0.13) +( 35000 * 0.20) + ((tax - 50000)*0.30) ;
    console.log(c);
}
