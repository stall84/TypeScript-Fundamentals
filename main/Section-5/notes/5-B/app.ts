abstract class Department {
    // private readonly id: string;         // Leaving uncommented just to show
    // name: string;                        // What shorthand does automatically
    protected employees: string[] = [];     // You can initialize a field this way
                                            // In this case empty array
    static fiscalYear = 2021;
    constructor(protected readonly id: string, public name: string) {     // shorthand constructor
        // this.id = id;        // Leaving in commented out to show what shorthand
        // this.name = name     // does for us automatically
    }
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        // validation if wanted
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployee(name: string) {       // Create a static method on Dept Class
        return {name: name};                    // returns a 'employee' object
    }

}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    

    private constructor(id: string, private reports: string[]) {    // Making constructor private for 
        super(id, 'Accounting');                                    // Creating Singleton with only
        this.lastReport = reports[0];                               // Static methods available.
        
    }

    static getInstance() {          // Totally legal calling a static property from a 
        if (this.instance) {        // static-declared method
            return this.instance;
        }
        this.instance = new AccountingDepartment('AC303', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);  // Notice we overrode the 
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report was found');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('No Report given to add');
        }
        this.addReport(value);
    }                                                           // Base class describe method

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
        console.log('For FY: ' + Department.fiscalYear);
    }
}

class ITDept extends Department {
    constructor(id: string) {
        super(id, 'Information Technology');
    }

    describe() {
        console.log('Department: ' + this.name + 'ID: ' + this.id);
    }

}

const itDept = new ITDept('IT3838');

itDept.describe();

const accounting = AccountingDepartment.getInstance();      // These will be the exact
const accounting2 = AccountingDepartment.getInstance();     // same (Singleton Class)

console.log(accounting);
console.log(accounting2);


const employee1 = Department.createEmployee('Johnny');
console.log(employee1);
