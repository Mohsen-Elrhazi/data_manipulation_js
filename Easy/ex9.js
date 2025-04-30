const { employees } = require("../data.js");
// List all unique department names

// Function Name: getUniqueDepartments
// Input: employees
// Output: ["Développement", "Design", "Management", "Marketing"]
// Expected Result: Returns an array of unique department names.

function getUniqueDepartments(employees) {
  let uniqueDepartments = [];
  for (let i = 0; i < employees.length ; i++) {
    let department = employees[i].department;
    if (!uniqueDepartments.includes(department)) {
      uniqueDepartments.push(department);
    }
  }
  return uniqueDepartments;
}

console.log(getUniqueDepartments(employees));
