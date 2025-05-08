const users = [
  { name: "Lina", age: 30, hobbies: ["reading"] },
  { name: "Yasmine", age: 22, hobbies: ["music", "chess"] },
  { name: "Khalid", age: 17, hobbies: ["football", "video games"] },
  { name: "mohsen", age: 17, hobbies: ["football", "video games"] },
];

// function uniquesHopies(users){
//     let array=[];
//     for(let k=0;k<array.length;k++){
//     for(let i=0;i<users.length;i++){
//         for(let j=0;j<users[i].hobbies.length;j++){
            // if(!array.includes(users[i].hobbies[j])){
            //     array.push(users[i].hobbies[j]);
            // }
//             if(!array[k]===users[i].hobbies[j]){
//                 array.push(users[i].hobbies[j]);
//             }
//         }
//     }
// }
//     return array;
// }

// console.log(uniquesHopies(users))

function getUniqueAge(users) {
  let array = [];
  for (let i = 0; i < users.length; i++) {
    if (!array.includes(users[i].age)) {
      array.push(users[i].age);
    }
  }
  return array;
}
// console.log(getUniqueAge(users))

// Fonction groupByAge(users) → retourne :

// {
//   "17": [{...}],
//   "22": [{...}],
//   "30": [{...}]
// }

// function groupByAge(users) {
//   let array = getUniqueAge(users);
  // let array2=[];
//   var obj = {};
//   for (let i = 0; i < array.length; i++) {
//     var array2 = [];
//     for (let j = 0; j < users.length; j++) {
//       if (array[i] === users[j].age) {
//         array2.push(users[j]);
//       }
//     }
//     obj[array[i]] = array2;
//   }
//   return obj;
// }

// console.log(groupByAge(users));

// Utilisateurs majeurs  (les users >20)
// Noms et âges + 1

// function majorUsers(users){
//   let array=[];
//   for(let i=0;i<users.length;i++){
//     if(users[i].age>20){
//        array.push(users[i]);
//        }
//   }
//   return array;
// }
// console.log( majorUsers(users));

// function agePlusUn(users){
//   let array=[];
//   for(let i=0;i<users.length;i++){
//     let obj={};
//     obj.name=users[i].name;
//     obj.age=users[i].age+1;
//     array[array.length]=obj;
//   }
//   return array;
// }
// console.log(agePlusUn(users))

// Trier les utilisateurs par âge croissant

// function triCroissant(users){
//   for(let i=0;i<users.length-1; i++){
//     for(let j=i+1; j<users.length; j++){
//       if(users[i].age>users[j].age){
//         let help= users[i];
//         users[i]=users[j];
//         users[j]=help;
//       }
//     }
//   }
// return users;
// }

// console.log(triCroissant(users))

// Trouver l’utilisateur le plus âgé

// function plusAge(users){
//     max=users[0].age;
//     let indice= 0;
//     for(let i=0; i<users.length; i++){
//         if(max<users[i].age){
//             max=users[i].age;
//             indice=i;
//         }
//     }
//     return users[indice];
// }
// console.log(plusAge(users));

// Fusionner tous les hobbies en une seule liste sans doublons



// function getUniqueHobbies(users) {
//   let uniqueHobbies = [];
//   let index = 0;

//   for (let i = 0; i < users.length; i++) {
//     for (let j = 0; j < users[i].hobbies.length; j++) {
//       let hobby = users[i].hobbies[j];
//       let exists = false;

//       for (let k = 0; k < index; k++) {
//         if (uniqueHobbies[k] === hobby) {
//           exists = true;
//           break;
//         }
//       }

//       if (!exists) {
//         uniqueHobbies[index] = hobby;
//         index++;
//       }
//     }
//   }

//   return uniqueHobbies;
// }
console.log(getUniqueHobbies(users));
