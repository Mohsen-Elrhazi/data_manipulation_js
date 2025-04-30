const { employees } = require("../data.js");
// Find the longest-serving employee

// Function Name: getLongestServingEmployee
// Input: employees
// Output: { id: 34, firstName: "Paul", ... }
// Expected Result: Returns the employee who has been with the company the longest.


function getLongestServingEmployee(employees){
        let array=[];
        let indice;

        let longService=new Date(employees[0].joinDate);
        
        for(let i=0;i<employees.length; i++){
            if(longService> new Date(employees[i].joinDate)){
                longService=new Date(employees[i].joinDate);
                indice=i;
            }
        }
        return employees[indice];
    }
    console.log(getLongestServingEmployee(employees));