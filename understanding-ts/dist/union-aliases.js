"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (resultConversion === 'as-text') {
        result = input1.toString() + input2.toString();
    }
    else {
        if (typeof input1 === 'number' &&
            typeof input2 === 'number' ||
            resultConversion === 'as-number') {
            result = +input1 + +input2;
        }
    }
    return result;
}
console.log(combine('30', '26', 'as-text'));
console.log(combine('30', '26', 'as-number'));
console.log(combine(30, 26, 'as-text'));
console.log(combine(30, 26, 'as-number'));
console.log(combine('Max', 'Anna', 'as-text'));
//# sourceMappingURL=union-aliases.js.map