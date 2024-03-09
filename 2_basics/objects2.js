// const tinderUser = new Object() 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mansi",
            lastname: "Gautam"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {4: "a", 6: "b"}

// const obj4 = {obj1, obj2, obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4  ={ ...obj1, ...obj2, ...obj3}
// console.log(obj4);

 const users = [ //array of objects
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id:3,
        email: "g@gmail.com"
    },

 ]

 users[1].email
//  console.log(tinderUser);
 //o/p-{ id: '123abc', name: 'Sammy', isLoggedIn: false }

//  console.log(Object.keys(tinderUser));
 // op-[ 'id', 'name', 'isLoggedIn' ]

//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser)); //op- [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));


 //Destructring array means-

 const course = {
    coursename: "js in hindi",
    price: "999" ,
    courseInstructor: "mansi"
 }

//  course.courseInstructor
// const {courseInstructor} = course //if you think that the nane is quite big for instructor the yo can also write courseInstructor: instrctor
const {courseInstructor: instructor} = course 
// console.log(courseInstructor);
console.log(instructor);

// const navbar = (props.company) => {
  //destructoring
// }

// {
   //JSON

//     "name": "mansi",
//     "coursename" : "js learning",
//     "price" : "free"

// }





