interface Named {
    readonly name?: string; // made optional
    outputName?: string;    // optional ? property
}

interface Greetable extends Named {   
    greet(nickname: string): void;  
}

class Person implements Greetable {
    name?: string;
    age?: number;

    constructor (name: string, age: number) {
        if (name) {
            this.name = name;   // Since we changed our properties
        } else if (age) {       // around to optional. Check for 
            this.age = age;     // truthiness in constructor
        }
    }
    greet(nickname: string) {   // not optional in interface or class so required
        console.log('Hello ' + this.name + ' ' + 'You frikin' + ' ' + nickname)
    }

}

const michael = new Person('Michael Stallings', 36);

michael.greet('Badass!');


// Interfaces to define functions

// First showing original method of defining a function's structure
type AddFn = (a: number, b?: number) => number;      // Type definition

let add: AddFn;

add = (n1: number, n2?: number) => {
    return n1 + 4;
}

console.log(add(5));

// Alternatively you can use Interfaces because Functions ARE Objects in JS
interface IntAddFn {
    (a: number, b: number): number;
}

let intAdd: IntAddFn;

intAdd = (int1: number, int2: number) => {
    return int1 + int2;
}