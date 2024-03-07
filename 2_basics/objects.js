//singleton

//object literal
const mySym = Symbol("key1")

const JsUser = {
    name: "Mansi",
    "full name": "Mansi Gautam ",
    [mySym]: "mykey1",
    age: 24,
    location: "Lucknow",
    email: "mansi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email); 
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "mansi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "mansi@microsoft.com"
// output-{
//     name: 'Mansi',
//     'full name': 'Mansi Gautam ',
//     age: 24,
//     location: 'Lucknow',
//     email: 'mansi@chatgpt.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");

}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

    
    
    
    
    
    