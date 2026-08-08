// Array  

const myArray = [1, 2, 3, 4, 5];
const array = ['what', 'is', 'your', 'problem?'];
const array2 = new Array(1, 2, 3, 4, 5,);
// console.log(myArray[0]);
// console.log(array);
// console.log(array2[4]);

// Array Method 

myArray.push(6);
myArray.push(7);
myArray.pop();

// myArray.unshift(9);
// myArray.shift();
// console.log(myArray.includes(9));
// console.log(myArray.includes(3));
// console.log(myArray.indexOf(21));
// console.log(myArray.indexOf(2));
// console.log(myArray);

// const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);

// slice , splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3);

console.log(myn1);
console.log("B ", myArray);


const myn2 = myArray.splice(1, 3);


console.log("C ", myArray);
console.log(myn2);
