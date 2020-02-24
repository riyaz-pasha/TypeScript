"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Heelo " + this.empName);
    };
    return Employee;
}());
var emp1 = new Employee("Riyaz");
console.log(emp1.empName);
emp1.greet();
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(developerName) {
        return _super.call(this, developerName) || this;
    }
    Developer.prototype.getRole = function () {
        console.log("Application Developer");
    };
    return Developer;
}(Employee));
var dev1 = new Developer("Riyaz Mohammed");
dev1.empName;
dev1.getRole();
dev1.greet();
