// class Person {
//   name = "Max";

//   constructor() {
//     this.age = 30;
//   }

//   greet() {
//     console.log(`Hello, i am ${this.name} and i am ${this.age} years old`);
//   }
// }


// function Person() {
//     this.age = 30;
//     this.name = "Max";
//     this.greet = function () {
//         console.log(`Hello, i am ${this.name} and i am ${this.age} years old`);
//     }
// }

// Person.prototype = {
//     printAge() {
//         console.log(this.age)
//     }
// }

// const person = new Person();
// person.greet();

// console.log(person.toString()) // toString is in Person class protoype chain
// console.dir(person) // notice the "__proto__" property?
// console.log(person.__proto__) //base object for all user defined objects

// console.dir(Person) // has properties + has a "prototype" alongside "__proto__"
// console.log(Person.prototype === person.__proto__) //they are the same!
// console.log(Person.__proto__ === person.__proto__) //not the same, different fallbacks!


// console.log(person.printAge()) // prints age from constructor prototype addition
// console.log(person.__proto__) // this shows that the Person prototype was changed!



const course = {
    title: "javaScript - The Complete Guide",
    rating: 5
}

console.log(Object.getPrototypeOf(course) === Object.prototype); //gets the base object prototype

Object.setPrototypeOf(course, {
    // add ...Obect.getPrototypeOf(course), to keep previous prototype!!! 
    printRating: function() {
        console.log(`${this.rating}/5`);
    }
}); //overrides any object prototype

course.printRating();
console.log(Object.getPrototypeOf(course) === Object.prototype); //not the same anymore



