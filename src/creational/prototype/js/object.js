const personPrototype = {
  firstName: "Nycolas",
  lastName: "Santana",
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());

anotherPerson.firstName = "Outro Nome";
console.log(anotherPerson);
console.log(anotherPerson.firstName);
