// 1. Hint button
// TODO display the hint if the button is pressedcd
// - select the btn
// - add event listener on the button (click)
// - get the div.hint and change the opacity to 1
const button = document.getElementById("show-hint");
const hint = document.querySelector(".hint");

button.addEventListener("click", (event) => {
  hint.style.opacity = 1;
  setTimeout(() => {
    hint.style.opacity = 0;
  }, 3000);

});

// 2. Tile logic
const canMove = (tile) => {
  // TODO logic to check if the tile can or cannot move
  const emptyColumnIndex = document.querySelector(".empty").cellIndex;
  const columnDifference = Math.abs(tile.cellIndex - emptyColumnIndex);
  const emptyRowIndex = document.querySelector(".empty").parentNode.rowIndex;
  const rowDifference = Math.abs(tile.parentNode.rowIndex - emptyRowIndex);
  console.log(emptyRowIndex);
  if (columnDifference === 1 && rowDifference === 0 || columnDifference === 0 && rowDifference === 1 || columnDifference === 1 && rowDifference === 1) {
    return true;
  } else {
    return false;
  }
};

const moveTile = (tile) => {
  console.log("hey mate")
  // TODO logic to move the tile
  const emptyTile = document.querySelector(".empty");
  // find the one that is empty - remove empty class
  emptyTile.classList.remove("empty");
  // add empty to the one we clicked on
  tile.classList.add("empty");
  // Grab number from empty and put it in the new one
  emptyTile.innerText = tile.innerText;
  tile.innerText = "";
}

// TODO listen to tiles if they are clicked
// - add an event on all the tiles (click)
// - check if that tile can move or not
// - if yes move it else do nothing
const tiles = document.querySelectorAll("table td");

tiles.forEach((tile) => {
  tile.addEventListener("click", (event) => {
    if (canMove(tile)) {
      moveTile(tile);
    }
  });
});





























