var Person = /** @class */ (function () {
    function Person(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jane");
console.log(person.getName());
