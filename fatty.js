
//? This is a normal function which creates a all the nested object
function sqr(x) {
    return x * x;
}


//? This is how lambda/Fat arrow function is written

var sqr = (x) => { return x * x }

//? Fat arrow can also be written as follows

var sqr = (x) => x * x

//? Fat arrow can also be written as follows

var sqr = x => x * x;


console.log(sqr(5));