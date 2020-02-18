function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let newPerson = new Person("Berkay", 21, "Male");

Object.defineProperty(newPerson, "city", {
  value: "Ankara",
  writable: true,
  enumerable: true,
  configurable: true
});

console.log("City: " + newPerson.city);

Object.defineProperty(newPerson, "dateOfBirth", {
  value: 1998,
  enumerable: true
});

console.log("Date of Birth: " + newPerson.dateOfBirth);

Object.defineProperties(newPerson, {
  salary: {
    value: 5000,
    writable: true,
    enumerable: true
  },
  job: {
    value: "Student",
    writable: false,
    enumerable: true
  }
});

Person.prototype.toString = function() {
  return this.name + " is " + this.age + " years old ";
};

console.log(newPerson);
console.log(newPerson.toString());
