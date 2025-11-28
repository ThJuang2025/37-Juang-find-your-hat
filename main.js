"use strict";
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });


// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
let board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;

function printBoard(board) {
	console.clear(); // call console.clear() before print each move
	for (let row of board) {console.log(row.join(""));}
};

printBoard(board);

// Keyboard-Entering Key to move PLAYER
const VALID_KEYS = ['w', 'a', 's', 'd'];
//  Read Input from user  that input correctly and turn to lowercase for conveneient check
const input = prompt("Which way? (w/a/s/d): ").toLowerCase();;

while (playing) 
if (VALID_KEYS.includes(input)) {
  console.log("✅ Valid input:", input);
  playing = false;  //to exxist loop
} else {
  console.log("❌ Invalid input. Please enter w, a, s, or d to move PLAYER.");
};

