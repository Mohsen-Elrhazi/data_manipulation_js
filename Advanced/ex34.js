const { employees } = require("../data.js");
// 34. Add a new property 'yearsOfService' calculated from joinDate
//     - **Function Name**: `addYearsOfService`
//     - **Input**: `employees`
//     - **Output**: `[ { id: 1, yearsOfService: 6, ... }, { id: 2, yearsOfService: 5, ... }, ... ]`
//     - **Expected Result**: Returns the employees array with an added 'yearsOfService' property.

function addYearsOfService(employees){
    let array=[];
    var  dataActuel=new Date();
    for(let i=0; i<employees.length; i++){
       var joinDate=new Date(employees[i].joinDate);
       var yearsOfService=dataActuel.getFullYear()-joinDate.getFullYear();
       employees[i].yearsOfService=yearsOfService
       array.push(employees[i]);
    }
    return array;
}

console.log( addYearsOfService(employees))