const array = [1, 5, 11, 29, 31];

const arraySum = array.reduce((lhs, element) => lhs + element);
//?                             1 , 5 = 6
//?                             6 , 11 = 17
//?                             17 , 29 = 46
//?                             46 , 31 = 77
//? Hence result 77


console.log(arraySum);


const arrayDefault = array.reduce((lhs, value) => lhs + value, 5);
console.log(arrayDefault);


const transactions = [
    {txnNo: 1 , application: "Amazon", amount: 300},
    {txnNo: 2 , application: "Swiggy", amount: 350},
    {txnNo: 3 , application: "Myntra", amount: 1000},
    
];

const total = transactions.filter(t=> t.amount >= 350)
.map(t=> {return {txnNo: t.txnNo, amount: t.amount+200}})
.reduce((sum, element) => sum + element.amount, 0);

console.log(total);

const languages = ["C", "C++", "Java", "C#", "Python"];
console.log({JoinedLanguages: languages.join(", ")});
