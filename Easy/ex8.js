const { employees } = require("../data.js");
// Count how many employees are in the "Développement" department

// Function Name: countEmployeesInDepartment
// Input: employees, "Développement"
// Output: 15
// Expected Result: Returns the number of employees in the "Développement" department.

function countEmployeesInDepartment(employees,dep){
    let count=0;
    employees.forEach(employe => {
        if(employe.department===dep){
            count++;
        }
    });

return count;
}

console.log(countEmployeesInDepartment(employees,"Développement"))

