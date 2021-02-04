"use strict";
const age = 25;
class Department {
    constructor(n, id) {
        this.employees = []; // Protected allows inheriting classes to write-to
        this.name = n;
        this.id = id;
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
// Inheritance
class ITDepartment extends Department {
    // Going to use shorthand for this subclass
    constructor(id, reports) {
        super('Accounting', id);
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'Michael') {
            return; // If employee name is michael.. don't add
        }
        this.employees.push(name); // Since employees field is protected
    } // we can write to it here from sub-class
    addReport(text) {
        this.reports.push(text);
    }
    printReport() {
        console.log(this.reports);
    }
}
// If you want to use a specific constructor for the inheriting class:
class SalesDepartment extends Department {
    constructor(id, admins) {
        super('Sales', id); // Hardcoding 'Sales' as the name field for the base constructor
        this.admins = admins; // For this sub-class instance store admins
    }
}
//const accounting = new Department('Accounting', '51KK');    // Allowed to modify private name field b/c through Constructor
const itDept = new ITDepartment('48IT', ['No report at start of file...']);
itDept.addReport('We\'re going to be creating a shit ton of LEADS in Salesforce');
itDept.addEmployee('Burt');
itDept.printReport();
console.log(itDept);
itDept.printEmployeeInfo();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFFZixNQUFNLFVBQVU7SUFJWixZQUFhLENBQVMsRUFBRSxFQUFVO1FBRHhCLGNBQVMsR0FBYSxFQUFFLENBQUMsQ0FBUyxrREFBa0Q7UUFFMUYsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBZ0I7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGlCQUFpQjtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBRUo7QUFFRCxjQUFjO0FBQ2QsTUFBTSxZQUFhLFNBQVEsVUFBVTtJQUNqQywyQ0FBMkM7SUFDM0MsWUFBWSxFQUFVLEVBQVUsT0FBaUI7UUFDN0MsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQURJLFlBQU8sR0FBUCxPQUFPLENBQVU7SUFFakQsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3BCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNwQixPQUFPLENBQUssMENBQTBDO1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRSxxQ0FBcUM7SUFDckUsQ0FBQyxDQUErQix5Q0FBeUM7SUFDekUsU0FBUyxDQUFFLElBQVk7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELFdBQVc7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBR0o7QUFFRCxzRUFBc0U7QUFDdEUsTUFBTSxlQUFnQixTQUFRLFVBQVU7SUFFcEMsWUFBWSxFQUFVLEVBQUUsTUFBZ0I7UUFDcEMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFNLGdFQUFnRTtRQUN4RixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFHLDJDQUEyQztJQUN2RSxDQUFDO0NBQ0o7QUFFRCw2SEFBNkg7QUFHN0gsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0FBRTNFLE1BQU0sQ0FBQyxTQUFTLENBQUMsK0RBQStELENBQUMsQ0FBQztBQUNsRixNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTNCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDIn0=