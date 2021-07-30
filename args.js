function addArgsFunction() {
    var c = arguments[0] + arguments[1];
    return c;
}


console.log(addArgsFunction(10, 5))


var addArgsFat = (a , b) => {
    console.log("Arguments", arguments)
    console.log(this)
    return a + b;
}

console.log(addArgsFat(10, 20))