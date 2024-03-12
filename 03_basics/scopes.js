// var c = 300

// let a = 300
// const b = 30 
// var c = 300
 
let a = 300 //Global Scope
if(true){//Block Scope
    let a = 300 //not defined
    const b = 30  //not available
    // var c = 300

    console.log("INNER Scope: ", a);
}

for(let i = 0; i < array.length; i++){
    const element = array[i];
}
//Remember that Global Scope is different in console in browser and in node
console.log(a);
// console.log(b);
// console.log(c);
