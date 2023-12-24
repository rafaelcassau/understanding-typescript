"use strict";
function add(n1, n2) {
    return n1 + n2;
}
let number1 = 5;
const number2 = 2.8;
const result = add(number1, number2);
console.log(result);
const n = "Rafael Cassau";
let n2 = "Rafael Cassau";
var n3 = "Rafael Cassau";
const add_numbers = (a, b) => {
    let result;
    result = a + b;
    return result;
};
console.log('add_numbers: ' + add_numbers(2, 2));
const add_again = (a, b) => a + b;
console.log('add_again: ' + add_again(2, 2));
const add_default = (a, b = 0) => a + b;
console.log('add_default: ' + add_default(2));
const b = document.querySelector("button");
b.addEventListener('click', event => console.log(event));
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person2 = {
    name: 'Rafael Cassau',
    age: 34
};
const copyPerson = Object.assign({}, person2);
const addWithManyParameters = (...numbers) => {
    let result = 0;
    for (let n of numbers) {
        result += n;
    }
    return result;
};
console.log('addWithManyParameters: ' + addWithManyParameters(1, 2, 3));
const books = [
    'Art of War',
    'How to make friends and influency people',
    'The Hobbit',
    'System Design Interview',
];
const [book_1, book_2, ...remaining_books] = books;
console.log(book_1 + ', ' + book_2 + ', ' + remaining_books);
const book = {
    'book_name': 'Art of War',
    'author': 'Sun Tsu',
    'number_of_pages': 200,
};
const { book_name, author } = book;
console.log(book_name, author);
//# sourceMappingURL=basics.js.map