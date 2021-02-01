"use strict";
const age = 25;
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department is: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting'); // Allowed to modify private name field b/c through Constructor
accounting.addEmployee('Michael');
accounting.addEmployee('Thomas');
accounting.addEmployee('Becca');
accounting.describe();
accounting.printEmployeeInfo();
class NewDepartment {
    // name: string;
    // id: string;
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // No initialization to this needed w/ shorthand 
    }
}
const newAccount = new NewDepartment('Accounting', 'D1121');
console.log(newAccount);
