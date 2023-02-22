
const chooseYears = (start, end) => {

  const yearArr = [];
  if (end < start) {
    return chooseYears(end, start)
  }

  for (let i = start; i <= end; i++) {
    if ((i % 100 && !(i % 4)) || !(i % 400)) {
      yearArr.push(i)
    }
  }
   return yearArr
}



console.log(chooseYears(2018, 2000))