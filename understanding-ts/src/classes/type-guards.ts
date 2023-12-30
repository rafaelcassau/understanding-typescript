type Admin = {
    name: string;
    privilegies: string [];
};

type Employee = {
    name: string;
    startDate: Date;
};

// this can generate a third type with the intersection of
// the two types above, it is the same functionality provided
// by interfaces
// prefer to use interfaces instead type, the code become more readable
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privilegies: ['create-server'],
    startDate: new Date()
}

console.log(e1);


// Type Guards


// "typeof" for primitive javascript types
type Generic = string | number

const addGeneric = (a: Generic, b: Generic) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return a.toString() + b.toString();
}

console.log(addGeneric(2, 2));
console.log(addGeneric('2', '2'));


// "key in type_object" for custom javascript types
type UnknownEmployee = Employee | Admin;

const showEmployeeInformation = (employee: UnknownEmployee) => {
    console.log('Name: ' + employee.name);
    if ('privilegies' in employee) {
        console.log('Privilegies: ' + employee.privilegies);
    } else if ('startDate' in employee) {
        console.log('StartDate: ' + employee.startDate);
    }
}

showEmployeeInformation({name: 'Manu', startDate: new Date()});
showEmployeeInformation({name: 'Sofia', privilegies: ['create-server']});


// "instanceof" for javascript custom objects based on classes
class Car1 {
    drive() {
        console.log('Driving...');
    }
}

class Truck1 {
    constructor(private amount: number) {

    }
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo() {
        console.log('Load cargo ...' + this.amount);
    }
}

type Vehicle = Car1 | Truck1;

const useVehicle = (vehicle: Vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck1) {
        vehicle.loadCargo();
    }
}

useVehicle(new Car1());
useVehicle(new Truck1(1000));

// switch matching for interfaces with kind attribute
interface Bird {
    kind: 'bird';
    flyingSpeed: number;
}

interface Horse {
    kind: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse

const moveAnimal = (animal: Animal) => {
    let speed;
    switch(animal.kind) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({'kind': 'bird', 'flyingSpeed': 50});
moveAnimal({'kind': 'horse', 'runningSpeed': 100});


// casting
// "!" tells typescript that the expression in front of it will never yield null
// "as HTMLInputElement" statement will cast the HTMLElement found in correct element type
let userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'some value here';


// index properties
// It means that anyone that implements this interface can have many properties
// as they need, because it is flexible, just the type must be respected
interface ErrorContainer {
    [prop: string]: string;
};

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};


//function overloaded
function sumOperation(a: string, b: string): string;
function sumOperation(a: string, b: number): string;
function sumOperation(a: number, b: string): string;
function sumOperation(a: number, b: number): number;
function sumOperation(a: any, b: any) {
    if (typeof a === 'number' && typeof b === "number") {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}

console.log(sumOperation('2', '2')); // 22
console.log(sumOperation('2', 2));   // 22
console.log(sumOperation(2, '2'));   // 22
console.log(sumOperation(2, 2));     // 4


//optional chaining
const fetchedUserData = {
    id: 1,
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
// javascript
console.log(fetchedUserData.job && fetchedUserData.job.title);
// typescript
console.log(fetchedUserData?.job?.title)


// nullish coalescing
let userInputData = '';
let x = userInputData || 'DEFAULT'; // OR operator will evaluate empty string or zero as false and will redirect to the DEFAULT
console.log(x);

userInputData = ''
// ?? instead will evaluate empty string or zero as true and won't fallback to the DEFAULT
// it will only use DEFAULT when the userInputData is "null" or "undefined"
x = userInputData ?? 'DEFAULT'; 
console.log(x);

