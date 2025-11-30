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

function gameRule(row, col) {
  if (row < 0 || row > 2 || col < 0 || col > 2) {
    console.log("Out of bounds! You lose :(");
    playing = false;
  } else if (board[row][col] === HAT) {
    console.log("*** You WIN ***!");
    playing = false;
  } else if (board[row][col] === HOLE) {
    console.log("Sorry, you fell in a hole :(");
    playing = false;
  }
}

// Keyboard-Entering Key to move PLAYER
const VALID_KEYS = ['w', 'a', 's', 'd'];
//  Read Input from user  that input correctly and turn to lowercase for conveneient check


while (playing) {
	const input = prompt("Which way? (w/a/s/d): ").toLowerCase();
	if (VALID_KEYS.includes(input)) {
		console.log("✅ Valid input:", input);
		 // ลบตำแหน่งเดิม
    	board[playerRow][playerCol] = EMPTY;
		// อัปเดตตำแหน่งผู้เล่นตามปุ่มที่กด
		if (input === "w") playerRow--; // move Up
		if (input === "s") playerRow++; // move Down
		if (input === "a") playerCol--; // move Left
		if (input === "d") playerCol++; // move Right
		gameRule(playerRow,playerCol);
		if (playing) {
			board[playerRow][playerCol] = PLAYER;
			printBoard(board);
		}
	} else {
	console.log("❌ Invalid input. Please enter w, a, s, or d to move PLAYER.");
	};
};


