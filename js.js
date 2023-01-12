var blackBackground;
var diskLayer;
var turn = 1;
var scoreLabel;
var gameOver=false;
var canMoveLayer;
 
let disks = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

window.onload = function () {
  scoreLabel=document.getElementById("score");
  canMoveLayer=document.getElementById("canmovelayer");
  blackBackground = document.getElementById("ground");
  diskLayer = document.getElementById("diskLayer");

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      var greenSquare = document.createElement("div");
      greenSquare.style.position = "absolute";
      greenSquare.style.width = "100px";
      greenSquare.style.height = "100px";
      greenSquare.style.borderRadius = "10px";
      greenSquare.style.backgroundColor = "#5F8D4E";
      greenSquare.style.left = (60 + 40) * column;
      greenSquare.style.top = (60 + 40) * row;
      greenSquare.innerText=String.fromCharCode(column + 65)+"-"+Number(row+1);

      greenSquare.setAttribute(
        "onclick",
        "clickedSquare(" + row + ", " + column + ")"
      );

      blackBackground.appendChild(greenSquare);
    }
  }

  drawDisks();
  drawCanMoveLayer();
};

function clickedSquare(row, column) {
  if(gameOver) return;
  if (disks[row][column] != 0) {
    return;
  }

  if (canClickSpot(turn,row, column) == true) {
    var affectedDisks = getAffectedDisks(turn,row, column);
    flipDisks(affectedDisks);

    disks[row][column] = turn;
    if(turn==1 && canMove(2)) turn=2;
    else if(turn==2 && canMove(1)) turn=1;
    if(canMove(1)==false && canMove(2)==false){
      alert("Game Over");
      gameOver=true;
    }
    drawDisks();
  drawCanMoveLayer();
    reDrawScore();
  }
}
function drawCanMoveLayer(){

  canMoveLayer.innerHTML = "";
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      var value = disks[row][column];

      if (value == 0 &&canClickSpot(turn,row,column)) {
        var diskOutLine = document.createElement("div");
        diskOutLine.style.position = "absolute";
        diskOutLine.style.width = "100px";
        diskOutLine.style.height = "100px";
        diskOutLine.style.borderRadius = "50px";
        // diskOutLine.style.backgroundColor = "#5F8D4E";
        diskOutLine.style.left = (60 + 40) * column;
        diskOutLine.style.top = (60 + 40) * row;
        diskOutLine.style.zIndex=2;
        diskOutLine.setAttribute(
          "onclick",
          "clickedSquare(" + row + ", " + column + ")"
        );
        if (turn == 1) {
         diskOutLine.style.border="2px solid black";
        }
        if (turn == 2) {
         diskOutLine.style.border="2px solid white";
          
        }
        canMoveLayer.appendChild(diskOutLine);
      } 
    }
  }
  }
  
function canMove(id){
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
    if(canClickSpot(id,row,column)){
      return true;
    }
    }}return false;
}
function reDrawScore(){
  var ones=0;
  var twos=0;
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      var value = disks[row][column];
    if (value==1) ones +=1;
    else if(value==2) twos+=1;
    }}
    scoreLabel.innerHTML="Black:"+ones+"-White:"+twos;
}
function canClickSpot(id,row, column) {
  var affectedDisks = getAffectedDisks(id,row, column);
  if (affectedDisks.length == 0) {
    return false;
  } else return true;
}

function getAffectedDisks(id,row, column) {
  var affectedDisks = [];

  // to the right
  var couldBeAffected = [];
  var columnIterator = column;
  while (columnIterator < 7) {
    columnIterator += 1;
    var valueAtSpot = disks[row][columnIterator];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDisks = affectedDisks.concat(couldBeAffected);
      }
      break;
    } else {
      var diskLocation = { row: row, column: columnIterator };
      couldBeAffected.push(diskLocation);
    }
  }

  // to the left
  var couldBeAffected = [];
  var columnIterator = column;
  while (columnIterator > 0) {
    columnIterator -= 1;
    var valueAtSpot = disks[row][columnIterator];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDisks = affectedDisks.concat(couldBeAffected);
      }
      break;
    } else {
      var diskLocation = { row: row, column: columnIterator };
      couldBeAffected.push(diskLocation);
    }
  }

  // above
  var couldBeAffected = [];
  var rowIterator = row;
  while (rowIterator > 0) {
    rowIterator -= 1;
    var valueAtSpot = disks[rowIterator][column];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDisks = affectedDisks.concat(couldBeAffected);
      }
      break;
    } else {
      var diskLocation = { row: rowIterator, column: column };
      couldBeAffected.push(diskLocation);
    }
  }

  // below
  var couldBeAffected = [];
  var rowIterator = row;
  while (rowIterator < 7) {
    rowIterator += 1;
    var valueAtSpot = disks[rowIterator][column];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDisks = affectedDisks.concat(couldBeAffected);
      }
      break;
    } else {
      var diskLocation = { row: rowIterator, column: column };
      couldBeAffected.push(diskLocation);
    }
  }

  // down right
  var couldBeAffected = [];
  var rowIterator = row;
  var columnIterator = column;
  while (rowIterator < 7 && columnIterator < 7) {
    rowIterator += 1;
    columnIterator += 1;
    var valueAtSpot = disks[rowIterator][columnIterator];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDisks = affectedDisks.concat(couldBeAffected);
      }
      break;
    } else {
      var diskLocation = { row: rowIterator, column: columnIterator };
      couldBeAffected.push(diskLocation);
    }
  }

  // down left
  var couldBeAffected = [];
  var rowIterator = row;
  var columnIterator = column;
  while (rowIterator < 7 && columnIterator > 0) {
    rowIterator += 1;
    columnIterator -= 1;
    var valueAtSpot = disks[rowIterator][columnIterator];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot == id) {
        affectedDisks = affectedDisks.concat(couldBeAffected);
      }
      break;
    } else {
      var diskLocation = { row: rowIterator, column: columnIterator };
      couldBeAffected.push(diskLocation);
    }
  }

  // up left
  var couldBeAffected = [];
  var rowIterator = row;
  var columnIterator = column;
  while (rowIterator > 0 && columnIterator > 0) {
    rowIterator -= 1;
    columnIterator -= 1;
    var valueAtSpot = disks[rowIterator][columnIterator];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot ==id) {
        affectedDisks = affectedDisks.concat(couldBeAffected);
      }
      break;
    } else {
      var diskLocation = { row: rowIterator, column: columnIterator };
      couldBeAffected.push(diskLocation);
    }
  }

  // up right
  var couldBeAffected = [];
  var rowIterator = row;
  var columnIterator = column;
  while (rowIterator > 0 && columnIterator < 7) {
    rowIterator -= 1;
    columnIterator += 1;
    var valueAtSpot = disks[rowIterator][columnIterator];
    if (valueAtSpot == 0 || valueAtSpot == id) {
      if (valueAtSpot ==id) {
        affectedDisks = affectedDisks.concat(couldBeAffected);
      }
      break;
    } else {
      var diskLocation = { row: rowIterator, column: columnIterator };
      couldBeAffected.push(diskLocation);
    }
  }

  return affectedDisks;
}

function flipDisks(affectedDisks) {
  for (let i = 0; i < affectedDisks.length; i++) {
    var spot = affectedDisks[i];
    if (disks[spot.row][spot.column] == 1) {
      disks[spot.row][spot.column] = 2;
    } else {
      disks[spot.row][spot.column] = 1;
    }
  }
}

function drawDisks() {
  diskLayer.innerHTML = "";
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      var value = disks[row][column];

      if (value == 0) {
      } else {
        var disk = document.createElement("div");
        disk.style.position = "absolute";
        disk.style.width = "100px";
        disk.style.height = "100px";
        disk.style.borderRadius = "50px";
        disk.style.backgroundColor = "#5F8D4E";
        disk.style.left = (60 + 40) * column;
        disk.style.top = (60 + 40) * row;

        if (value == 1) {
          disk.style.backgroundColor = "black";
        }
        if (value == 2) {
          disk.style.backgroundColor = "white";
        }
        diskLayer.appendChild(disk);
      }
    }
  }
}