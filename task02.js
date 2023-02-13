
function isPrime(number){
    for (let i = 2; i < number; i++) {
        if (number%i==0){
            return false;
        }
    };
    return true;
}


const prime = isPrime(1987);
console.log(prime)