function removeItem(obj) {
    var cartItemsString = localStorage.getItem("cartItems");
    if (cartItemsString !== null) {
      var cartItems = JSON.parse(cartItemsString);
  
      var ind = cartItems.findIndex(function (item) {
        return (
          item.name === obj.name &&
          item.glaze === obj.glaze &&
          item.quantity === obj.quantity &&
          item.price === obj.price
        );
      });
      console.log("ind " + ind);
      if (ind !== -1) {
        cartItems.splice(ind, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        updatePage();
      }
    }
  }
  
  function addItem() {
    var cartItemsString = localStorage.getItem("cartItems");
    if (cartItemsString === null) {
      var cartItems = [];
    } else {
      cartItems = JSON.parse(cartItemsString);
    }
  
    var productName = document.getElementById("product-name").innerHTML;
    var glazeValue = document.getElementById("glaze-dropdown").value;
    var quantityValue = document.getElementById("quantity-number").value;
    var productPrice = document.getElementById("product-price").innerHTML;
    var itemObject = {
      name: productName,
      glaze: glazeValue,
      quantity: quantityValue,
      price: productPrice
    };
    cartItems.push(itemObject);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  
  function updatePage() {
    var cartItemsString = localStorage.getItem("cartItems");
    if (cartItemsString !== null) {
      var cartItems = JSON.parse(cartItemsString);
      var counterNode = document.getElementById("number");
      counterNode.innerText = cartItems.length;
      var cartList = document.getElementById("cart-list");
      cartList.innerHTML = "";
      if (cartItems.length === 0) {
        document.getElementById("placeholder-text").style.visibility = "visible";
        document.getElementById("delivery").style.visibility = "hidden";
        document.getElementById("tax").style.visibility = "hidden";
        document.getElementById("line").style.visibility = "hidden";
        document.getElementById("price").style.visibility = "hidden";
        document.getElementById("pay").style.visibility = "hidden";
        document.getElementById("footer").style.visibility = "hidden";
      } else {
        document.getElementById("placeholder-text").style.visibility = "hidden";
        for (var i = 0; i < cartItems.length; i++) {
          var cartItem = cartItems[i];
          var itemNode = document.createElement("li");
          itemNode.innerText =
            cartItem.name +
            " -------------------------------------------------- CLICK TO REMOVE" +
            "\n\n" +
            cartItem.quantity +
            " Rolls\n" +
            cartItem.glaze +
            "\n\n" +
            cartItem.price +
            "\n\n\n\n";
  
          itemNode.onclick = (function (cartItem) {
            return function () {
              removeItem(cartItem);
            };
          })(cartItem);
  
          cartList.appendChild(itemNode);
        }
      }
    }
  }
  
  function addButton() {
    addItem();
    updatePage();
  }
  
  updatePage();
  