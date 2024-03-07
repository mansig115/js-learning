const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Wonderwoman", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); 
// o/p-[
//    0- 'Thor',
//     1-'Ironman',
//     '2-Spiderman',
//    3- [ 1-'Superman', 2-'Wonderwoman', 3-'Batman' ]
//   ]
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))  //asks if given  Array is an Array
console.log(Array.from("Hitesh")) //Creates an array from an iterable object.
console.log(Array.from({name: "hitesh"})) // interesting gives[]


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //Returns a new array from a set of elements.