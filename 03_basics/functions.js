// console.log("M");
// console.log("A");
// console.log("N");
// console.log("S");
// console.log("I");

function  sayMyName(){
    console.log("M");//function definition
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("I");

}

// sayMyName() this wont return anything its just a reference

//Add two numbers function

// function addTwoNumbers(num1, num2){ //as the num1 
//     console.log(num1+num2);
// }

// addTwoNumbers(5,6)
// addTwoNumbers(3, "a") // prints -3a
// addTwoNumbers(3, null) // prints only 3

//  const result =  addTwoNumbers(3,5)
//  console.log("Result", result); //op-Result undefined


function addTwoNumbers(num1, num2){ //as the num1 
//    return result
 return  num1 + num2
}

const result = addTwoNumbers(4, 8)
// console.log("mansi");// statements put before return will be working but if we any statement after return it will not return 
// console.log("Result: ", result);

//User has logged in so display a message

// function loginUserMessage(username){
//     return `${username} has just logged in`
// }

// loginUserMessage("Mansi") will not print anything
// console.log(loginUserMessage("Mansi"));

// console.log(loginUserMessage());//When not passed any value then the op comes as UNDEFINED

// function loginUserMessage(username) {
//     if(username === undefined)// if(!username){ 
//         console.log("Please Enter a username");
//         return
//     }
//     return `${username} has just logged in`

// }

// console.log(loginUserMessage());


function loginUserMessage(username = "manu") {
        if(!username){ 
            console.log("Please Enter a username");
            return
        }
        return `${username} has just logged in`
    
    }
    
    // console.log(loginUserMessage());
    console.log(loginUserMessage("mansi"));
