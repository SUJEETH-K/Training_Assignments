// class Employee{
//     empId: number;
//     empName: string;
//     constructor(){
//         this.empId = 1;
//         this.empName = "sujeeth";
//     }
//     display(){
//         console.log(this.empId + " " + this.empName);
//     }
// }
// let Employee1 = new Employee();
// Employee1.display();
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//var sam = ["ana", 3, "one", 3.23, true];
var Employee = /** @class */ (function () {
    function Employee(empId, empName) {
        this.empId = empId;
        this.empName = empName;
    }
    Employee.prototype.show = function () {
        console.log(this.empId + " " + this.empName);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(empid, empname) {
        return _super.call(this, empid, empname) || this;
    }
    return Manager;
}(Employee));
var man1 = new Manager(2, "kavin");
man1.show();
// let set = new Set();
// set.add("2");
// set.add(true);
// set.add("kavin");
// set.add("kavin");
// let map1 = new Map();
// map1.set("ind", "India");
// map1.set("in", "indonesia");
//map1.get();
// console.log(map1.keys());
