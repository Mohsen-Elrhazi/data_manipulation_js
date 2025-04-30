const { employees } = require("../data.js");
// Find all employees who work on "Project Gamma"

// Function Name: getEmployeesByProject
// Input: employees, "Project Gamma"
// Output: [ { id: 1, firstName: "Jean", ... }, { id: 2, firstName: "Marie", ... }, ... ]
// Expected Result: Returns an array of employees working on "Project Gamma"

function getEmployeesByProject(employees,projectName) {
  let arr = [];
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].projects && employees[i].projects.includes(projectName)) {
      arr.push(employees[i]);
    }
  }
  return arr;
}

console.log(getEmployeesByProject(employees, "Project Gamma"));
