//Day 6
// Conditionals and Operators

// But in English... 
// 'if', 'else', 'while', 'for', && ->'and'<- this in coffeescript, and || 'or'

var Dog = {
    breed: 'Doge',
    age: 203,
};

//It checks if this order is true in order to run 
//the block inside the if statement.
if(Dog.breed === 'Huskey'){
    console.log('OH MAHMAH OH MAMAMAMAHHAAAA');
}
console.log(Dog.breed === 'Huskey')
// Nothing was logged XD cauase I put 'Huskey' instead of 'Doge'
//It also came back as false

if(Dog.breed === 'Doge'){
    console.log('Geralt finally heard his horse talk!!');
}
console.log(Dog.breed === 'Doge');

// '||' means or
// So it means one of these 2 needs ot be true in order to pass
// if() <--- this is the -->if statement <--
if(Dog.breed === 'Doge' || Dog.breed === 'Huskey'){
    console.log('Wake up lieutenant');
}

// && means and
// So it means both nees to be true in order to pass
if(Dog.breed === 'Doge' && Dog.age >= 20){
    console.log('Ice the bitch');
}

var array = [ 1, 2, 3, 4, 5 ];

// This is a 'for' loop
//It runs through things that are iterable
// It can even run through objects 
for(var index in array){
    console.log(index, array[index]);
}

console.log( 'array[2]', array[2]);

var products = [
    { name: 'lipstick'},
    { name: 'foundation'},
    { name: 'setting powder'},
    { name: 'eyeliner'},
];

for(var index in products){
    var product = products[index];

    console.log('product', product);
}

// This will keep runnung until what ever is in ( ) becomes false
var run = true;
while(run){
    console.log('running');
    run = false;
}

var run = true;
while(run){
    var number = Math.random() * 100;
    // 50/50 chance to stop the loop
    run = number > 2;
    console.log('running', number);
}
// DON'T EVER USE 'WHILE LOOP' IT'S A FUCKING INFINTIE LOOP ALMOST
// BROKE MY DAMN COMPUTER
// Or just be mindful of what you do with it. 
//i.e. run - number > 2 <-- don't put a negative in the equation
// IT FUCKING NEVER STOPS AND LITERALLY FUCKS YOUR COMPUTER TO HELL 