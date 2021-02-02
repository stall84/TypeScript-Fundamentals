"use strict";
class Department {
    // In this case empty array
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;         // Leaving uncommented just to show
        // name: string;                        // What shorthand does automatically
        this.employees = []; // You can initialize a field this way
        // this.id = id;        // Leaving in commented out to show what shorthand
        // this.name = name     // does for us automatically
    }
    describe() {
        console.log(`Department: (${this.id}, ${this.name})`);
    }
    addEmployee(employee) {
        // validation if wanted
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report was found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('No Report given to add');
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLFVBQVU7SUFJNEIsMkJBQTJCO0lBQ25FLFlBQTZCLEVBQVUsRUFBUyxJQUFZO1FBQS9CLE9BQUUsR0FBRixFQUFFLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBSjVELDJFQUEyRTtRQUMzRSw0RUFBNEU7UUFDbEUsY0FBUyxHQUFhLEVBQUUsQ0FBQyxDQUFLLHNDQUFzQztRQUcxRSwwRUFBMEU7UUFDMUUsb0RBQW9EO0lBQ3hELENBQUM7SUFDRCxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsV0FBVyxDQUFDLFFBQWdCO1FBQ3hCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsaUJBQWlCO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FFSjtBQUVELE1BQU0sb0JBQXFCLFNBQVEsVUFBVTtJQWlCekMsWUFBWSxFQUFVLEVBQVUsT0FBaUI7UUFDN0MsS0FBSyxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztRQURJLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFFN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQWpCRCxJQUFJLGdCQUFnQjtRQUNoQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzFCO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLGdCQUFnQixDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQU1ELFdBQVcsQ0FBQyxJQUFZO1FBQ3BCLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRTtZQUNoQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsU0FBUyxDQUFDLElBQVk7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUNELFlBQVk7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7QUFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUV6RCxVQUFVLENBQUMsU0FBUyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7QUFDM0QsVUFBVSxDQUFDLGdCQUFnQixHQUFHLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyJ9