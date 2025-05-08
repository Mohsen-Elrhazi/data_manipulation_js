let array = [1, 2, 3, 4, 5, 6, 7, 8];

// return array sans les valeurs superieru a al moyenne;
// function calculeMoyenne(array){
//   let count=0;
//   let sum=0;
//   let array2=[];
// for(let i=0;i<array.length;i++){
//   sum+=array[i];
// }
//   let moyenne=sum/array.length;
//   for(let i=0;i<array.length;i++){
//     if(array[i]>moyenne){
//       array2.push(array[i]);
//     }
//   }
//   return array2;
// }

// console.log(calculeMoyenne(array));

function calculeMoyenne(array) {
  let count = 0;
  let sum = 0;
  let array2 = [];
  for (let i = 0; i < array.length; i++) {
    count++;
    sum += array[i];
  }
  let moyenne = sum / array.length;
  for (let i = 0; i < count; i++) {
    if (array[i] < moyenne) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}
console.log(calculeMoyenne(array));
