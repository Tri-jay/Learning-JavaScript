//Day 9
// Tying it all together

//Searching for our makeup content class using $('.makeup-content)
//Using CSS selectors
//h1 <--means (<h1>) elements
//. <--means class
//# <--means id

console.log($(".makeup-content"));

// Now that we have the place for our content
// Let's grab a snippet of our card code and put it here.

var cardTemplate = `<article class="col-4">

<!-- It needs a class of "card" -->
<div class="card">

    <!-- Let's add a "card-img-top" or image cap -->
    <img class="card-img-top" src="https://www.placecage.com/300/200" />

    <!-- Let's make a "card-header" -->
    <h3 class="card-header">Go back to your room</h3>

    <!-- Let's mark the "card-body" content -->
    <div class="card-body">
        <p>I go where I want.</p>
    </div>

</div>

</article>`;

// And let's add the "cardTemplate" to the "makeup-content"
$(".makeup-content").append(cardTemplate);

// API (day 8)
// Now let's make a call to the makeup api and place our
// products on the page using this template.

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

    // Here is our card template
    // We are going to put the product details in this template
    // Then append it to the "makeup-content" "section"
    var productCard = `<article class="col-4">

      <!-- It needs a class of "card" -->
      <div class="card">

          <!-- Let's add a "card-img-top" or image cap -->
          <img class="card-img-top" src="${product.api_featured_image}" />

          <!-- Let's make a "card-header" -->
          <h3 class="card-header">${product.name}</h3>

          <!-- Let's mark the "card-body" content -->
          <div class="card-body">
              <p>${product.description}</p>
          </div>

      </div>

      </article>
    `;

    // Here we are appending the "productCard" to the "makeup-content".
    $(".makeup-content").append(productCard);
  });
});
console.log("I ran first");
