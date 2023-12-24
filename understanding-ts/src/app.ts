let userInput: unknown; // It is more strict than type any
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}

// type "never" should be used when we won't return nothing, while() and throw are good fits for it
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);