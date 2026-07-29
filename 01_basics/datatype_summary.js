// Primitive datatype (call by value)

// 7 types: String, Number, Boolean, null, undefined,  Symbol, BigInt

const score = 100
const scoreValue = 100.8

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 36493789789789n


// Reference type (Non primitive)

// Array, Objects, Functions

const heros = ["batman", "superman", "hulk"]

let obj = {
    name: "duria",
    age: "20"
}

let myFunction = function(){
console.log("Hello World.");

}

// console.log(typeof bigNumber);
// console.log(typeof null)
// console.log(typeof score)

// console.log(typeof myFunction);
// console.log(typeof heros)
// console.log(typeof obj);

