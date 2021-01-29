function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 8.5;
var printBool = false;
var resultPhrase = 'Result is: ';
var outputDiv = document.getElementById('notes');
var result = add(number1, number2, printBool, resultPhrase);
outputDiv.innerHTML = result.toString();
