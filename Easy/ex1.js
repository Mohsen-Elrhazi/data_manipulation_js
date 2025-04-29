const { employees } = require('../data.js');

// Get the first name of the first employee

// Function Name: getFirstEmployeeFirstName
// Input: employees
// Output: "Jean"
// Expected Result: Returns the first name of the first employee in the array.

function getFirstEmployeeFirstName(employees){
    return employees[0].firstName;
}
console.log(getFirstEmployeeFirstName(employees));