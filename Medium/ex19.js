const { employees } = require("../data.js");
// List employees with a salary above 60000

// Function Name: getHighEarningEmployees
// Input: employees, 60000
// Output: [ { id: 3, firstName: "Pierre", ... }, { id: 8, firstName: "Nicolas", ... }, ... ]
// Expected Result: Returns an array of employees earning above 60000.

function getHighEarningEmployees(employees){
    let array=[];
    employees.forEach(employe=>{
        if(employe.salary>60000){
            array.push(employe);
        }
    });
    return array;
}
console.log(getHighEarningEmployees(employees));