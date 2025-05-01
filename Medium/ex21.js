const { employees } = require("../data.js");
// Count how many employees are in each department

// Function Name: countEmployeesByDepartment
// Input: employees
// Output: { "Développement": 15, "Design": 10, "Marketing": 12, "Management": 13 }
// Expected Result: Returns an object with the count of employees in each department.

function uniqueDepartment(employees){
    let uniqueDept = [];
  for (let i = 0; i < employees.length; i++) {
    if (!uniqueDept.includes(employees[i].department)) {
        uniqueDept.push(employees[i].department);
    }
  }
  return uniqueDept;
}

function countEmployeesByDepartment(employees) {
  let result = {};
  let uniqueDept =  uniqueDepartment(employees);
  

  let count;
  for (let k = 0; k < uniqueDept.length; k++) {
    count = 0;
    for (let j = 0; j < employees.length; j++) {
      if (uniqueDept[k] === employees[j].department) {
        count++;
      }
    }
    result[uniqueDept[k]]=count;
  }

  return result;
}

console.log(countEmployeesByDepartment(employees));
