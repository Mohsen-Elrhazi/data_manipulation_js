const { employees } = require("../data.js");
// 35. Create an object grouping employees by first letter of last name
//     - **Function Name**: `groupEmployeesByLastNameInitial`
//     - **Input**: `employees`
//     - **Output**: `{ "D": [ { id: 1, ... }, { id: 10, ... } ], "M": [ { id: 2, ... }, { id: 9, ... } ], ... }`
//     - **Expected Result**: Returns an object grouping employees by the first letter of their last name.

function groupEmployeesByLastNameInitial(employees){
    let obj={};
    let array=[];
    for(let i=0; i<employees.length;i++){
        for(let j=i; j<employees.length; j++){
            if(employees[i].lastName[0]===employees[j].lastName[0] ){
                array.push(employees[j]);
            }
        }
        obj[employees[i].lastName[0]]=array;
    }
    return obj;
}

console.log( groupEmployeesByLastNameInitial(employees))