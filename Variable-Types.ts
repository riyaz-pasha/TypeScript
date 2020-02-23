export { }
let isEmployee: boolean = true;
console.log(typeof isEmployee);

isEmployee = "No"; // in type script it'll throw an error but in js it will still run
console.log(isEmployee);

let nullVar: null = null;
console.log("typeof nullVar", typeof nullVar)