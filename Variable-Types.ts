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

let array1: number[] = [1, 2, 3,]
let array2: Array<number> = [1, 2, 3,]

// Tuples
let tuple1: [number, string, boolean] = [1, "One", true];

//Type inference take place while initialize variable
let newVar = true;
newVar = 10; // Typescript warns becuase variable is initialized with type boolean
newVar = "ten";

let newVar2; // in this case it doesn't throw any error because it explicitly defines type as any
newVar2 = true;
newVar2 = 10;
newVar2 = "Ten";
