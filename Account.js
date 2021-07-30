//~ This is the class
class Account{
    //? These are the properties # makes these properties private and cant be accessed outside class
    #accountNumber = 0;
    #name = "";
    #balance = 0;

    //? Constructor
    constructor(accountNumber, name, balance) {
        this.#accountNumber = accountNumber;
        this.#name = name;
        this.#balance = balance;
    }

    //? We can access the arguments as arguments[0] here
    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    print() {
        console.log(`Account Number ${this.#accountNumber} User ${this.#name} has balance ${this.#balance}`);
    }
}


const account = new Account(1, 'John', 10000000);
account.print();
account.deposit(50000);

//! Below line will throw the error as balance is the private field
// account.#balance = 2000;
console.log("Post deposit");
account.print()