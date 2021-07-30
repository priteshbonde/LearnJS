let array = [];
let element;

array[0]=1;

//! 2. Array like Linked list
array.push(4); //? Add to end
console.log(array);
array.push(10);
console.log(array);

//! 3. array like stack - push and pop(LIFO)
array.push(20); //? push at top of stack
console.log(array);
element = array.pop();
console.log("element", element);
console.log(array);

//! 4. arrays like Ques (FIFO)
element = array.shift();
console.log("Element", element);
console.log(array);


//! 5. [Dequeue] arrays like Double ended queue [DEQUEUE]
array.unshift(50)
console.log(array);
array.push(100);
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);