// ### 📈 Challenge 6: Mots contenant une lettre spécifique

// > Retourner les mots contenant la lettre `'a'`
// > Exemple : `["chat", "chien", "souris"]` → `["chat"]`
let words=["chat", "chien", "souris"];

function filterWordsWithA(words,c){
  let array2=[];
  for(let i=0;i<words.length;i++){
    for(let j=0;j<words[i].length;j++){
      if(words[i].j===c){
        array2.push(words[i]);
        break;
    }
    }
  }
  return array2;
}

console.log(filterWordsWithA(words,"a"));