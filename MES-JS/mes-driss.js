let users = ["mohsen", "jawaddddd", "hamza"];

function addObjet(users) {
  let count;
  let array = [];
  for (let i = 0; i < users.length; i++) {
    count = 0;
    for (let j = 0; j < users[i].length; j++) {
      count++;
    }
    let obj = {};
    obj[users[i]] = count;
    array.push(obj);
  }
  return array;
}
console.log(addObjet(users));



//!2eme methode

// function addObjet(users){
// let array=[];
//   for(let i=0; i<users.length; i++){
//     let obj={};
//     obj[users[i]]=users[i].length;
//     array.push(obj);
//   }
//   return array;
// }
// console.log(addObjet(users));