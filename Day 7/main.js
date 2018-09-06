//Day 6
// JQuery
//Helps out with Dom elements......they are a bitch apparently

//Dom elements are just HTML elements that are 
//live in the browser

//Lets start by finding a DOM element
//Again HTML is already in the browser

//1 element we know is already in the browser
//<body>
//In order to find it we use the same selectors
//That we use in CSS which is this `body`
//but this is javascript so we needto use a function call.

//JQuery provides a very useful function called `$`, this is
//a function that returns a class with a ton of useful 
//functions on it.

//So lets use this bad boy
//selection the <body>
console.log( $('body') );


//Cool so that is how we find things let's start by adding things

//Let's start by adding an <h1>
$('body')
.append('<h1>My name is PurpleBon</h1>')
.append('<h1>My name is PurpleBon</h1>');

//Breif overview
function objectReturn(name){
    return{
        name: name,
        sayName: function(){
            console.log(this.name);
            //we are returning `this` object
            return this;
        }
    }
}

objectReturn('Sarge')
        //`this` object get retured
        .sayName()
        //`this` object get returned
        .sayName()
        //`this` object get returned
        .sayName()
        //`this` object get returned
        .sayName();

//Let's play a little more with HTML
$('body').append('<h2 class="PurpleBon">I can be lost easily</h2>');

//Now that we have added it to the page lets find it using
//css selectors `.PurpleBon`
console.log( $('.PurpleBon') );


//Cool so let's do some stuff with it
$('.PurpleBon')
.css({ 
    color:'olive',
    position:'absolute',
})
.fadeOut()
.fadeIn()
.slideUp()
.slideDown()
.animate({
    left: '50%',
}, 200)
.animate({
    left: '75%',
}, 200)
.animate({
    left: 0,
}, 200).animate({
    left: '-200%',
}, 200);