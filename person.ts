interface IPerson {
  name: string;
  age: number;
  occupation: string;
}

class Person implements IPerson {
  name: string;
  age: number;
  occupation: string;
  constructor(name: string, age: number, occupation: string) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  logPerson() {
    console.log(` - ${this.name}, ${this.age}`);
  }
}

const people: IPerson[] = [
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

function logPerson(person: IPerson) {
  console.log(` - ${person.name}, ${person.age}`);
}

console.log(people);
people.forEach((person: IPerson) => {
  let newPerson = new Person(person.name, person.age, person.occupation);
  newPerson.logPerson();
});

console.log("honk honk");
