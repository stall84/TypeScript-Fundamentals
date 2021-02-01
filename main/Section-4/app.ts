

// const add = (a: number, b: number =2 ) => {
//     return a + b;
// };

// Arrow functions make the below posible, but honestly it's a little hot&bothered for my taste
// const printOutput: (a: number | string) => void = output => console.log(output);

// printOutput(add(5));        // Using default parameter 2 

// Another better arrow function example when querying/using dom elements.
const button = document.querySelector('button');

if (button) {
    // Null Check for runtime in case button doesn't exist
    // Only one parameter 'event' so paren omitted, implicit return on same line
button.addEventListener('click', event => console.log(event));
}

// Spread Operator
const hobbies = ['Sports', 'Cooking', 'Flying'];
const activeHobbies = ['Hiking'];

// Important Fundamental Exercise/Note here. We're using push operator on a constant...
// So might wonder how we're modifying/altering a constant. Remember though that array's
// in JS are just objects. And objects store the ADDRESS of the object in memory. Therefore
// we are pushing to the object in memory, and not altering it's address at all, so the
// const still holds (it's still the exact same memory address)

// activeHobbies.push(hobbies) -> Won't compile b/c attempts to push a string array 
                                // into a string element in the activeHobbies arr
// However with spread we can do this
activeHobbies.push(...hobbies);      // This tells javascript to pull out all the elements
                                    // and then add them as a list of arguments in this
                                    // case pushed to activeHobbies (comma sep'd list)

const person = {
    name1: 'Michael',
    age: 36,
    isCool: true
};

const copiedPerson = person;    // What this is doing is assigning the memory location
                                // of person obj into copiedPerson.. 
                                //it's NOT copying person's key values.

const spreadPerson = { ...person };     // However THIS IS copying the person objects
                                        // key-values into the spreadPerson variable.

// Rest Parameters
const add = (...numbers: number[]) => {   // Using Rest operator to allow for unkonwn
                                            // Or dynamic range of parameters.
   return numbers.reduce((curResult, curVal) => {
        return curResult + curVal           // Reduce method starting value of 0
    }, 0)                                                      
};                                         // In this case merging any/all values of 
                                            // type number array
const addedNumbers = add(5, 18, 24, 10, 3);
console.log(addedNumbers);

// Array/Object Destructuring 

const [hobby1, hobby2] = hobbies;   // Will go through hobbies array, and pull out
                                    // elements to be stored in the const or let you 
                                    // defined in square brackets. Can be combined with 
                                    // spread/rest
const newHobbies = ['Blah', 'Berdle', 'Fishing', 'Chillin', 'Eatin'];

const [dHobbs1, dHobbs2, ...remainingHobbs] = newHobbies;
console.log(dHobbs1);   // 'Blah'
console.log(remainingHobbs);    // 'Fishing', 'Chillin', 'Eatin'

let personNew = {
    name2: 'Mike',
    age: '36',
    isCool: true
};

let { name2, age, isCool } = personNew;
console.log(name2); // Mike