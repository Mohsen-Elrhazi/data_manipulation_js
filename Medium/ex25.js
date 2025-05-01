const { employees } = require("../data.js");
// Find the average number of projects per employee by department

// Function Name: calculateAverageProjectsByDepartment
// Input: employees
// Output: { "Développement": 3.2, "Design": 2.5, "Marketing": 1.8, "Management": 2.7 }
// Expected Result: Returns an object with the average number of projects per employee for each department.

function uniqueDepartment(employees){
    let array=[];
    for(let i=0;i<employees.length;i++){
        if(!array.includes(employees[i].department)){
            array.push(employees[i].department);
        }
    }
    return array;
}

function calculateAverageProjectsByDepartment(employees){
    arrayDeparts=uniqueDepartment(employees);
    let obj={};
    let count;
    let sum=0;
    for(let i=0; i<arrayDeparts.length;i++){
        count=0;
        sum=0;
        for(let j=0; j<employees.length; j++){
            if(arrayDeparts[i]===employees[j].department){
                sum+= employees[j].projects.length;
                count++;
            }
        }
        obj[arrayDeparts[i]]=sum/count;
    }
    return obj;
}
console.log( calculateAverageProjectsByDepartment(employees));