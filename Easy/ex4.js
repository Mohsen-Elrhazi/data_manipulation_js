const { employees } = require("../data.js");
// Count how many employees are in the array

// Function Name: countEmployees
// Input: employees
// Output: 50
// Expected Result: Returns the total number of employees in the array.

let count = 0;
function countEmployees(employees) {
  employees.forEach((elem) => {
    count++;
  });
  return count;
}

const lenght = countEmployees(employees);
console.log(lenght);
