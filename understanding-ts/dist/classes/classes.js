"use strict";
class Department {
    constructor(id, name) {
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log('Department: ' + this.id, 'Name: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department(1, 'Accouning');
accounting.addEmployee('Rafael Cassau');
accounting.addEmployee('Caroline Cassau');
accounting.describe();
accounting.printEmployeeInformation();
console.log(accounting);
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    addEmployee(employee) {
        if (employee == 'Max') {
            return;
        }
        this.employees.push(employee);
    }
}
let itDep1 = new ITDepartment(2, ['Max']);
itDep1.addEmployee('Rafael Cassau');
itDep1.addEmployee('Max');
itDep1.describe();
itDep1.printEmployeeInformation();
console.log(itDep1);
class Book {
    constructor(id, author) {
        this.id = id;
        this.author = author;
    }
    describeBook() {
        console.log(this.id + ': ' + this.author);
    }
}
let b1 = new Book(1, 'Izac Azimov');
b1.describeBook();
class Person {
    constructor() {
        this.name = '';
    }
    get fullName() {
        let new_name = '';
        let current_names = this.name.split(' ');
        for (let w of current_names) {
            new_name += w[0].toUpperCase() + w.substring(1, w.length).toLowerCase() + ' ';
        }
        return new_name.substring(0, new_name.length - 1);
    }
    set fullName(name) {
        if (!name) {
            throw Error('Please provide a valid name!');
        }
        this.name = name;
    }
}
let p1 = new Person();
p1.fullName = 'rafael stain cassau';
console.log(p1.fullName);
let p2 = new Person();
p1.fullName = 'CAROLINE ROCHA DOS SANTOS CASSAU';
console.log(p1.fullName);
class Car {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log('Name: ' + this.name);
    }
}
class CarFactory {
    static create(name) {
        return new Car(name);
    }
}
CarFactory.brand = 'Testa';
let c1 = CarFactory.create('Cyber Truck');
c1.describe();
console.log(CarFactory.brand);
class Department2 {
    constructor(name) {
        this.name = name;
    }
}
class ITDepartment2 extends Department2 {
    describe() {
        console.log('IT department: ' + this.name);
    }
}
let it_dep2 = new ITDepartment2('Infrastructure');
it_dep2.describe();
class DBConnection {
    constructor(database_url) {
        this.database_url = database_url;
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new DBConnection('postgres:username:password@host');
        }
        return this.instance;
    }
    toString() {
        return this.database_url;
    }
}
let db1 = DBConnection.getInstance();
let db2 = DBConnection.getInstance();
console.log(db1, db2);
//# sourceMappingURL=classes.js.map