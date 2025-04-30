const { employees } = require("../data.js");
// List employees who speak more than 2 languages

// Function Name: getMultilingualEmployees
// Input: employees
// Output: [ { id: 3, firstName: "Pierre", ... }, { id: 5, firstName: "Camille", ... }, ... ]
// Expected Result: Returns an array of employees who speak more than 2 languages.

function getMultilingualEmployees(employees){
    let array=[];
    for(let i=0; i<employees.length; i++){
        if(employees[i].languages.length>2){
            array.push(employees[i]);
        }
    }
    return array;
}
console.log( getMultilingualEmployees(employees));