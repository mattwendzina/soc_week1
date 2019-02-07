var name = "Matt Wendzina";

function abbrevName(name) {
  return name
    .split(" ")
    .map(function(item) {
      return item[0].toUpperCase();
    })
    .join(".");
}
