const { employees } = require("../data.js");
// List all positions in the "Marketing" department

// Function Name: getPositionsInDepartment
// Input: employees, "Marketing"
// Output: ["Responsable SEO", "Chargée de communication", "Responsable marketing digital", ...]
// Expected Result: Returns an array of all unique positions in the "Marketing" department.

function getPositionsInDepartment(employees,depart){
    let array=[];
    for(let i=0;i<employees.length;i++){
        if(employees[i].department===depart && !array.includes(employees[i].position)){
            array.push(employees[i].position);
        }
    }
    return array;
}
console.log( getPositionsInDepartment(employees,"Marketing"));