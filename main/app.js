"use strict";
// Exploring Decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(constructor) {
    console.log('Logging...'); // Basic way of creating decorator function
    console.log(constructor);
}
function LoggerFactory(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
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
function Log(target, propertyName) {
    console.log('Property Decorator');
    console.log(target, propertyName);
}
function Log2(target, name, description) {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(description);
}
function Log3(target, name, description) {
    console.log('Method Decorator');
    console.log(target);
    console.log(name);
    console.log(description);
}
function Log4(target, name, position) {
    console.log('Parameter Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid Price, must be greater than 0');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBdUI7Ozs7Ozs7Ozs7QUFHdkIsU0FBUyxNQUFNLENBQUMsV0FBcUI7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUE4QiwyQ0FBMkM7SUFDbkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsU0FBaUI7SUFDcEMsT0FBTyxVQUFTLFdBQXFCO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUE7QUFDTCxDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsUUFBZ0IsRUFBRSxNQUFjO0lBQ2xELE9BQU8sVUFBUyxXQUFxQjtRQUNqQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDL0I7SUFDTCxDQUFDLENBQUE7QUFDTCxDQUFDO0FBR0Qsa0JBQWtCO0FBQ2xCLGdEQUFnRDtBQUNoRCxpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLHVCQUF1QjtBQUN2QixvREFBb0Q7QUFDcEQsUUFBUTtBQUNSLElBQUk7QUFFSixnQ0FBZ0M7QUFDaEMsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUV4QixzQkFBc0I7QUFDdEIsb0RBQW9EO0FBQ3BELFFBQVE7QUFDUixJQUFJO0FBS0osNkJBQTZCO0FBRTdCLFNBQVMsR0FBRyxDQUFDLE1BQVcsRUFBRSxZQUE2QjtJQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUNELFNBQVMsSUFBSSxDQUFDLE1BQVcsRUFBRSxJQUFZLEVBQUUsV0FBK0I7SUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFDRCxTQUFTLElBQUksQ0FBQyxNQUFXLEVBQUUsSUFBcUIsRUFBRSxXQUErQjtJQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUNELFNBQVMsSUFBSSxDQUFDLE1BQVcsRUFBRSxJQUFxQixFQUFFLFFBQWdCO0lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBQ0QsTUFBTSxPQUFPO0lBWVQsWUFBYSxLQUFhLEVBQUUsS0FBYTtRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBVkQsSUFBSSxLQUFLLENBQUMsR0FBVztRQUNqQixJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUNyQjthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFBO1NBQzNEO0lBQ0wsQ0FBQztJQU1ELGVBQWUsQ0FBTyxHQUFXO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0o7QUFmRztJQURDLElBQUk7b0NBT0o7QUFNRDtJQURDLElBQUk7SUFDWSxXQUFBLElBQUksQ0FBQTs4Q0FFcEIifQ==