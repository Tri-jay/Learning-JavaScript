//Day 4
//Arrays


//Are just list of things and anything can go in the list

//Random shit time.......literally anything
[ 12, "Crystal", console, String.prototype, Number, {}, false ];

//Log it
console.log([ 12, "Crystal", console, String.prototype, Number, {}, false ] );

//We have a list but why is this useful?

//With list we can 'iterate' over them and go one by one over it

//A function that iterate over an array is .forEach()
//So lets make a list of roommates
//Just like how we did with .toFixed(2), we are going to use .forEach()
//except this time we will give a set of instructions known as a
//'function'. 'function's are defined by `function name(){}`
[ 
    "Sarge",
    "Papa",
    "Crystal",
    "Russell", 
    "Billy Bob", 
].forEach(function sayName( roommate, roommateId ){
    console.log( roommate, roommateId );
});

//Next what we will do is map the roommates to another value for each
//So we are going to make another array combining the Name and Id into
//one string
[ 
    "Sarge",
    "Papa",
    "Crystal",
    "Russell", 
    "Billy Bob", 
]
.map(function mapNmae( roommate, roommateId){
    //Whatever we return here will be what this item becomes
    //So we will get item with "Roommate RoommateId" in the end
    return roommate + " " + roommateId;
})
//A new array will be returned which we will .forEach() off the new 
//array. Like we did with the strings.
//"Sarges Ass".replace('ass', 'booty').toUpperCase();

//Here we will console.log each new item
.forEach(function sayNmae(roommate){
    console.log( roommate );
});

[ 
    "Sarge",
    "Papa",
    "Crystal",
    "Russell", 
    "Billy Bob", 
]
.map(function mapNmae( roommate, roommateId){
    //Here we will use the third quote mark ` this mark is used
    //for templating strings and you template using ${ }
    return  `Name: ${roommate}, Id: ${roommateId}`;
})
.forEach(function sayNmae(roommate){
    console.log( roommate );
});


//There are other things we can do with Arrays
//Lets list them out
//.forEach()
//.map()
//.filter()
//.sort()

console.log( Array.isArray( "Bob" ) ); //false--> just a string
console.log( Array.isArray( [ 12 ] ) );//true--> an array with a number in it
console.log( Array.isArray( [ "Bob" ] ) );//true--> an array with a string in it

//It can be anything
//Let put anither array in there To Do List
var todo = [ 
    [ "Dishes", "mop", "counter"], 
    ["Vaccum", "Dust"], 
    123, 
    [ "mop", "Counters", "mirror", "Bathtub" ], 
    "Baldi", 
]
//So lets .filter out to only Arrays
.filter(function(items){
    //Array is the Array contructor just like String, Number, and Boolean
    //On this object is this useful AF function isArray which proves
    //this is an Array
    return Array.isArray(items);
    //If we return true (Boolean) then it keeps it
    //If we return false it filters it out
})
//Because an array is returned we can .sort()
//Off of that just like the others i.e. '.filter()'
.sort(function( todoListA, todoListB){
    return todoListA.length > todoListB.length;
});

console.log(todo);

