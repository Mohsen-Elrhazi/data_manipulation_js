function checkPremier(num) {
  let estPremier = 1;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      estPremier = 0;
    }
  }
  if (estPremier === 1) {
    return "nombre premier";
  } else {
    return "nombre non premier";
  }
}
console.log(checkPremier(120));
