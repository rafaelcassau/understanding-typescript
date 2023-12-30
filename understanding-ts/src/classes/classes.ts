class Department {
    private readonly id: number;
    name: string;
    protected employees: string[] = [];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    describe() {
        console.log('Department: ' + this.id, 'Name: ' + this.name);
    }

    addEmployee(employee: string) {
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


//Inherited class
class ITDepartment extends Department {
    admins: string[];

    constructor(id: number, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    addEmployee(employee: string): void {
        if (employee == 'Max') {
            return
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




// Defining class attributes directly in the constructor
class Book {

    constructor(
        private readonly id: number,
        public author: string
    ) {}

    describeBook() {
        console.log(this.id + ': ' + this.author);
    }
}

let b1 = new Book(1, 'Izac Azimov');
b1.describeBook();


// Getters and Setters
class Person {
    private name: string = '';

    get fullName() {
        let new_name: string = '';
        let current_names = this.name.split(' ');
        for (let w of current_names) {
            new_name += w[0].toUpperCase() + w.substring(1, w.length).toLowerCase() + ' ';
        }
        return new_name.substring(0, new_name.length - 1);
    }

    set fullName(name: string) {
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


// static methods and static attributes

class Car {    
    constructor(private name: string) {}

    describe() {
        console.log('Name: ' + this.name);
    }
}

class CarFactory {
    static brand = 'Testa';

    static create(name: string) {
        return new Car(name)
    }
}

let c1 = CarFactory.create('Cyber Truck');
c1.describe();
console.log(CarFactory.brand);


// abstract classes
abstract class Department2 {

    constructor(protected name: string) {

    }

    abstract describe(): void;
}


class ITDepartment2 extends Department2 {

    describe(): void {
        console.log('IT department: ' + this.name);
    }
}

let it_dep2 = new ITDepartment2('Infrastructure');
it_dep2.describe();


// singleton using private constructors

class DBConnection {
    private static instance: DBConnection;

    private constructor(private database_url: string) {

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