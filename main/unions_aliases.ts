
/* SETUP */

const displayDiv = document.getElementById('notes');
const lowerDiv = document.getElementById('lowerDiv');

///////////////////

// Using Unions and Aliases

type Combinable = number | string; // Aliasiing
type Conversion = 'as-number' | 'as-text'; // Aliasing

function combine(input1: Combinable, 
                input2: Combinable, 
                resultConversion: Conversion ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' 
            || resultConversion === 'as-number') {
            result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

// Say you want dynamic input to your functions like above..
// we want numbers in some cases or strings in others

const combineAges = combine('36', 31, 'as-number');
console.log(combineAges);

const combineNames = combine('Michael', 'BeccaZ', 'as-text');
console.log(combineNames);

displayDiv.innerHTML = ` 
                        ${combineNames}
                        <br/>
                        ${combineAges}
                        `;

function greet(user: {name: string, age: number}) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user: { name: string; age: number}, checkAge: number) {
    return checkAge > user.age;
}
// Can be simplified using Aliases to:
type User = {name: string, age: number};
function greetSimple(user: User) {
    return ('Hi Im ' + user.name);
}
function isOlderSimple(user: User, checkAge: number) {
    return checkAge > user.age;
}
let donnyB: User = {name: 'Donny', age: 40};
lowerDiv.innerHTML = `${greetSimple({name: 'Donny', age: 44})}`