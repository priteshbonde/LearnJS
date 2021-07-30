'use strict'; //? Use strict does not allow developers to create a Global variable. 

//! 1: Object literals

var p = {
    id: 1,
    name: "John Doe",
    print: function() {
        console.log(`ID: ${this.id} Name: ${this.name}`);
    }
}

console.log(p);


//! 2: Constructor function

//> class Employee {  this is an invisible class which JS assume

    function Employee(id, name) {
        //? this will create Employee object and add two properties to it
        this.id = id;
        this.name = name;
    }

//> }

var a = new Employee(1 , "Lars Bak");
console.log(a);

//? Use strict wont allow below and will throw the error
//? This will create id and name in global namespace and its Dangerous
//! Employee(2, "James"); 
console.log("Done");




