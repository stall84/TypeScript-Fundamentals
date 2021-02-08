// Starting with typecasting especially where it relates to the DOM


const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

userInputElement.value = 'Hi there!';


// Index Types
interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email address!'
}

// Function Overloads
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;      // Overloading Function
function add(a: string, b: string): string;      // Overloading Function
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Michael', 'John');

console.log(result.toUpperCase());

// Optioinal Chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {
        title: 'CEO', 
        description: 'Self-Employed'
    }
};
// Using TS optional chaining
console.log(fetchedUserData?.job?.title);

// Nullish Coalescing
const fetchedUserInput = {
    id: 'u2',
    name: 'Bex',
    job: {
        title: '',  // empty string
        description: 'Healthcare'
    }
}
// lets say your use case you want to store exactly what is in the
// title key. Meaning if it's an empty string, you want to save it. 

const storedData = fetchedUserInput.job.title ?? 'Default';
console.log(storedData);