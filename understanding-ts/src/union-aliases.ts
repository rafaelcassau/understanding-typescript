type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result;
    if (resultConversion === 'as-text') {
        result = input1.toString() + input2.toString();
    } else {
        if (typeof input1 === 'number' && 
            typeof input2 === 'number' || 
            resultConversion === 'as-number'
        ) {
            result = +input1 + +input2;
        }
    }
    return result;
}

console.log(combine('30', '26', 'as-text'));    // 3026
console.log(combine('30', '26', 'as-number'));  // 56
console.log(combine(30, 26, 'as-text'));        // 3026
console.log(combine(30, 26, 'as-number'));      // 56
console.log(combine('Max', 'Anna', 'as-text')); // MaxAnna