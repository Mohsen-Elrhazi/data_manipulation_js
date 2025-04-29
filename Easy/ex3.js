const { employees } = require('../data.js');

// Get the department of employee with ID 5

// Function Name: getEmployeeDepartmentById
// Input: employees, 5
// Output: "Marketing"
// Expected Result: Returns the department of the employee with ID 5.

let count=0;
employees.forEach(elem=>{
    count++;
})

function getEmployeeDepartmentById(employees,id){
    for(let i=0;i<count;i++){
        if(employees[i].id===id){
            return employees[i].department;
        }
    }
}

let dep= getEmployeeDepartmentById(employees,5);
console.log(dep);