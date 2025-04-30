const { employees } = require("../data.js");
// Find employees who joined after 2020

// Function Name: getEmployeesJoinedAfterYear
// Input: employees, 2020
// Output: [ { id: 13, firstName: "Julie", ... }, { id: 18, firstName: "Romain", ... }, ... ]
// Expected Result: Returns an array of employees who joined after 2020.

function getEmployeesJoinedAfterYear(employees,year){
    let array=[];
    for(let i=0;i<employees.length; i++){
        if(employees[i].joinDate>year){
            array.push(employees[i]);
        }
    }
    return array;
}

console.log( getEmployeesJoinedAfterYear(employees, "2020-12-30"));