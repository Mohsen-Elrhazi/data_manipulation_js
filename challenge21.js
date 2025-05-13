// ### 🧭 Challenge 21: Trouver les paires dont la somme est égale à une cible

// > Exemple : `[1, 2, 3, 4, 5], cible = 6` → `[[1,5], [2,4]]`

// ```js
// function findSumPairs(arr, target) {
//   // Ton code ici
// }

let array=[1, 2, 3, 4, 5];

function findSumPairs(array,target){
  let array2=[];
  for(let i=0;i<array.length-1;i++){
   for(let j=i+1;j<array.length;j++){
     if(array[i]+array[j]===target){
       let array3=[];
       array3=[array[i],array[j]]
       array2.push(array3);
     }
   }
  }
  return array2;
}

console.log(findSumPairs(array,6));