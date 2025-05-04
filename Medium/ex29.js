const { employees } = require("../data.js");
// List employees who work on multiple projects

// Function Name: getEmployeesWithMultipleProjects
// Input: employees
// Output: [ { id: 1, firstName: "Jean", ... }, { id: 3, firstName: "Pierre", ... }, ... ]
// Expected Result: Returns an array of employees who are assigned to multiple projects.

function getEmployeesWithMultipleProjects(employees){
    let array=[];
    for(let i=0; i<employees.length; i++){
        if(employees[i].projects.length>1){
            array.push(employees[i]);
        }
}
return array;
}

console.log(getEmployeesWithMultipleProjects(employees));
