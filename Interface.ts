export { }

interface Employee {
    firstName: string,
    lastName: string,
    age: number,
}

function getEmployeeDetails(emp: Employee) {
    console.log(emp.firstName + emp.lastName)
}

const emp1 = { firstName: "Riyaz", lastName: "Mohammed", age: 20 };
getEmployeeDetails(emp1);