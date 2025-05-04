const { employees } = require("../data.js");
// 30. Find the most popular project (most employees)
//     - **Function Name**: `getMostPopularProject`
//     - **Input**: `employees`
//     - **Output**: `"Project Alpha"`
//     - **Expected Result**: Returns the name of the project with the most employees assigned.

function getUniqueprojectsNames(employees) {
  let array = [];
  for (let i = 0; i < employees.length; i++) {
    for (let j = 0; j < employees[i].projects.length; j++) {
      if (!array.includes(employees[i].projects[j])) {
        array.push(employees[i].projects[j]);
      }
    }
  }
  return array;
}
// console.log(getUniqueprojectsNames(employees));

function getMostPopularProject(employees) {
  let uniqueProjectsNames = getUniqueprojectsNames(employees);

  let count;
  let obj = {};
  for (let i = 0; i < uniqueProjectsNames.length; i++) {
    count = 0;
    for (let j = 0; j< employees.length; j++) {
      for (let k = 0; k < employees[j].projects.length; k++) {
        if (uniqueProjectsNames[i] === employees[j].projects[k]) {
          count++;
        }
      }
    }
    obj[uniqueProjectsNames[i]] = count;
  }
  return obj;
}

// console.log(getMostPopularProject(employees))

function max(employees){
    let obj=getMostPopularProject(employees);
    let firstKey=Object.keys(obj)[0];
    let firstValue=obj[firstKey];

    max=firstValue;
    keyMax=firstKey;
    for(key in obj){
        if(max<obj[key]){
            max=obj[key];
            keyMax=key;
        }
    }
    return keyMax;
}

console.log(max(employees));
