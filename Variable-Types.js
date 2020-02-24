"use strict";
exports.__esModule = true;
var isEmployee = true;
console.log(typeof isEmployee);
isEmployee = "No"; // in type script it'll throw an error but in js it will still run
console.log(isEmployee);
var nullVar = null;
console.log("typeof nullVar", typeof nullVar);
var undefinedVar = undefined;
console.log("typeof undefinedVar", typeof undefinedVar);
var isNew = null;
var empName = undefined;
console.log("typeof isNew", typeof isNew);
console.log("typeof empName", typeof empName);
var array1 = [1, 2, 3,];
var array2 = [1, 2, 3,];
// Tuples
var tuple1 = [1, "One", true];
//Type inference take place while initialize variable
var newVar = true;
newVar = 10; // Typescript warns becuase variable is initialized with type boolean
newVar = "ten";
var newVar2; // in this case it doesn't throw any error because it explicitly defines type as any
newVar2 = true;
newVar2 = 10;
newVar2 = "Ten";
