const { employees } = require("../data.js");
// Count how many employees work on each project

// Function Name: countEmployeesByProject
// Input: employees
// Output: { "Project Alpha": 20, "Project Beta": 18, "Project Gamma": 15, "Project Delta": 12, "Project Epsilon": 10 }
// Expected Result: Returns an object with the count of employees working on each project.

function getUniqueProjectNames(employees){
    let array=[];
    for(let i=0;i<employees.length; i++){
        for(let j=0; j<employees[i].projects.length; j++){
            if(!array.includes(employees[i].projects[j])){
                array.push(employees[i].projects[j]);
            }
        }
    }
    return array;
}

// console.log(getUniqueProjectNames(employees))

function countEmployeesByProject(employees){
    uniqueProjects= getUniqueProjectNames(employees);
    let count;
    let listecountProjects={};
    for(let i=0; i<uniqueProjects.length;i++){
        count=0;
        for(let j=0; j<employees.length; j++){
            for(k=0; k<employees[i].projects.length; k++){
                if(uniqueProjects[i]===employees[j].projects[k]){
                    count++
                }
            }
        }
        listecountProjects[uniqueProjects[i]]=count;
    }
    return listecountProjects;
}
console.log( countEmployeesByProject(employees));