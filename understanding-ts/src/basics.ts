function add(n1: number, n2: number): number {
    return n1 + n2;
}

let number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);


// const, let and var

// const is a constant, we cant change their value after it was assigned
const n = "Rafael Cassau";
// let is a ne way to declare vars, it has block scope, which means that the variable only exists
// inside a block, i.e "if statements or functions" 
let n2 = "Rafael Cassau"
// var has a global scope, even when you define it inside a function you are able to access it 
// outside of the defined scope
var n3 = "Rafael Cassau"


// arrow function is something like anonymous function
const add_numbers = (a: number, b: number) => {
    let result;
    result = a + b;
    return result;
}
console.log('add_numbers: ' + add_numbers(2, 2));

// arrow function with just one expression
const add_again = (a: number, b: number) => a + b;
console.log('add_again: ' + add_again(2, 2));

// arrow function with default arguments
const add_default = (a: number, b: number = 0) => a + b;
console.log('add_default: ' + add_default(2));

// arrow function in the event listener
const b = document.querySelector("button")!;
b.addEventListener('click', event => console.log(event));


// Spread operator (unpack)
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies); // add all the array elements in the new array

// Spread operator also can be used in objects
const person2 = {
    name: 'Rafael Cassau',
    age: 34
};

const copyPerson = { ...person2 }; // Will copy all the attributes in this new object
// copyPerson = person2 won't copy, it just will share the same memory refenrence address

// Rest parameters (*args)
const addWithManyParameters = (...numbers: number[]): number => {
    let result = 0;
    for (let n of numbers) {
        result += n;
    }
    return result;
}
console.log('addWithManyParameters: ' + addWithManyParameters(1, 2, 3));

// Desconstructing Array
const books = [
    'Art of War',
    'How to make friends and influency people',
    'The Hobbit',
    'System Design Interview',
];
const [book_1, book_2, ...remaining_books] = books;
console.log(book_1 + ', ' + book_2 + ', ' + remaining_books)

// Descontructing Objects
const book = {
    'book_name': 'Art of War',
    'author': 'Sun Tsu',
    'number_of_pages': 200,
}
const {book_name, author} = book // variables must have the same name as the object attribute
console.log(book_name, author);