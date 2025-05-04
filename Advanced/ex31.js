const { employees } = require("../data.js");
// 31. Create a new array with full names (firstName + lastName)
//     - **Function Name**: `getFullNames`
//     - **Input**: `employees`
//     - **Output**: `["Jean Dupont", "Marie Martin", "Pierre Bernard", ...]`
//     - **Expected Result**: Returns an array of full names for all employees.

function getFullNames(employees){
    let array=[];
    for(let i=0; i<employees.length;i++){
        array.push(employees[i].firstName +" "+ employees[i].lastName);
    }
    return array;
}

console.log(getFullNames(employees))