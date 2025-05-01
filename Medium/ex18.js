const { employees } = require("../data.js");
// Find the most common skill among all employees

// Function Name: getMostCommonSkill
// Input: employees
// Output: "JavaScript"
// Expected Result: Returns the most common skill among all employees.

function listSkills(employees) {
  let array = [];
  for (let i = 0; i < employees.length; i++) {
    for (let j = 0; j < employees[i].skills.length; j++) {
      if (!array.includes(employees[i].skills[j])) {
        array.push(employees[i].skills[j]);
      }
    }
  }
  return array;
}
// console.log( listSkills(employees))

function getMostCommonSkill(employees) {
  let array = listSkills(employees);
  let count;
  objSkills = {};
  for (let i = 0; i < array.length; i++) {
    count = 0;
    for (let j = 0; j < employees.length; j++) {
      for (let k = 0; k < employees[j].skills.length; k++) {
        if (array[i] === employees[j].skills[k]) {
          count++;
        }
      }
    }
    objSkills[array[i]] = count;
  }
  // return objSkills;
let obj={};
  let firstKey=Object.keys(objSkills)[0];
  let firstValue=objSkills[firstKey];

  let maxValue=firstValue;
  let keyMaxValue=firstKey;
  for(key in objSkills){
    if(maxValue<objSkills[key]){
      maxValue= objSkills[key];
      keyMaxValue=key
    }
  }
  // return keyMax;
   obj[keyMaxValue]=maxValue;
   return obj;
}

console.log(getMostCommonSkill(employees));
