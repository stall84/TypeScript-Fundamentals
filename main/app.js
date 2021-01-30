function adder(n1, n2) {
    return n1 + n2;
}
// Functions as Types
var combineValues;
combineValues = adder; // Normal Javascript. Assigning a pointer to a function to a function
console.log(combineValues(8, 8)); // 16
