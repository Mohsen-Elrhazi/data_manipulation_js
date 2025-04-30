const { employees } = require("../data.js");
// Calculate the average salary per department

// Function Name: calculateAverageSalaryByDepartment
// Input: employees
// Output: { "Développement": 60000, "Design": 50000, ... }
// Expected Result: Returns an object with average salaries for each department.

function calculateAverageSalaryByDepartment(employees){
    let sum=0;
    obj={};
    for(let i=0;i<employees.length; i++){
        let dapartment=employees[i];
        if()
        sum+= employees[i].salary;
    }
    return sum/employees.length;
}

console.log(calculateAverageSalaryByDepartment(employees));
