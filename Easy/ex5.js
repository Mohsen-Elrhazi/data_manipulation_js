const { employees } = require("../data.js");

// Check if any employee is inactive (isActive: false)

// Function Name: hasInactiveEmployees
// Input: employees
// Output: true
// Expected Result: Returns true if any employee is inactive, otherwise false.

function hasInactiveEmployees(employees){
 for(let i=0;i< employees.length; i++){
    if(employees[i].isActive==="false"){
        return true;
    }
 }
 return false;
}

console.log(hasInactiveEmployees(employees));
