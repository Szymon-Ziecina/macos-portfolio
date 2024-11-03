"use client";

import React, { useState } from "react";

const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState("");
  const [winningCombination, setWinningCombination] = useState<number[] | null>(
    null
  );

  const handleClick = (number: number) => {
    if (cells[number] !== "" || winner) return;

    let array = [...cells];
    if (turn === "X") {
      array[number] = "X";
      setTurn("O");
    } else {
      array[number] = "O";
      setTurn("X");
    }
    checkWinner(array);
    setCells(array);
  };

  const checkWinner = (array: string[]) => {
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          array[pattern[0]] === "" ||
          array[pattern[1]] === "" ||
          array[pattern[2]] === ""
        ) {
        } else if (
          array[pattern[0]] === array[pattern[1]] &&
          array[pattern[1]] === array[pattern[2]]
        ) {
          setWinner(array[pattern[0]]);
          setWinningCombination(pattern);
        }
      });
    }
  };

  const combos: { [key: string]: number[][] } = {
    across: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    down: [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ],
    diagonal: [
      [0, 4, 8],
      [2, 4, 6],
    ],
  };

  const renderBoard = () => {
    return (
      <div className="grid grid-cols-3 gap-2">
        {cells.map((cell, index) => {
          const isWinner = winningCombination
            ? winningCombination.includes(index)
            : false;
          return (
            <div
              key={index}
              className={`w-20 h-20 flex justify-center items-center border rounded-md bg-gray-400/40 text-3xl font-semibold cursor-pointer ${
                isWinner ? "bg-green-400/60" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {cell}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center text-lg h-full p-4">
      {renderBoard()}
      <p className="h-7">{winner && `${winner} wins!`}</p>
      <button
        className="bg-green-500 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setCells(["", "", "", "", "", "", "", "", ""]);
          setWinner("");
          setTurn("X");
          setWinningCombination(null);
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
