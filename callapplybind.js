
const person = {
    id: 1,
    print : function() {
        console.log(`ID is ${this.id}`)
    }
}

//? "Call - site"
person.print();

const ref = person.print; //! Forgets the Person object just remember the print function
console.log({ref});
ref();

const correctRef = person.print.bind(person);

correctRef();