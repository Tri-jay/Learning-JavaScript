//Day 1
// I am a comment
//Nothing next to these '//' slashes
// Will be run at all

// functions
// are defined actions we can run
// and get run or 'called' by using '()'
// Calling our first function Ex.
console.log("The Witcher");

// types
// There are many types and they keep growing 
// you can even make your own type
// but right now we will only use the 'primitive' types

// number
12;
12.02;

// string- words
"word";

// array- list of things
[12, "word"];

// object- data sheet/ dataset has 'keys' and 'values'
// i.e.
// CrystalDataSet
//-name: "Crystal"
//-age: 67
var CrystalDataSet = {
    name: "Crystal",
    age: 67,
};

// function- the first thing we used here
// Now we make our own

// add(...arguments)
//arguments are the things you give to do its task
function add(num1, num2){
    // return- what we use to 'return'
    // values at the end of the task
    // if nothing is returned, then nothing is returned
    return num1 + num2;
}

//now lets call that function
add(10, 2);

// Cool so the function got called
// Everything did it's job
// But we don't see anything

// In order for us the 'programmer'
//We need to log it to the console with `console.log()`
console.log ( add(10, 2) );


// So what is that '.' in the 'console.log'?
// 'Console' is an 'object' like mentioned earlier
console.log( console );

// So after looking at it
// 'console'is an object with 'functions' in it
// Lets do that next
var dog = {
    bark: function(){
        console.log('WOOF');
    }
};


// Now lets call it Like we do 'console.log'
dog.bark();