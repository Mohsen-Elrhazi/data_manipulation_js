const { employees } = require("../data.js");
// Check if any employee has no projects assigned

// Function Name: hasEmployeesWithoutProjects
// Input: employees
// Output: true
// Expected Result: Returns true if any employee has no projects assigned, otherwise false.

function hasEmployeesWithoutProjects(employees){
    for(let i=0;i< employees.length; i++){
        if(employees[i].projects.length===0){
            return true;
        }
    }
    return false;

}
console.log(hasEmployeesWithoutProjects(employees));