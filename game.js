//Class Characters
class Character {
  constructor(name) {
    this._name = name;
  }
}
// Class Rooms
class Room {
  constructor(name, description) {
    this._name = name;
    this._description = description;
  }
}
// Rooms,
let rooms = [
  new Room("Yard1", "yardbla"),
  new Room("first room", "bla"),
  new Room("second room", "blla"),
  new Room("three room", "bllla"),
  new Room("for room", "blllla"),
  new Room("five room", "bllllla"),
];

//
let currentRoom = 0;
let roomName = document.getElementById("title");
let roomDescription = document.getElementById("description");
let startButton = document.getElementById("startButton");
let gameContainer = document.getElementById("game-container");

// Start game
function start() {
  gameContainer.style.display = "block";
  startButton.style.display = "none";
}

// Function to Display Room
function displayRoom() {
  roomName.innerHTML = rooms[currentRoom]._name;
  roomDescription.innerHTML = rooms[currentRoom]._description;
}

// Navigate thru Chambers
function left() {
  if (currentRoom > 0) {
    currentRoom--;
  }
  displayRoom();
}

function right() {
  if (currentRoom < rooms.length - 1) {
    currentRoom++;
  }
  displayRoom();
}

displayRoom();
