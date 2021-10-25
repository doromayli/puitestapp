// 1 Roll
document.getElementById("one").addEventListener("click", function () {
    document.getElementById("one").style.backgroundColor = "#8f0000";
    document.getElementById("three").style.backgroundColor = "#2f0000";
    document.getElementById("six").style.backgroundColor = "#2f0000";
    document.getElementById("twelve").style.backgroundColor = "#2f0000";
    document.getElementById("price").innerHTML = "<b>$0.49</b>";
  });
  
  // 3 Roll
  document.getElementById("three").addEventListener("click", function () {
    document.getElementById("three").style.backgroundColor = "#8f0000";
    document.getElementById("one").style.backgroundColor = "#2f0000";
    document.getElementById("six").style.backgroundColor = "#2f0000";
    document.getElementById("twelve").style.backgroundColor = "#2f0000";
    document.getElementById("price").innerHTML = "<b>$1.47</b>";
  });
  
  // 6 Roll
  document.getElementById("six").addEventListener("click", function () {
    document.getElementById("six").style.backgroundColor = "#8f0000";
    document.getElementById("one").style.backgroundColor = "#2f0000";
    document.getElementById("three").style.backgroundColor = "#2f0000";
    document.getElementById("twelve").style.backgroundColor = "#2f0000";
    document.getElementById("price").innerHTML = "<b>$2.94</b>";
  });
  
  // 12 Roll
  document.getElementById("twelve").addEventListener("click", function () {
    document.getElementById("twelve").style.backgroundColor = "#8f0000";
    document.getElementById("one").style.backgroundColor = "#2f0000";
    document.getElementById("three").style.backgroundColor = "#2f0000";
    document.getElementById("six").style.backgroundColor = "#2f0000";
    document.getElementById("price").innerHTML = "<b>$5.88</b>";
  });
  
  // None Glazing
  document.getElementById("none").addEventListener("click", function () {
    document.getElementById("none").style.backgroundColor = "#8f0000";
    document.getElementById("sugar").style.backgroundColor = "#2f0000";
    document.getElementById("vanilla").style.backgroundColor = "#2f0000";
    document.getElementById("chocolate").style.backgroundColor = "#2f0000";
    document.getElementById("price").innerHTML = "<b>$6.49</b>";
  });
  
  // Sugar Glazing
  document.getElementById("sugar").addEventListener("click", function () {
    document.getElementById("sugar").style.backgroundColor = "#8f0000";
    document.getElementById("none").style.backgroundColor = "#2f0000";
    document.getElementById("vanilla").style.backgroundColor = "#2f0000";
    document.getElementById("chocolate").style.backgroundColor = "#2f0000";
    document.getElementById("price").innerHTML = "<b>$6.99</b>";
  });
  
  // Vanilla Glazing
  document.getElementById("vanilla").addEventListener("click", function () {
    document.getElementById("vanilla").style.backgroundColor = "#8f0000";
    document.getElementById("none").style.backgroundColor = "#2f0000";
    document.getElementById("sugar").style.backgroundColor = "#2f0000";
    document.getElementById("chocolate").style.backgroundColor = "#2f0000";
    document.getElementById("price").innerHTML = "<b>$7.09</b>";
  });
  
  // Chocolate Glazing
  document.getElementById("chocolate").addEventListener("click", function () {
    document.getElementById("chocolate").style.backgroundColor = "#8f0000";
    document.getElementById("none").style.backgroundColor = "#2f0000";
    document.getElementById("sugar").style.backgroundColor = "#2f0000";
    document.getElementById("vanilla").style.backgroundColor = "#2f0000";
    document.getElementById("price").innerHTML = "<b>$7.19</b>";
  });
  
  // Add to Cart
  var counter = 0;
  document.getElementById("cart").addEventListener("click", function () {
    counter++;
    document.getElementById("number").innerHTML = counter;
  });
  