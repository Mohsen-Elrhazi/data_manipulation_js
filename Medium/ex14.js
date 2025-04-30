const { employees } = require("../data.js");
// Find employees whose last name starts with 'L'

// Function Name: getEmployeesByLastNameInitial
// Input: employees, 'L'
// Output: [ { id: 5, lastName: "Leroux", ... }, { id: 8, lastName: "Laurent", ... }, ... ]
// Expected Result: Returns an array of employees whose last name starts with 'L'.

function getEmployeesByLastNameInitial(){
    let array=[];
    
    for(let i=0; i<employees.length; i++ ){
        if(employees[i].lastName[0]=== "L"){
            array.push(employees[i]);
        }
    }
    return array;
}
console.log( getEmployeesByLastNameInitial(employees));
