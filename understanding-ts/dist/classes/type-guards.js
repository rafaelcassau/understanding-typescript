"use strict";
var _a;
const e1 = {
    name: 'Max',
    privilegies: ['create-server'],
    startDate: new Date()
};
console.log(e1);
const addGeneric = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return a.toString() + b.toString();
};
console.log(addGeneric(2, 2));
console.log(addGeneric('2', '2'));
const showEmployeeInformation = (employee) => {
    console.log('Name: ' + employee.name);
    if ('privilegies' in employee) {
        console.log('Privilegies: ' + employee.privilegies);
    }
    else if ('startDate' in employee) {
        console.log('StartDate: ' + employee.startDate);
    }
};
showEmployeeInformation({ name: 'Manu', startDate: new Date() });
showEmployeeInformation({ name: 'Sofia', privilegies: ['create-server'] });
class Car1 {
    drive() {
        console.log('Driving...');
    }
}
class Truck1 {
    constructor(amount) {
        this.amount = amount;
    }
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo() {
        console.log('Load cargo ...' + this.amount);
    }
}
const useVehicle = (vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck1) {
        vehicle.loadCargo();
    }
};
useVehicle(new Car1());
useVehicle(new Truck1(1000));
const moveAnimal = (animal) => {
    let speed;
    switch (animal.kind) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
};
moveAnimal({ 'kind': 'bird', 'flyingSpeed': 50 });
moveAnimal({ 'kind': 'horse', 'runningSpeed': 100 });
let userInputElement = document.getElementById('user-input');
userInputElement.value = 'some value here';
;
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
function sumOperation(a, b) {
    if (typeof a === 'number' && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(sumOperation('2', '2'));
console.log(sumOperation('2', 2));
console.log(sumOperation(2, '2'));
console.log(sumOperation(2, 2));
const fetchedUserData = {
    id: 1,
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
let userInputData = '';
let x = userInputData || 'DEFAULT';
console.log(x);
userInputData = '';
x = userInputData !== null && userInputData !== void 0 ? userInputData : 'DEFAULT';
console.log(x);
//# sourceMappingURL=type-guards.js.map