const { employees } = require("../data.js");

// Find the employee with the highest salary

// Function Name: getHighestPaidEmployee
// Input: employees
// Output: { id: 34, firstName: "Paul", lastName: "Leclercq", ... }
// Expected Result: Returns the employee object with the highest salary.

// function getHighestPaidEmployee(employees){
//     let maxSalary= employees[0].salary;

//     employees.forEach(employe=>{
//         if(maxSalary<employe.salary)
//             maxSalary = employe.salary;
//     })
//     return maxSalary;
// }

// let maxSalary= getHighestPaidEmployee(employees);
// console.log(maxSalary);


function getHighestPaidEmployee(employees){
    let maxSalary=employees[0].salary;
    let indice;

    for(let i=0; i< employees.length; i++){
        if(maxSalary < employees[i].salary){
            maxSalary= employees[i].salary;
            indice=i;
        }
    }

    return employees[indice];
}

console.log(getHighestPaidEmployee(employees));