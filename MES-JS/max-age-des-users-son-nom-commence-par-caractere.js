const users = [
  { name: "Lina", age: 30 },
  { name: "masmine", age: 30 },
  { name: "Khalid", age: 22 },
  { name: "mohsen", age: 23 },
];

function maxAgeUser(users, c) {
  let array = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].name[0] === c) {
      array.push(users[i]);
      var maxAge = array[0].age;
      for (let j = 0; j < array.length; j++) {
        if (maxAge < array[j].age) {
          maxAge = array[j].age;
        }
      }
    }
  }
  return maxAge;
}
console.log(maxAgeUser(users, "m"));
