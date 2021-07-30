const array = [1, 2, 3, 4, 5, 6];
array[6] = 7;
console.log("Print Updated array", array);

function method(value) {
    console.log(value);
}
console.log("Printing Method")
array.forEach(method);

console.log("Print forEach with function");
array.forEach(function(value){console.log(value)})

console.log("Print ForEach Arrow function");
array.forEach((value) => {console.log(value)});
array.forEach(value => console.log(value));
array.forEach(console.log);

console.log("Print Foreach with three params");
array.forEach((value, index, array) => console.log(index, "=>", value))

