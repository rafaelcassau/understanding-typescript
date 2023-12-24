"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
let combineValues;
combineValues = add2;
console.log(combineValues(2, 2));
function addAndHandle(n1, n2, callback) {
    const result = n1 + n2;
    callback(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=functions.js.map