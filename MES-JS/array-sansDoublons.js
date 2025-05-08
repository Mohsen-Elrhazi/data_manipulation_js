const array = [1,2,2,4,4,8,8,9,10,12,12,12,12];

function sansDouble(array){
  let count=0;
  for(let i=0; i<array.length-1; i++){
    for(let j=i+1;j<array.length;j++){
      if(array[i]===array[j]){
        array.splice(j,1);
        j--;
      }
    }
  }
  return array;
}
console.log(sansDouble(array));


