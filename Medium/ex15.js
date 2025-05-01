const { employees } = require("../data.js");
// Calculate the average salary per department

// Function Name: calculateAverageSalaryByDepartment
// Input: employees
// Output: { "Développement": 60000, "Design": 50000, ... }
// Expected Result: Returns an object with average salaries for each department.

function uniqueDepartment(employees) {
  let array = [];
  for (let i = 0; i < employees.length; i++) {
    if (!array.includes(employees[i].department)) {
      array.push(employees[i].department);
    }
  }
  return array;
}
// console.log(uniqueDepartment(employees))

function calculateAverageSalaryByDepartment(employees){
    let uniqueDeparts=uniqueDepartment(employees);
    let count;
    let sum;
    objResult={};
    for(let i=0;i<uniqueDeparts.length; i++){
        count=0;
        sum=0;
        for(let j=0; j<employees.length; j++){
            if(uniqueDeparts[i]===employees[j].department){
                count++;
                sum+= employees[j].salary;
            }
        }
        objResult[uniqueDeparts[i]]=sum/count;
    }
    return objResult;
}

console.log(calculateAverageSalaryByDepartment(employees));
