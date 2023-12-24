function add2(n1: number, n2: number) {
    return n1 + n2;
}

// define the function structure that can be set in this variable
// any different function with more or less parameters and return wont
// be accepted
let combineValues: (a: number, b: number) => number;

combineValues = add2

console.log(combineValues(2, 2));


function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);
}


addAndHandle(10, 20, (result) => {
    console.log(result);
});
