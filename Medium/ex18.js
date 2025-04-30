const { employees } = require("../data.js");
// Find the most common skill among all employees

// Function Name: getMostCommonSkill
// Input: employees
// Output: "JavaScript"
// Expected Result: Returns the most common skill among all employees.

function getMostCommonSkill(employees) {
  const skillCount = {};

  // Count each skill
  for (const employee of employees) {
    for (const skill of employee.skills) {
      skillCount[skill] = (skillCount[skill] || 0) + 1;
    }
  }

  // Find the most common skill
  let mostCommonSkill = null;
  let maxCount = 0;

  for (const skill in skillCount) {
    if (skillCount[skill] > maxCount) {
      mostCommonSkill = skill;
      maxCount = skillCount[skill];
    }
  }

  return mostCommonSkill;
}

console.log( getMostCommonSkill(employees));
