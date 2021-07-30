//! No arrays in JS

let array = [1, 2, 3];


array[5] = 5;
array["4"] = 4
//! Below line not possible
// array.3 = 30
array[-1] = -1;
array["id"] = 1;
array.name = "Brendan1"
array[50] = 50
console.log(array)
for(let index = 0; index<array.length; index++)
    console.log(array[index]);