//Day 2
//Alegbra

//Lets write an equation in algebur
// a+ 2 = 5;
//What do we call 'a' in algebur?
//variable duh XD
//Same in Javascipt
//'var' stands for variables
var a = 3;

//'a' is defined now lets log the original equation.
console.log( 'a =', a );
console.log( 'a + 2 =', a + 2 );

//Going in depth with 'Numbers'
//Floating points
//COmputers run in 8's not 10's 
// because there are 8 bits in a byte
//00000000, 0 x8
//So things like 0.5 to us is 5/10
//But to the computer it is 5/8


0.1 + 0.2 //is not 0.3 to a computer
console.log( '0.1 + 0.2 =', 0.1 + 0.2 );
// the answer the console was '0.1 + 0.2 = 0.30000000000000004'
// The computer sees everything by a divisible by 8 

//EVERYTHING IS AN OBJECT
//Like how 'console'  has console.log
//numbers may seem like just numbers but they are objects 

//To expose the 'object' for numbers
console.log( new Number(12) );
// You'll get back '{12}' -> an object

//So lets call something off a number like
//we call '.log' from 'console'
//with 'console.log()';
console.log( (12.1234).toFixed(2) );
// With this we fixed '(12.1234)' as '12.12'
console.log( (12.1234).toString() );

// To see everything you can call off a 'number'
// Get the blue prints or 'prototype' of 'number'
console.log( Number.prototype );

// You can actually mess with the 'prototype' or add to it
Number.prototype.message = "BBG is the best";

// So now that will be on EVERY 'number'
console.log( (1).message );

// Lets talk about namning
// variables are 'camel' cased (starts off with lower case)
// i.e.  myNameIsJeff
// Objects are 'Pascal' (case starts off with Upper casse)
// i.e. RedPanda

// Variables
//Making another variable
var myBankAccount = -85000;
var howMuchIMakeAMonth = 900;

//Lets see how many months it will take pay student loans
var howManyMonths = myBankAccount / howMuchIMakeAMonth;
console.log( 'myBankAccount', myBankAccount );
console.log( 'howMuchIMakeInAMonth', howMuchIMakeAMonth);
console.log( 'howManyMonths', howManyMonths);
console.log( 'howManyMonths * -1', howManyMonths * -1);

//Convert that to years
console.log( 'howManyMonths / 12', howManyMonths / 12 );

//howManyMonths is still negative because we never re'defined' it with '='
// We do that now
console.log('howManyMonths [before]', howManyMonths);
howManyMonths = howManyMonths * -1;
console.log('howManyMonths [after]', howManyMonths);


// Now lets try again after we changed 'howManyMonths'
console.log( 'howManyMonths / 12', howManyMonths / 12 );

//Crazy ass decimal going on there
//Lets round it to 2 decimal places using '.toFixed(2)'
var howManyYears = howManyMonths / 12;
console.log( 'howManyYears.toFixed(2)', howManyYears.toFixed(2) );
//Both  work the same way
console.log( '(howManyMonths / 12).toFixed(2)', (howManyMonths / 12).toFixed(2) );

// The howManyYears.toFixed(2) is WAAAAAAY cleaner
//and easier to understand now







