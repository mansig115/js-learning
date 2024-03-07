//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);
//output-2_basics/array.js
//console.log(myArr[3]);

//Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()

// myArr.unshift(9)
//myArr.shift() //Removes the first element from an array and returns it if array is empty undefined is written
// console.log(myArr);

// console.log(myArr.includes(9));
//INCLUDES-Determines whether an array includes a certain element, returning true or false as appropriate.

// console.log(myArr.indexOf(3));

const newArr = myArr.join() //Adds all the elements of an array into a string
console.log(myArr);
console.log(typeof newArr);

// slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);



