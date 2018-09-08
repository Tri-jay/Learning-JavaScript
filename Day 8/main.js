//Day 8
// Ajax

//Here we learn how the internet works
//Everything in the internet is known as an http request and
//response. In order to get a reponse you need a request.
//You cannot have one without the other. You cannot get 2
//responses for 1 request either.

//A request and response are both made up of the same stuff.
//There are 3 parts to both
//URL, Headers, Body

//i.e.
//URL: 'http://makeup-api.herokuapp.com/api/v1/products.json'
//Headers: {
//browser: 'chrome'
//cookies: 'user=crystal'
//}
//Body: ''
//There is 1 piece that makes request and response different
//Requests have a method
//Responses have a status

//Request method can be 1 of 5 types
//Get, Post, Put, Delete, Patch, Header
//These 5 of thesse work EXACTLY the same just different names
//Get & Post were the first
//Get => is used for getting information
//Post => is used for sending information

//All request by default are Get request

//So let's make our first GET request
//$.get('http://makeup-api.herokuapp.com/api/v1/products.json')

//So calls to outside places take time, but we still want to be
//able to do things while we wait for the response. Sometimes
//the computer can be on shitty fre xfinity wifi, like when
//we first moved to Seattle and the call will take forever.
$.get(
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
).then(function(products) {
  //We have  found out that `products` is an array of
  //objects. So we are going to loop over them.
  products.forEach(function(product) {
    //Here we will have access to the one product.
    console.log(product);
    $("body")
      .append(`<h3>${product.name}</h3>`)
      .append(`<img src="${product.api_featured_image}" />`)
      .append(`<p>${product.description}</p>`);
  });
});
console.log("I ran first");
