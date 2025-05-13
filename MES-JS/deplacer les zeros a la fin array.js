let array = [0,0,18,2,0,3,0,4,5,0];


function deplacer(array){
  let n=0;
  array.forEach(elem=>{
    n++;
  });
  
  for(let i=0;i<n;i++){
    if(array[i]===0){
      let help=array[i];
      array[i]=array[n-1];
      array[n-1]=help;
      i--;
     n--;
    }
  }
  return array;
}
console.log(deplacer(array));


