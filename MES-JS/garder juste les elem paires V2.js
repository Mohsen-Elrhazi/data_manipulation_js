// > Garder uniquement les nombres pairs
// > Exemple : `[1, 2, 3, 4]` → `[2, 4]`

let array=[1,2,3,4];

function getEvenNumbers(array){
let n=array.length;
    for(let i=0; i<n; i++){
       if(array[i]%2!=0){
         for(let j=i;j<n;j++){
           array[j]=array[j+1];
         }
         n--;
       }
    }
    // return array;
  let array2=[];
  for(let k=0; k<n; k++){
    array2.push(array[k]);
  }
  return array2;
}

console.log(getEvenNumbers(array));