//Day 5
// Objects

// Objects are AMAZING, we basically used them for everything
// It is a thing that holds attributes and value pairs.
// The attributes are called 'keys'.

// First object Ex.
var Crystal = {
    age: 25,
    name: 'Crystal "Grandma" Hunter',

    // Here we are going to put an array
    // Which we learned in day 4
    // Just a list of things
    children: [
        // And we are going to place another object
        {
            name: "Sarge",
            age: 5
        },
        {
            name: "Papa",
            age: 26
        }
    ]
};
console.log( Crystal );

// There is a migical part of objects that you don't get with other 'Type's.

// Objects are considered a reference in ram. 
// So if I mess with it ANTWHERE, everyone sees that change.
// So if we mess with it here, it will reflect in the console.log without
// needing to console it again.
Crystal.occupation = {
    name: "Taking over the world with animation",
    years: 76
};

// 'Array's are objects btw >:3
console.log( typeof [] );

// You can also put 'function's inside of objects.
// Like this
var Sarge = {
    speak: function(){
        console.log( "Bark!!!" );
    },
    kill (person){
        console.log( `killing ${person}` );
    },
};

Sarge.speak()
Sarge.kill( "his booty" );

// Ok so now that we understand 'Object' literals.
// Let's check out classical Objects
// Classical objects are like blueprints or 'prototype's
// When we have a human we don't want to rewrite that stuff OVER and OVER again.
// So we just a human prototype.

// So lets make our one 

// Old way

// This function is called the 'constructor'
// When you call "new Human()" you are calling this 'constructor' function to
// start everything for you
function Human(name, age, agressiveness){
    // Well what does this contructor do? In here we can define the entity.
    // This is how we 'constrcut' the object

    // 'this' is a keyword kinda like 'var'
    // it is a reference to this object as in 'this human'.
    this;

    // SO let construct this human with a name using the name passed in from
    // above becuase this is the constructor 'function' you can call it like
    // this 'new Human("Crystal")'
    this.name = name;
}

// This .prototype. is us adding to the blueprints
// Of the Human type, just like how we have Number, String, and Array types.
// i.e. Number.prototype
Human.prototype.speak = function(speech){
    console.log(speech);
}
Human.prototype.sayName = function(){
    console.log(this.name);
}

var Crystal = new Human("Crystal");
console.log(Crystal);

console.log( new Human("RuPaul") );

var RuPaul = new Human("RuPaul");
console.log(RuPaul);

RuPaul.sayName();

var Russell = new Human("Russell");
console.log(Russell);

Russell.sayName();

// New Way
class Parrot {
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
};

var Polly = new Parrot("Polly");
Polly.sayName();

var Pauly = new Parrot("Pauly");
Pauly.sayName();

// Homework Time
// Make a new 'class' that does something else but still uses the 'this' 
// keyword for something.

class animal {
    constructor(age){
        this.age = age
    }
    sayAge(){
        console.log(this.age);
    }
}; 

var Cat = new animal(100);
Cat.sayAge();