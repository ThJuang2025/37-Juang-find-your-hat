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


// Game play loop
// รับค่า Input จาก user ใน Terminal ที่ Enter ส่งค่าเข้า prompt


while (playing === true ) {
	printBoard(board);
	const input = prompt("Which way? (w/a/s/d): ");
	if (input in "w","a","s","d") {
		switch (input) {
		case "w":
			// move Up
			playerRow--;
			if (board[playerRow][playerCol] === HAT) {
				console.log("***You WIN***!");
				} 
			else if (board[playerRow][playerCol] === HOLE) || (playerRow >2) || (playerRow <0) {
				console.log("You lose!");
				} else if
					board[playerRow][playerCol] == "*";
					break;
		case "a":
			//move Left
			playerCol--;
			if (board[playerRow][playerCol] === HAT) {
				console.log("***You WIN***!");
				} 
			else if (board[playerRow][playerCol] === HOLE) || (playerCol >2) || (playerCol <0) {
				console.log("You lose!");
				} else if
					board[playerRow][playerCol] == "*";
					break;
		case "s":
			// move Down
			playerRow++;
			if (board[playerRow][playerCol] === HAT) {
				console.log("***You WIN***!");
				} 
			else if (board[playerRow][playerCol] === HOLE) || (playerRow >2) || (playerRow <0) {
				console.log("You lose!");
				} else if
				board[playerRow][playerCol] == "*";
				break;
		case "d":
			// move Right
			playerCol++;
			if (board[playerRow][playerCol] === HAT) {
				console.log("***You WIN***!");
				} 
			elseif (board[playerRow][playerCol] === HOLE) || (playerCol >2) || (playerCol <0) {
				console.log("You lose!");
				} else if
					board[playerRow][playerCol] == "*";
					break;
		default: ;
		};
	};
};


