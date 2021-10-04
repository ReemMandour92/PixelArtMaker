// Select color input
// Select size input
const cell = document.getElementById('colorPicker');
// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
  // get width and height of canvas
  var width =  document.getElementById("inputWidth").value;
  var height = document.getElementById("inputHeight").value;
   // get table element
   var gridElement = document.getElementById("pixelCanvas");

  /* Event listener to fire if cell is clicked */
  let pickColorToDraw = function(cell){
    cell.addEventListener('click', function(){
      // get current color
      var color = document.getElementById("colorPicker").value;
      cell.style.backgroundColor = color;
    })
  };

  /* 
   This below code is used to draw the canvas based on width and height provided in textboxes.
   */
 
  // create a table body element
  var gridBody = document.createElement("tbody");
  gridElement.innerHTML="";
  //start grid creation
  for(i=0; i<height; i++){
    var rowElement = document.createElement("tr");
    for(j=0; j<width; j++){
      var columnElement = document.createElement("td");
      columnElement.textContent = " ";
      columnElement.addEventListener('click', pickColorToDraw(columnElement));
      rowElement.appendChild(columnElement);
    }
    gridBody.appendChild(rowElement);
  }
  gridElement.appendChild(gridBody);
}

document.querySelector('#submit').addEventListener('click', (evt) => {
  evt.preventDefault();
  makeGrid();
  });
