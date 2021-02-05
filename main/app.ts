
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee; 

type UnknownEmployee = Employee | Admin;    // Make union type 

function printEmployeeInformation (emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

const e1: ElevatedEmployee = {
    name: 'Michael',
    privileges: ['create-server', 'API', 'badassery'],
    startDate: new Date()
}
// printEmployeeInformation(e1);

class Car {
    drive() {
        console.log('Driving ...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    }
    loadCargo(amount: number) {
        console.log('Loading cargo: ' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1500);
    } // instanceof is a normal JS operator
}     
useVehicle(v2);