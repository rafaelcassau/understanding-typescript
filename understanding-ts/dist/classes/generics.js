"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    let description = 'Got not value.';
    if (element.length === 1) {
        description = 'Got 1 element.';
    }
    else if (element.length > 1) {
        description = 'Got ' + element.length + ' elements.';
    }
    return [element, description];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe([1, 2, 3]));
console.log(countAndDescribe(''));
console.log(countAndDescribe([]));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'Max', age: 30 }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        let index = this.data.indexOf(item);
        if (index === -1) {
            return;
        }
        this.data.splice(index, 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());
//# sourceMappingURL=generics.js.map