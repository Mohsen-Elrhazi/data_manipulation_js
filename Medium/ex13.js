const { employees } = require("../data.js");
// List employees who have more than 2 skills

// Function Name: getEmployeesWithMoreThanTwoSkills
// Input: employees
// Output: [ { id: 1, firstName: "Jean", ... }, { id: 3, firstName: "Pierre", ... }, ... ]
// Expected Result: Returns an array of employees with more than 2 skills.
function getEmployeesWithMoreThanTwoSkills(employees){
    let array=[];
    for(let i=0; i< employees.length; i++){
        if(employees[i].skills && employees[i].skills.length>2){
            array.push(employees[i]);
        }
    }
    return array;
}

console.log( getEmployeesWithMoreThanTwoSkills(employees));