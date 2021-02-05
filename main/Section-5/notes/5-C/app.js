"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        if (name) {
            this.name = name; // Since we changed our properties
        }
        else if (age) { // around to optional. Check for 
            this.age = age; // truthiness in constructor
        }
    }
    Person.prototype.greet = function (nickname) {
        console.log('Hello ' + this.name + ' ' + 'You frikin' + ' ' + nickname);
    };
    return Person;
}());
var michael = new Person('Michael Stallings', 36);
michael.greet('Badass!');
var add;
add = function (n1, n2) {
    return n1 + 4;
};
console.log(add(5));
var intAdd;
intAdd = function (int1, int2) {
    return int1 + int2;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFTQTtJQUlJLGdCQUFhLElBQVksRUFBRSxHQUFXO1FBQ2xDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBRyxrQ0FBa0M7U0FDekQ7YUFBTSxJQUFJLEdBQUcsRUFBRSxFQUFRLGlDQUFpQztZQUNyRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFLLDRCQUE0QjtTQUNuRDtJQUNMLENBQUM7SUFDRCxzQkFBSyxHQUFMLFVBQU0sUUFBZ0I7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsWUFBWSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRUwsYUFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBRUQsSUFBTSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFcEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQVF6QixJQUFJLEdBQVUsQ0FBQztBQUVmLEdBQUcsR0FBRyxVQUFDLEVBQVUsRUFBRSxFQUFXO0lBQzFCLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUE7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBT3BCLElBQUksTUFBZ0IsQ0FBQztBQUVyQixNQUFNLEdBQUcsVUFBQyxJQUFZLEVBQUUsSUFBWTtJQUNoQyxPQUFPLElBQUksR0FBRyxJQUFJLENBQUM7QUFDdkIsQ0FBQyxDQUFBIn0=