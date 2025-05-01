const { employees } = require("../data.js");
// Calculate the total salary expenditure per department

// Function Name: calculateTotalSalaryByDepartment
// Input: employees
// Output: { "Développement": 750000, "Design": 450000, "Marketing": 600000, "Management": 800000 }
// Expected Result: Returns an object with the total salary expenditure for each department.
function uniqueDepartment(employees){
    let array=[];
    for(let i=0; i<employees.length; i++){
        if(!array.includes(employees[i].department)){
            array.push(employees[i].department);
        }
    }
    return array;
}

// console.log(uniqueDepartment(employees));

function calculateTotalSalaryByDepartment(employees){
    uniqueDaparts=uniqueDepartment(employees);
    let count;
    let sum;
    let objResult={};
    for(let i=0;i<uniqueDaparts.length; i++){
        count=0;
        sum=0;
        for(let j=0; j<employees.length;j++){
            if(uniqueDaparts[i]===employees[j].department){
                // count++;
                sum+=employees[j].salary;
            }
        }
        objResult[uniqueDaparts[i]]=sum;
    }
    return objResult;
}

console.log(calculateTotalSalaryByDepartment(employees));
