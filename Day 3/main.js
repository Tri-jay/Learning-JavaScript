//Day 3
//Strings

//Strings are like words 
//We can have things like 
'13 feet'
//Yes there is a number in there buts it's 
//something someone said.
//We aren't using it to add anything

//Computers don't really speak human lauguage
//We kind of have to make things up.
//So a 'string' is known as an 'array' of characters/'Character Array'
//i.e. so this string is 
//1, 3, , f, e, e, t <---Chars
//0, 1, 2, 3, 4, 5, 6 <---indexes
//It is 7 characters long

//So let's get the number 3 out of the string
console.log( "'13 feet'[1] =", '13 feet'[1]);


//Tere are 3 kinds of quote marks
//"", '', ``
console.log( "13 feet" );
console.log( '13 feet' );
console.log( `13 feet` );
// They all work to log '13 feet'

//So we canuse the different quote marks to our needs.
//Because the quote marks, mark the start and the end
//It can get difficult with things like
//"Sarge's food" <--- We are using both kinds here
//or  'she said "IDK"'
console.log( "Sarge's food" );
console.log( 'She said "Bunnies"' );

//Sometimes we have things like this
//She said "That's Sarges Ice cream"
//In this case we would use an 'escape' character
//It is called escape because it escapes the string
//in order to do something
//The 'escape' character is `\`
console.log( 'She said "That\'s Sarges Ice cream"' );

//But wait...What if we want a `\` in the string?
//Put 2 of them, because it will escape it, mwhahahaa
console.log( '\\' );
console.log(' Butty\\' ); //<--- me playing around

//Now like how we looked at the 'prototype' of 'Number'
//Lets look at tghe 'prototype' of 'String'
console.log( String.prototype );


//One of the things we can see is '.toUpperCase()' so lets try that
console.log( "Sarge has a fat ass".toUpperCase() );
//It put everything in all caps :))

//ANOTHER....*cough* >.> Thor
console.log( "Sarge has a fat ass".replace( "ass", "budunky dunk") );

//Soo.. since it returns a string you can call these
//'.<function>()' off of ANY string
//So let's try chaining them
console.log(
    "Sarge has a fat ass"
        .replace( "ass", "booty" )
        .toUpperCase()
);

//So lets go back to the ideas of 'array'
"Papa dangerous to the ice cream king";
//Its 36 characters
//We can get the length with '.length'
console.log( "Papa dangerous to the ice cream king".length );

//Now to see it in 'array' form with '.split()'
console.log( "Papa dangerous to the ice cream king".split('') );

//So lets turn it into an array of words by splitting by the
//by the space ' '
console.log( "Papa dangerous to the ice cream king".split(' ') );
//Space was added between the '' --> ' 'XD

// So lets get the 3rd word from the words
console.log( "Papa dangerous to the ice cream king".split(' ')[2] );
console.log( "Papa dangerous to the ice cream king".split(' ')[1] );

//OK cool but what if we wanted to 'add' to a 'string'?
var Crystal = { name: 'Crystal "Hot Ass Mess" Hunter'};
console.log( "Her name is " + Crystal.name + " pay some respect" );
// There should only be a space at the (is) and the (pay)
//If you don't do that this will be the answer
//i.e. console.log( "Her name -->is"<-- + Crystal.name + -->"pay <-- some respect" );
//Her name isCrystal "Hot Ass Mess" Hunterpay some respect

var DogsName = "Jet";
console.log( "His name is " + DogsName + " cute doggy" );


console.log( DogsName + " drank from the toilet XD".toUpperCase() );
console.log( "Sarge drank from the toilet XD"
    .replace( "toilet", "toilet of our flat earth")
    .replace( "Sarge", DogsName)
    .toUpperCase() 
);