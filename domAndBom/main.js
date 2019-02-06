var innerBox = "";

function createBox(color) {
  innerBox = document.createElement("div");
  innerBox.setAttribute("id", "inner");
  innerBox.style.backgroundColor = color;
  var outerBox = document.getElementById("outer");
  outerBox.appendChild(innerBox);
}

function changeColor(color) {
  var innerBox = document.getElementById("inner");
  innerBox.style.backgroundColor = color;
}
