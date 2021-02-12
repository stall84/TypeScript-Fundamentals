
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

// Discriminating Unions
interface Bird {
    type: 'bird';   // literal type property
    flyingSpeed: number;
}
interface Horse {
    type: 'horse';      // literal type
    runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal (animal: Animal) {
    let speed;
    switch (animal.type) {      // Use a switch statement here to utilize our literal discriminator
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;       
    }
    console.log('Moving with speed: ' + speed); 
}
// When you  all the above function you have to pass it an animal object.. Remember interfaces describe
// the shape of objects
moveAnimal({type: 'bird', flyingSpeed: 18});    // Logs 'Moving with speed: 18'