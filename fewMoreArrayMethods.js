const array = [5, 7, 1];

const result = array.find(t => t == 7);
console.log({result})

const transactions = [
{txnNo: 1 , application: "Amazon", amount: 300},
{txnNo: 2 , application: "Swiggy", amount: 350},
{txnNo: 3 , application: "Myntra", amount: 1000},

];


const filteredTransactions = transactions.filter(t=> t.amount >= 350);
console.log(filteredTransactions);

const languages = ["C", "C++", "Java", "C#", "Python"];

const mapLanguageLength = languages.map(t=> t.length);
console.log({languagesLength: mapLanguageLength});

console.log("Creating an Object array from Languages array");
const mapObjectArray = languages.map((value, index)=> {return {serialNo: index+1, Name: value, stringLen: value.length}});
console.log({ObjectArray: mapObjectArray});


console.log("Calling a function in MAP");

const mapfunction = (value, index) => {return {serialNum: index+1, Names: value}}


const mapFunctionCall = languages.map(mapfunction);
console.log({mapFunctioncall: mapFunctionCall});

