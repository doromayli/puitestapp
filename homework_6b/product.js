// Global Variables
var prodPrice = 0.49;
var numOfProds = 1;
var flavorPrice = 0.5;

// Get HTML List
var quantity = document.getElementById("quantity-number");
var glaze = document.getElementById("glaze-dropdown");

// Quantity Price Update
quantity.onchange = function () {
  numOfProds = document.getElementById("quantity-number").value;
  document.getElementById("product-price").innerHTML =
    "$" + prodPrice * numOfProds;
};

// Initializing Variable
var unitPrice = 0;

// Glazing Price Update
glaze.onchange = function () {
  var flavor = document.getElementById("glaze-dropdown").value;
  if (flavor === "None") {
    unitPrice = numOfProds * prodPrice;
    document.getElementById("product-price").innerHTML = "$" + unitPrice;
  } else {
    unitPrice = numOfProds * prodPrice;
    document.getElementById("product-price").innerHTML =
      "$" + JSON.parse(unitPrice + flavorPrice);
  }
};