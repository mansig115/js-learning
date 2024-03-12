// var c = 300

// let a = 300
// const b = 30 
// var c = 300
 
let a = 300 //Global Scope
if(true){//Block Scope
    let a = 300 //not defined
    const b = 30  //not available
    // var c = 300

    // console.log("INNER Scope: ", a);
}

// for(let i = 0; i < array.length; i++){
//     const element = array[i];
// }
//Remember that Global Scope is different in console in browser and in node
// console.log(a);
// console.log(b);
// console.log(c);


//Scope Level and Mini Hoisting

//Nested function scope
function one(){
    const username = "mansi"

    function two(){
        const wewbsite = "linedin"
        // console.log(username);
    }
    // console.log(website);// this cannot be executed as its scope is finished 
  two()
}
// one()

//Here parents scope cannot access values of child

if(true){
    const username  = "mansi"
    if(username === "mansi"){
        const website = " linkedin"
        // console.log(username + website);
    }

    // console.log(website);
}
// console.log(username);



//++++++++++++++++++++++ interesting ++++++++++++++

//Function hoisting- function declare , function exection??
//Function declaration in addone is exexcuted butu not in addTwo
console.log(addone(5));
function addone(num){
    return num + 1

}

// addone(5)
console.log(addTwo(5));
const addTwo =  function(num){
    return num + 2
}

