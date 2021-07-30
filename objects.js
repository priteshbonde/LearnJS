var person = {
    id: 1,
    name: "John Doe",

    print: function() {
        console.log("I am person object");
    }
};

console.log(person.id, person.name);
console.log("person[id]", person["id"]);
console.log(person["id"] === person.id);

person[1] = 10;
console.log(person[1]);

person.print();



