var Employee = /** @class */ (function () {
    function Employee() {
        this.empId = 1;
        this.empName = "sujeeth";
    }
    Employee.prototype.display = function () {
        console.log(this.empId + " " + this.empName);
    };
    return Employee;
}());
var Employee1 = new Employee();
Employee1.display();
