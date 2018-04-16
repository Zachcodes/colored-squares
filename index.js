var randomColorArray = ['red', 'blue', 'green', 'black', 'purple', 'yellow', 'orange', 'pink'];
function giveRandomColor(e) {
  var numToMultiplyBy = randomColorArray.length - 1;
  var randIndex = Math.floor((Math.random() * numToMultiplyBy) + 1);
  var newColor = randomColorArray[randIndex];
  e.style.background = newColor;
}
