class Department {
    // private readonly id: string;         // Leaving uncommented just to show
    // name: string;                        // What shorthand does automatically
    protected employees: string[] = [];     // You can initialize a field this way
                                            // In this case empty array
    constructor(private readonly id: string, public name: string) {     // shorthand constructor
        // this.id = id;        // Leaving in commented out to show what shorthand
        // this.name = name     // does for us automatically
    }
    describe(this: Department) {
        console.log(`Department: (${this.id}, ${this.name})`);
    }
    addEmployee(employee: string) {
        // validation if wanted
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

class AccountingDepartment extends Department {
    private lastReport: string;

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
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }
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
    }
}

const accounting = new AccountingDepartment('DT101', []);

accounting.addReport('We got some Salesforce work to do.');
accounting.mostRecentReport = 'Derdle and A-Flerdle';

console.log(accounting.mostRecentReport);
console.log(accounting.printReports());
