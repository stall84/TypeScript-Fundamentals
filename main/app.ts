
function adder(n1: number, n2: number) {
    return n1 + n2;
}

// Functions as Types

let combineValues;

combineValues = adder;                  // Normal Javascript. Assigning a pointer to a function to a function

combineValues = 43;                     // However this could happen later in the code, which will then cause the call
                                        // to throw an error. To prevent this, we want to type combineValues as a function.

//console.log(combineValues(8, 8));       // Error!


let typedCombVals: Function;            // Capital F

typedCombVals = adder;

console.log(typedCombVals(8,8));        // 16

// However we CAN be more explicit .. Above we're saying typedCombVals can be ANY type of Function..
// But we probably want to be more specific:

let strictTypedCombVals: (a: number, b: number) => number;  
// Says strictTypedCombVals accepts a function with strictly two parameters, both taking numbers,
// and returns a number type 

strictTypedCombVals = adder;

console.log(strictTypedCombVals(8,8));  //16

// function types with callbacks

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);                        //30
})