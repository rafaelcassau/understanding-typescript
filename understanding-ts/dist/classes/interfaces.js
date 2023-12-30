"use strict";
class Person3 {
    constructor(name, outputName) {
        this.name = name;
        this.outputName = outputName;
    }
    greet() {
        console.log("Hi there - I'm " + this.name);
    }
    showOutputName() {
        if (this.outputName) {
            console.log('Sr. ' + this.outputName);
        }
        else {
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
//# sourceMappingURL=interfaces.js.map