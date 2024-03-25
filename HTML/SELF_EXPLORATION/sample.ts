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

//var sam = ["ana", 3, "one", 3.23, true];


class Employee{
    empId: number;
    empName: string;
    constructor(empId: number, empName: string){
        this.empId = empId;
        this.empName = empName;
    }
    show() {
        console.log(this.empId + " " + this.empName);
    }
}

class Manager extends Employee{  
    constructor(empid: number, empname: string){
        super(empid, empname);
    }
}

 let man1 = new Manager(2, "kavin");
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
