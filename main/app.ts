
const age = 25;

class Department {
    private name: string;
    private employees: string[] = [];
    constructor (n: string) {       // Constructor initializes fields (properties on the object instantiated)
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department is: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

const accounting = new Department('Accounting');    // Allowed to modify private name field b/c through Constructor

accounting.addEmployee('Michael');
accounting.addEmployee('Thomas');
accounting.addEmployee('Becca');

accounting.describe();
accounting.printEmployeeInfo();


class NewDepartment {
    // name: string;
    // id: string;
    constructor(public name: string, private id: string) {
        // No initialization to this needed w/ shorthand 
    }
}

const newAccount = new NewDepartment('Accounting', 'D1121');

console.log(newAccount);