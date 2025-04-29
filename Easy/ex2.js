const { employees } = require('../data.js');
// Get the last name of the last employee

// Function Name: getLastEmployeeLastName
// Input: employees
// Output: "Leroy"
// Expected Result: Returns the last name of the last employee in the array

// function getLastEmployeeLastName(employees){
// return employees[employees.length-1].lastName;
// }

// console.log(getLastEmployeeLastName(employees));

let count=0;
employees.forEach(elem => {
    count++;
});

function getLastEmployeeLastName(employees){
    return employees[count-1].lastName;
}
console.log(getLastEmployeeLastName(employees));


