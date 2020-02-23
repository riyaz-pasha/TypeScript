export { }
let isEmployee: boolean = true;
console.log(typeof isEmployee);

isEmployee = "No"; // in type script it'll throw an error but in js it will still run
console.log(isEmployee);

let nullVar: null = null;
console.log("typeof nullVar", typeof nullVar)

let undefinedVar = undefined;
console.log("typeof undefinedVar", typeof undefinedVar);

let isNew: boolean = null;
let empName: string = undefined;
console.log("typeof isNew", typeof isNew)
console.log("typeof empName", typeof empName)