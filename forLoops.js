let array = [1, 2, 3];
array[6] = 7;
array["concat"] = 1;
//? C style for loop
for(let index=0; index<array.length; index++)
    console.log(array[index]);


//? For-in (in -> INdex)

console.log("For In")
for(let index in array)
console.log(index, array[index] )

//? For-of (of -> value OF)
console.log("for of");
for(let value of array)
    console.log(value)


//? What For Loops does