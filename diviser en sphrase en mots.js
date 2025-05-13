// Challenge 9: Extraire les mots

const string = "#bonjour je m'appel #mohsen";

function extractMots(string) {
  let array = [];
  var mot = "";
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === " " || i === string.length) {
      array.push(mot);
      mot = "";
    } else {
      mot += string[i];
    }
  }
  // let max=array[0];
  // for(let i=0;i<array.length;i++){
  //   if(max.length<array[i].length){
  //     max=array[i];
  //   }
  // }
  // for(let i=0;i<array.length;i++){
  //   if(array[i][0]!=="#"){
  //     array.splice(i,1);
  //     i--;
  //   }
  // }
  const mots = array.filter((m) => m[0] === "#");

  return mots;
}
console.log(extractMots(string));
