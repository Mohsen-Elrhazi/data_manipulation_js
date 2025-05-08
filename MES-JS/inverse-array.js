const array = [1,2,3,4,5,6,7,8,9,10,11];

function inverse(array){
  
  for(let i=0;i<array.length/2; i++){
    let help=array[i];
    array[i]= array[array.length-1-i];
    array[array.length-1-i]=help;
  }
  
  // let count=0;
  // array.forEach(elem=>{
  //   count++;
  // })
  // let help;
  //   for(let i=0;i<count/2; i++){
  //    help = array[i];
  //   array[i]= array[count-1-i];
  //   array[count-1-i]=help;
  // }
  return array;
}
console.log(inverse(array));


