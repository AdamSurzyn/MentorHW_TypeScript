var Person = /** @class */ (function () {
    function Person(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    Person.prototype.logPerson = function () {
        console.log(" - ".concat(this.name, ", ").concat(this.age));
    };
    return Person;
}());
var people = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Scientist",
    },
    {
        name: "Kate Muller",
        age: 23,
        occupation: "Astronaut",
    },
];
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age));
}
console.log(people);
people.forEach(function (person) {
    var newPerson = new Person(person.name, person.age, person.occupation);
    newPerson.logPerson();
});
console.log("honk honk");
