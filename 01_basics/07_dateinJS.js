let date = new Date ()

// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());

// let myDate = new Date (2006, 1, 21)
// let myDate = new Date (2006, 1, 21, 3, 6)
// let myDate = new Date ("02-21-2006")
let myDate = new Date ("2006-02-21")

// console.log(myDate);
// console.log(myDate.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let anotherDate = new Date ()

// console.log(anotherDate);
// console.log(anotherDate.getDate());
// console.log(anotherDate.getMonth() + 1);
// console.log(anotherDate.getDay());

console.log(
 anotherDate.toLocaleString('default', {
    weekday: "long",
    timeStyle: "full"
})
);