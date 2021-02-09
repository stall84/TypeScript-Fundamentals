// Exploring Decorators


function Logger(constructor: Function) {                     // Convention has Decorator functions use Pascal-case like classes
    console.log('Logging...');                              // Basic way of creating decorator function
    console.log(constructor);
}

function LoggerFactory(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: Function) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    }
}


// @Logger        
// @WithTemplate('<h2>Flerpnerdles</h2>', 'app')
// class Person {
//     name = 'Max';
//     constructor()  {
//         console.log('Creating person object...');
//     }
// }

// @LoggerFactory('Logging New')
// class NewPerson {
//     name = 'Michael';
    
//     constructor() {
//         console.log('Creating New Person Object')
//     }
// }




// const pers = new Person();

function Log(target: any, propertyName: string | symbol) {
    console.log('Property Decorator');
    console.log(target, propertyName);
}
function Log2(target: any, name: string, description: PropertyDescriptor) {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(description);
}
function Log3(target: any, name: string | symbol, description: PropertyDescriptor) {
    console.log('Method Decorator');
    console.log(target);
    console.log(name);
    console.log(description);
}
function Log4(target: any, name: string | symbol, position: number) {
    console.log('Parameter Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid Price, must be greater than 0')
        }
    }
    constructor( title: string, price: number) {
        this.title = title;
        this._price = price;
    }
    @Log3
    getPriceWithTax(@Log4 tax: number) {
       return this._price * (1 + tax); 
    }
}