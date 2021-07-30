class Account {
    constructor(an, name, balance) {
        this.account_number = an;
        this.name = name;
        this.balance = balance
    }
}

class SavingAccount extends Account {
    constructor(an, name, balance, min_balance) {
        super(an, name, balance);
        this.minimumBalance = min_balance;
    }
}

const savingAccount = new SavingAccount(1, "Brendan", 1000, 500);
console.log(savingAccount);