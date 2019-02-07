var input = document.getElementById("myFirstInput");

function buttonClick() {
  console.log("You clicked the button");
  var value = input.value;
  console.log("My Input Field: ", input);
  console.log("My Value: ", value);
  var output = document.getElementById("output");
  output.innerHTML = `<p> Hello, ${value}! </p>`;
}

input.addEventListener("keyUp", function(e) {
  console.log(e);
});

var button = document.getElementById("firstButton");
button.addEventListener("click", function(e) {
  console.log(e);
});
