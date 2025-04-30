const { employees } = require("../data.js");
// Count how many employees speak English

// Function Name: countEnglishSpeakingEmployees
// Input: employees
// Output: 45
// Expected Result: Returns the number of employees who speak English.

function countEnglishSpeakingEmployees(employees){
   let count=0;
    for(let i=0; i<employees.length; i++){
        if(employees[i].languages.includes("English") ){
            count++;
        }
    }
    return count;
}

console.log(countEnglishSpeakingEmployees(employees));