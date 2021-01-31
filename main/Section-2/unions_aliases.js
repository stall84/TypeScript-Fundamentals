/* SETUP */
var displayDiv = document.getElementById('notes');
var lowerDiv = document.getElementById('lowerDiv');
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number'
        || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// Say you want dynamic input to your functions like above..
// we want numbers in some cases or strings in others
var combineAges = combine('36', 31, 'as-number');
console.log(combineAges);
var combineNames = combine('Michael', 'BeccaZ', 'as-text');
console.log(combineNames);
displayDiv.innerHTML = " \n                        " + combineNames + "\n                        <br/>\n                        " + combineAges + "\n                        ";
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function greetSimple(user) {
    return ('Hi Im ' + user.name);
}
function isOlderSimple(user, checkAge) {
    return checkAge > user.age;
}
var donnyB = { name: 'Donny', age: 40 };
lowerDiv.innerHTML = "" + greetSimple({ name: 'Donny', age: 44 });
