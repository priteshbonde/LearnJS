//! 1. Object Literal
const obj = {
    id: 1, 
    name: "Brendan",
    print() { //? methods
        console.log(this.id, this.name);
    }
};

//! 2. constructor function

function Person(id, name) {
    this.id = id;
    this.name = name;
}

Person.prototype.print = function() {
    console.log(this.id, this.name);
}

//! 3. Class

class Employee {
    constructor(id, name) {
        this.id= id;
        this.name = name;
    }

    print() {
        console.log(this.id, this.name);
    }
}

//! 4. new Object (Please avoid this)




//! 5. Object.create

const bigB = {firstName: "Amitabh", lastName:"Bachchan"}
console.log(bigB);
const smallB = Object.create(bigB); //* Inheritance
smallB.firstName = "Abhishek"
console.log(smallB);
const bayB = Object.create(smallB);
bayB.firstName = "Aradhya";
console.log(bayB.firstName, bayB.lastName);