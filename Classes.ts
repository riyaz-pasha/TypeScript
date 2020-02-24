export { }
class Employee {
    private empName: string;
    constructor(name: string) {
        this.empName = name;
    }

    greet() {
        console.log("Heelo " + this.empName);
    }
}

let emp1 = new Employee("Riyaz");
console.log(emp1.empName)

emp1.greet()

class Developer extends Employee {
    constructor(developerName: string) {
        super(developerName);
    }

    getRole() {
        console.log("Application Developer");
    }
}

let dev1 = new Developer("Riyaz Mohammed");
dev1.empName;
dev1.getRole();
dev1.greet();
