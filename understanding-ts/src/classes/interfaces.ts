interface Named {
    readonly name: string
    // optional attribute, this can be part of class or interface
    outputName?: string
}


interface Greetable extends Named{
    greet(): void;

    // optional method, this can be part of class or interface
    showOutputName?(): void;
}


class Person3 implements Greetable {
    
    constructor(readonly name: string, public outputName?: string) {

    }

    greet(): void {
        console.log("Hi there - I'm " + this.name);
    }

    showOutputName(): void {
        if (this.outputName) {
            console.log('Sr. ' + this.outputName);
        } else {
            console.log('There is no outputName');
        }
    }
}


let p3 = new Person3('Rafael Stain Cassau');
p3.greet();
p3.showOutputName();

let p3_1 = new Person3('Rafael Stain Cassau', 'Rafa');
p3_1.greet();
p3_1.showOutputName();