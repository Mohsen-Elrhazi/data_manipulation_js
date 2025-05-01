const { employees } = require("../data.js");
// Find the department with the most employees

// Function Name: getLargestDepartment
// Input: employees
// Output: "Développement"
// Expected Result: Returns the name of the department with the most employees.

function uniqueDepartment(employees){
    let uniqueDept=[];
    for(let i=0;i<employees.length;i++){
        if(!uniqueDept.includes(employees[i].department)){
            uniqueDept.push(employees[i].department);
        }
    }
    return uniqueDept;
}

 function getLargestDepartment(employees){
    let uniqueDept=uniqueDepartment(employees);
    let max; 
    let count;
    let indice;
    let objDepart={};
    for(let i=0; i<uniqueDept.length;i++){
        count=0;
        for(let j=0; j<employees.length;j++){
            if(uniqueDept[i]===employees[j].department){
                count++;
            }
        }
        objDepart[uniqueDept[i]]=count;
    }

    firstKey=Object.keys(objDepart)[0];
    firstValue=objDepart[firstKey];

    max=firstValue;
    let departKey=firstKey;
    for(let key in objDepart){
        if(max<objDepart[key]){
            max=objDepart[key];
            departKey=key;
        }
    }
    return departKey;
}


console.log(getLargestDepartment(employees));