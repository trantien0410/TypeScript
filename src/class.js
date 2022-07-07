"use strict";
/* CLASS */
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    //   public name: string;
    //   private age: number;
    //   readonly male: boolean;
    //   constructor(n: string, a: number, m: boolean) {
    //     this.name = n;
    //     this.age = a;
    //     this.male = m;
    //   }
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.print = function () {
        return "Name: ".concat(this.name, ", Age:").concat(this.age, ", Gender Male: ").concat(this.male);
    };
    return Employee;
}());
exports.Employee = Employee;
var employee = new Employee("tien", 22, true);
// console.log(employee.name);
// console.log(employee.age);
// console.log(employee.male);
// console.log(employee.print());
// employee.name = "ngoc";
// employee.male = false
// console.log(employee);
var bot = new Employee("bot", 25, true);
var employees = [];
employees.push(employee);
employees.push(bot);
employees.forEach(function (employee) {
    return console.log(employee.name, employee.male, employee.print());
});
