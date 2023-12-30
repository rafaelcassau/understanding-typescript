"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
function LoggerV2(log_message) {
    return function (constructor) {
        console.log(log_message);
        console.log(constructor);
    };
}
function RenderWithTemplate(template, hookId) {
    return function (constructor) {
        let p4 = new constructor();
        let element = document.getElementById(hookId);
        if (element) {
            element.innerHTML = template;
            element.querySelector('h1').textContent = p4.name;
        }
    };
}
let Person4 = class Person4 {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object ...');
    }
};
Person4 = __decorate([
    RenderWithTemplate('<h1></h1>', 'my-decorator-div-id')
], Person4);
const p = new Person4();
console.log(p);
//# sourceMappingURL=app.js.map