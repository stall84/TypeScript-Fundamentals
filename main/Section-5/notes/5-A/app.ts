
const age = 25;

class Department {
    public name: string;
    private readonly id: string;
    protected employees: string[] = [];         // Protected allows inheriting classes to write-to
    constructor (n: string, id: string) {       // Constructor initializes fields (properties on the object instantiated)
        this.name = n;
        this.id = id;
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

// Inheritance
class ITDepartment extends Department {
    // Going to use shorthand for this subclass
    constructor(id: string, private reports: string[]) {
        super('Accounting', id); 
    }

    addEmployee(name: string) {    // Overriding the parent method
        if (name === 'Michael') {
            return;     // If employee name is michael.. don't add
        }
        this.employees.push(name);  // Since employees field is protected
    }                               // we can write to it here from sub-class
    addReport (text: string) {
        this.reports.push(text);
    }
    printReport () {
        console.log(this.reports);
    }


}

// If you want to use a specific constructor for the inheriting class:
class SalesDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super('Sales', id)      // Hardcoding 'Sales' as the name field for the base constructor
        this.admins = admins;   // For this sub-class instance store admins
    }
}

//const accounting = new Department('Accounting', '51KK');    // Allowed to modify private name field b/c through Constructor


const itDept = new ITDepartment('48IT', ['No report at start of file...']);

itDept.addReport('We\'re going to be creating a shit ton of LEADS in Salesforce');
itDept.addEmployee('Burt');

itDept.printReport();
console.log(itDept);
itDept.printEmployeeInfo();
