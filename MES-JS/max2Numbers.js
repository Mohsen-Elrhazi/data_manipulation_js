const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function max2Nombers(array) {
  let max = array[0] * array[1];
  let obj = {
    N1: array[0],
    N2: array[1],
    max: array[0] * array[1],
  };

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (max < array[i] * array[j]) {
        max = array[i] * array[j];
        obj = {
          N1: array[i],
          N2: array[j],
          max: array[i] * array[j],
        };
      }
    }
  }
  return obj;
}
console.log(max2Nombers(array));
