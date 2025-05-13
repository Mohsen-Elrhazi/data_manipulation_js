// > Garder uniquement les nombres pairs
// > Exemple : `[1, 2, 3, 4]` → `[2, 4]`

let array=[1,2,3,4];

function getEvenNumbers(array){

    for(let i=0; i<array.length; i++){
       if(array[i]%2!=0){
         array.splice(i,1);
       }
    }
    return array;
}

console.log(getEvenNumbers(array));