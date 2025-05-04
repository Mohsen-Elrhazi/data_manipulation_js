const { employees } = require("../data.js");
// 35. Create an object grouping employees by first letter of last name
//     - **Function Name**: `groupEmployeesByLastNameInitial`
//     - **Input**: `employees`
//     - **Output**: `{ "D": [ { id: 1, ... }, { id: 10, ... } ], "M": [ { id: 2, ... }, { id: 9, ... } ], ... }`
//     - **Expected Result**: Returns an object grouping employees by the first letter of their last name.

function groupEmployeesByLastNameInitial(employees) {
    let obj = {};  

    for (let i = 0; i < employees.length; i++) {
        let initiale = employees[i].lastName[0]; 

        if (!obj[initiale]) {
            obj[initiale] = [];  
        }
        
        obj[initiale].push(employees[i]);
    }

    return obj;  
}

console.log( groupEmployeesByLastNameInitial(employees))