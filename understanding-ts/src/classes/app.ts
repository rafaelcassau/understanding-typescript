// simple decorator function
// it is only executed in the class definition type not in runtime
function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}


// factory decorators
function LoggerV2(log_message: string) {
    return function(constructor: Function) {
        console.log(log_message);
        console.log(constructor);
    }
}


function RenderWithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        let p4 = new constructor();
        let element = document.getElementById(hookId);
        if (element) {
            element.innerHTML = template;
            element.querySelector('h1')!.textContent = p4.name;
        }
    }
}


// @Logger
// @LoggerV2("PERSON4 - ")
@RenderWithTemplate('<h1></h1>', 'my-decorator-div-id')
class Person4 {
    name = 'Max';

    constructor() {
        console.log('Creating person object ...');
    }
}

const p = new Person4();
console.log(p);