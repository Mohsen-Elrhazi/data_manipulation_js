const { employees } = require("../data.js");
// Calculate the average age of all employees

// Function Name: calculateAverageAge
// Input: employees
// Output: 31.2
// Expected Result: Returns the average age of all employees.

//! 1ere methode
// function calculateAverageAge(employees){
//     let count=0;
//     let sum =0;
//     employees.forEach(employe=>{
//         count++;
//         sum+=employe.age;
//     });
//     return sum/count;
// }
// console.log(calculateAverageAge(employees));

//!2eme methode
function calculateAverageAge(employees){
    let count=0;
    employees.forEach(employe=>{
        count++;
    });

let sum=0;

for(let i=0; i<count; i++){
sum+=employees[i].age;
}
let moyenne= sum/count;
return moyenne;
}

console.log(calculateAverageAge(employees));