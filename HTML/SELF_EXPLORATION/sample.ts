class Employee{
    empId: number;
    empName: string;
    constructor(){
        this.empId = 1;
        this.empName = "sujeeth";
    }
    display(){
        console.log(this.empId + " " + this.empName);
    }
}
let Employee1 = new Employee();
Employee1.display();