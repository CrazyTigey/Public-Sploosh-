window.onload = function(){
    
// Get the grid container
var gridContainer = document.getElementById('grid-container');

// Create the grid items
for (var i = 0; i < 36; i++) {
  var gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridContainer.appendChild(gridItem);
}

// Get all the grid items and convert them to an array
var gridItems = document.querySelectorAll('.grid-item');
var gridItemsArray = Array.from(gridItems);

function toggleClickedGrid1(gridItem) {
  // Toggle the 'clicked' class on the grid item
  if (gridItem.classList.contains('clicked')) {
    gridItem.classList.remove('clicked');
  } else {
    gridItem.classList.add('clicked');
  }
}

// Add a click event listener to each grid item using a for loop
//the grid is labelled 0 to 35, starting from the top left and going right then down
console.log(gridItemsArray[0])
for (let j = 0; j < gridItemsArray.length; j++) {
  gridItemsArray[j].addEventListener('click', function () {
    toggleClickedGrid1(gridItemsArray[j]);
  });
}

//reset grid function//
function resetGrid() {
  let grid2 = document.getElementById('grid-container');
  let divs = grid2.querySelectorAll('div');
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.remove('clicked');
  }
}

document.getElementById('reset1').addEventListener("click", resetGrid);

}
