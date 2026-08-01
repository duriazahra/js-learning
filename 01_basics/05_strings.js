const name = "duria"
const learn = 11

// console.log(name + learn + " Value");

// console.log(`My name is ${name} and I am learning ${learn}`);
// use this syntax 


const yourName = new String ('Eman')

// console.log(yourName);

// console.log(yourName [0]);
// console.log(yourName.__proto__);
// console.log(yourName.length)
// console.log(yourName.toUpperCase());
// console.log(yourName.charAt(2));
// console.log(yourName.indexOf ('a'));

const newString = yourName.substring (0, 3)

// console.log(newString);

const anothherString = yourName.slice (-3 , 2)

// console.log(anothherString);

const oneString = "     what?    "
// console.log(oneString);

// console.log(oneString.trim ());

const url = "https://www.google.com/search%20coding"

console.log(url.replace('%20', '-'));
console.log(url.includes('google'))
console.log(url.includes('yahoo'))

const stringTwo = "sheema-is-pagal-also-insia"

console.log(stringTwo.split('-'));
