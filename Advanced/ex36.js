const { employees } = require("../data.js");
// 36. Build a dictionary of projects with assigned employee names
//     - **Function Name**: `getProjectEmployeeDictionary`
//     - **Input**: `employees`
//     - **Output**: `{ "Project Alpha": ["Jean Dupont", "Pierre Bernard", ...], "Project Beta": ["Marie Martin", ...], ... }`
//     - **Expected Result**: Returns a dictionary of projects with the names of assigned employees.

function getUniquesProjectsNames(employees){
    let array=[];
    for(let i=0; i<employees.length; i++){
        for(let j=0; j<employees[i].projects.length; j++){
            if(!array.includes(employees[i].projects[j])){
                array.push(employees[i].projects[j]);
            }
        }
      
    }
    return array;
}

// console.log(getUniquesProjectsNames(employees))

function getProjectEmployeeDictionary(employees){
    let obj={};
    let array=[];
    let uniquesProjectsNames=getUniquesProjectsNames(employees);
    for(let i=0;i<uniquesProjectsNames.length; i++){
        for(let j=0; j<employees.length; j++){
            for(let k=0;k<employees[j].projects.length; k++){
                if(uniquesProjectsNames[i]===employees[j].projects[k] ){
                  array.push(employees[j].firstName+" "+employees[j].lastName);
                }
            }
        }
        obj[uniquesProjectsNames[i]]=array;
        array=[];
    }

    return obj
}

console.log( getProjectEmployeeDictionary(employees))