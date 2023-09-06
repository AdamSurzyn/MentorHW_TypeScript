"use strict";
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    logPerson() {
        console.log(` - ${this.name}, ${this.age}`);
    }
}
const people = [
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
    console.log(` - ${person.name}, ${person.age}`);
}
console.log(people);
people.forEach((person) => {
    let newPerson = new Person(person.name, person.age, person.occupation);
    newPerson.logPerson();
});
