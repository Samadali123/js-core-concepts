
console.log("Hello World")
var x
// x= 5;
// x is hoisted because its declaraction is gone above at the top thats why it comes undefined not as not defined
// this is hoisting
// console.log("value of x is"+x)
var x1
var x1
// var is confusing thats why var is not used in the industries now
let y
let z
// console.log(x1, y, x)
x1 = 43;
y = 34;
z = "hfsdfdfhdh" // variables are dynamically types so that we can assign any type of value to it
// console.log(x1, y, z)
// console.table(typeof(x1))

// challenges of the var variables
// 1: var can be redeclated
// 2: hoisted
// 3: fucntional scope

// advantages
// can be used before initialization




function cook(){
    console.log(ingredient) // cannot use before declaraction
    let ingredient = "tomato"
    console.log(ingredient)
}

// cook();

//let cannot be resued before declaraction



var name = "Syed"
name = "Syed Samad Ali" // reassign
console.log(name)

var name2 = "samad"
var name2 = "dsdsf"
console.log(name2)


const height = 5.5
height = 6.4 // cannot reassign or update the constant vairables
console.log(height)



// process and thread 
//process is active program which runs on a devices is called a process
//eg music player runs its a process, each process has multiples processes and each process having their own cpu and memoroiy to execute

// process :  Each consists of work
// thread : workers who do work in a process
// single process have multiple threads(workers)

// each process having a seperate cpu own and multiple threads to run
// Js is a single threaded but still works fast just because of asynchronous processing
// async processing is done by event loop and callback ques
// we dont waits untils the process complete we do another tasks till that time at side stacks

// event loop is a mechanism that allows a single thread to handle multiple tasks concurrently
// it is a loop that continuously checks for events and executes the corresponding callback functions
// it is a mechanism that allows a single thread to handle multiple tasks concurrently



// Two types of processing in Js
// 1: blocking // synchronous processing
// 2: non-blocking // asynchronous processing



console.log("hello form line 1")
console.log("hello from line 2")
console.log("hello from line 3")




// async processing

console.log("hello world")

setTimeout(function(){
    console.log("Inside the settimeout code ")
}, 4000)


console.log("Processssingggg")




// fucntions
function printHello(){
 return "Helllooooooo"
} 

const ans = printHello();
console.log(ans)



console.log("first line")

function cb(){
    console.log("Hello from the cb function")
}
setTimeout(cb, 2000)   // callback fucntions runs when work done that calls when 
console.log("Last lineeeee")



// Promises in Js
// Promises are like real world promises like we do promise either  its a event that gonna be fullfilled or rejected

// promises has 3 states :
// pending
// fulfilled
// rejected


const simranPromise = new Promise((resolve, reject)=>{
 const dadAgreed = true

    setTimeout(function(){
      if(dadAgreed){
        resolve("Dad man gye !>.......")
      }
      else{
        reject("Dad nhi mane reject krdiya....!")
      }
    }, 2000)
})


simranPromise.then(function(data){
    console.log(data)
}).catch(function(message){
    console.info(message)
})


// Promises chain when one promises inside another promise

// classes and object
// classes is a print type blue print of an object amd obnject is instance of the class


class Person{
       constructor(name ,age){
            this.name =  name;
            this.age =age
       }
}

const samad = new Person("Samad", 21)
console.log(samad)


function Person(name,age){
        this.name = name;
        this.age = age

}

const Tahoor = new Person("tahoor", 21);
console.log(Tahoor.name, Tahoor.age)


// oops concept
// abstraction  : hide unnesceesary data and show only necessary information
// encapsulation : wrapping of data used to make provate variables and data show some public methods for controllled access
// inheritance : inherits properties and methods from parent class to child class
// polymorphism : ability of an object to take many forms  like function overloading and method overriding


// // Abstraction
class BankAccount{
    #balance;
    constructor(initialBalance){
         this.#balance =  initialBalance;

    }
    getBalance(){
        return this.#balance;
    }

    deposit(amount){
         return  this.#balance += amount;
    }

    withdraw(amount){
      if(amount > this.#balance){
          console.warn("Insufficient Balance")
      }else{
        return this.#balance -= amount;
      }
    }

}


let account = new BankAccount(1000);
console.log(account.getBalance());
account.deposit(500);
console.log("After deposit "+account.getBalance());
account.withdraw(50000);
console.log("After withdrawl"+account.getBalance());




//Encapsulation

class  Person{
    #name // private Variable
    #age // private variable

    constructor(name, age){
        this.#name = name;
        this.#age = age;
    };

    getName(){
        return this.#name;
    }

    setName(name){
        this.#name = name;
        return this.#name;
    }
   
}


const Samad = new Person("Samad", 21);
console.log(Samad.getName())
console.log(Samad.setName("Syed Samad Ali"))




// Inheritance 
class Animal{
         constructor(name){
            this.name = name;
         }
         eat(name){
            return  `${name} Eating`
         }

         walk(name){
            return `${name} Walking`
         }
}

class Dog extends Animal{
        constructor(name, breed){
            super(name); // The super keyword is used to call the constructor of the parent class (Animal) to initialize the inherited properties.
            this.breed = breed;
        }
        bark(){
               return `${this.name} is barking and their breed is ${this.breed}`
        }
}

// const  doberman = new Dog("doberman", "German");
console.log(doberman.bark())
console.log(doberman.eat("doberman"))
console.log(doberman.walk("doberman"))




// polymorphism : method overloading and method overriding


// Method Overriding Example
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
    
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    // Method overriding - same method name as parent, different implementation
    makeSound() {
        console.log("Woof! Woof!");
    }
    
    eat() {
        super.eat(); // Calling parent method
        console.log("Dog is eating bones");
    }
}

const myDog = new Dog();
myDog.makeSound(); // Outputs: "Woof! Woof!"
myDog.eat(); // Outputs: "Animal is eating" followed by "Dog is eating bones"

// Method Overloading Simulation Example
class Calculator {
    add(...args) {
        // Check number of arguments to simulate overloading
        if (args.length === 0) {
            return 0;
        }
        
        if (args.length === 1) {
            return args[0];
        }
        
        // If multiple arguments, sum them all
        return args.reduce((sum, current) => sum + current, 0);
    }
}

const calc = new Calculator();
console.log(calc.add());          // Outputs: 0
console.log(calc.add(5));         // Outputs: 5
console.log(calc.add(1, 2));      // Outputs: 3
console.log(calc.add(1, 2, 3, 4)); // Outputs: 10



















