"use strict";
// const add = (a: number, b: number =2 ) => {
//     return a + b;
// };
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Arrow functions make the below posible, but honestly it's a little hot&bothered for my taste
// const printOutput: (a: number | string) => void = output => console.log(output);
// printOutput(add(5));        // Using default parameter 2 
// Another better arrow function example when querying/using dom elements.
var button = document.querySelector('button');
if (button) {
    // Null Check for runtime in case button doesn't exist
    // Only one parameter 'event' so paren omitted, implicit return on same line
    button.addEventListener('click', function (event) { return console.log(event); });
}
// Spread Operator
var hobbies = ['Sports', 'Cooking', 'Flying'];
var activeHobbies = ['Hiking'];
// Important Fundamental Exercise/Note here. We're using push operator on a constant...
// So might wonder how we're modifying/altering a constant. Remember though that array's
// in JS are just objects. And objects store the ADDRESS of the object in memory. Therefore
// we are pushing to the object in memory, and not altering it's address at all, so the
// const still holds (it's still the exact same memory address)
// activeHobbies.push(hobbies) -> Won't compile b/c attempts to push a string array 
// into a string element in the activeHobbies arr
// However with spread we can do this
activeHobbies.push.apply(activeHobbies, hobbies); // This tells javascript to pull out all the elements
// and then add them as a list of arguments in this
// case pushed to activeHobbies (comma sep'd list)
var person = {
    name1: 'Michael',
    age: 36,
    isCool: true
};
var copiedPerson = person; // What this is doing is assigning the memory location
// of person obj into copiedPerson.. 
//it's NOT copying person's key values.
var spreadPerson = __assign({}, person); // However THIS IS copying the person objects
// key-values into the spreadPerson variable.
// Rest Parameters
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    // Or dynamic range of parameters.
    return numbers.reduce(function (curResult, curVal) {
        return curResult + curVal; // Reduce method starting value of 0
    }, 0);
}; // In this case merging any/all values of 
// type number array
var addedNumbers = add(5, 18, 24, 10, 3);
console.log(addedNumbers);
// Array/Object Destructuring 
var hobby1 = hobbies[0], hobby2 = hobbies[1]; // Will go through hobbies array, and pull out
// elements to be stored in the const or let you 
// defined in square brackets. Can be combined with 
// spread/rest
var newHobbies = ['Blah', 'Berdle', 'Fishing', 'Chillin', 'Eatin'];
var dHobbs1 = newHobbies[0], dHobbs2 = newHobbies[1], remainingHobbs = newHobbies.slice(2);
console.log(dHobbs1); // 'Blah'
console.log(remainingHobbs); // 'Fishing', 'Chillin', 'Eatin'
var personNew = {
    name2: 'Mike',
    age: '36',
    isCool: true
};
var name2 = personNew.name2, age = personNew.age, isCool = personNew.isCool;
console.log(name2); // Mike
