const { employees } = require("../data.js");
// List all unique project names

// Function Name: getUniqueProjectNames
// Input: employees
// Output: ["Project Alpha", "Project Beta", "Project Gamma", "Project Delta", "Project Epsilon"]

function getUniqueProjectNames(employees){
    let array=[];
    for(let i=0; i<employees.length; i++){
        for(let j=0; j<employees[i].projects.length; j++)
        if(!array.includes(employees[i].projects[j])){
            array.push(employees[i].projects[j]);
        }
    }
    return array;
}

console.log(getUniqueProjectNames(employees))