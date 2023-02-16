const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];




const getAverage = (allСashbox) => {
    const sum = allСashbox.reduce((total, number) => total + number, 0);
    const length = allСashbox.length;
    return sum / length;
  };
  
  console.log( Math.floor(getAverage(allСashbox))); 