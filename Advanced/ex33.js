const { employees } = require("../data.js");
// 33. Create initials for each employee (e.g., "JD" for Jean Dupont)
//     - **Function Name**: `getEmployeeInitials`
//     - **Input**: `employees`
//     - **Output**: `["JD", "MM", "PB", ...]`
//     - **Expected Result**: Returns an array of initials for all employees.

function getEmployeeInitials(employees){
    let array=[];
    for(let i=0; i<employees.length;i++){
        array.push(employees[i].firstName[0]+""+employees[i].lastName[0]);
    }
    return array;
}
console.log( getEmployeeInitials(employees))