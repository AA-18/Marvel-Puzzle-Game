let rows = 5;
let cols = 5;

let currTile;
let otherTile;

let turns = 0;

window.onload = function () {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let tile = document.createElement("img");
      tile.src = "./images/blank2.jpg";
      document.getElementById("board").append(tile);

      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);
    }
  }

  let pieces = [];
  for (let i = 1; i <= rows * cols; i++) {
    pieces.push(i.toString());
  }
  for (let i = 0; i < pieces.length; i++) {
    let j = Math.floor(Math.random() * pieces.length);
    let tmp = pieces[j];
    pieces[j] = pieces[i];
    pieces[i] = tmp;
  }
  for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "./images/" + pieces[i] + ".jpg";
    document.getElementById("pieces").append(tile);
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("dragend", dragEnd);
  }
};

function dragStart() {
  currTile = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
  otherTile = this;
}

function dragEnd() {
  if (currTile.src.includes("blank2") || currTile.src==otherTile.src ) {
    return;
  }
  let currImg = currTile.src;
  let otherImg = otherTile.src;
  currTile.src = otherImg;
  otherTile.src = currImg;
  turns += 1;
  document.getElementById("turns").innerText = turns;
}
