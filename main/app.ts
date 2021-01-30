let userInput: unknown;
let userName: string;

userInput = 5;
userInput = false;
userInput = 'Mike';

if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(userName);

function generateError(message: string, code: number) {
    throw {message: message, errorCode: code};
}

generateError('An Error Occurred', 500);  // This will throw an error 
                                          // in the console at runtime

// However when we check the console for
// this below.. nothing is returned (not even 'undefined')
// The reason is because generateError's return type is 'never' <---**
let errResult = generateError('Another Error Occurred', 505);  
                                                                
console.log(errResult);                                         