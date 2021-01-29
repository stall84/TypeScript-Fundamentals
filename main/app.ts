function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    let result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
    
}

const number1 = 5;
const number2 = 8.5;
const printBool = false;
const resultPhrase = 'Result is: ';
const outputDiv = document.getElementById('notes')! as HTMLOutputElement;

const result = add(number1, number2, printBool, resultPhrase)

outputDiv.innerHTML = result.toString();