import { useState } from "react";

function Square({ value, onSquareClick }) {
  function handleClick() {
    onSquareClick();
  }

  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}

const checkWinner = function (squares) {
  console.log(squares);
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // squares represent the board array, the 9 filled array
  // check if it accomplishes the work.
  // lines represent the combinations, in array index.

  /**
   * I want to check then the squares if it matches the indexes
   *
   * I want to loop through the lines array
   *
   * check the first number, the second number, and the third number if all of them are in the same symbol.
   */

  for (let i = 0; i < lines.length; i++) {
    const first = lines[i][0];
    const second = lines[i][1];
    const third = lines[i][2];

    if (
      // check if all of them are in the same combination
      squares[first] &&
      // check if it is not null
      squares[first] === squares[second] &&
      squares[second] === squares[third]
    ) {
      console.log("you win!", squares);
      return squares[first];
    }
  }
  console.log("nulls");
  return null;
};

export function Board({ xIsNext, squares, onPlay }) {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [turn, setTurn] = useState("X");

  console.log(squares);
  const winner = checkWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // changes the value of the array by renaming it to X
  function handleClick(i) {
    if (checkWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          onSquareClick={() => {
            handleClick(1);
          }}
          value={squares[1]}
        />

        <Square
          onSquareClick={() => {
            handleClick(2);
          }}
          value={squares[2]}
        />
      </div>

      <div className="board-row">
        <Square
          onSquareClick={() => {
            handleClick(3);
          }}
          value={squares[3]}
        />
        <Square
          onSquareClick={() => {
            handleClick(4);
          }}
          value={squares[4]}
        />
        <Square
          onSquareClick={() => {
            handleClick(5);
          }}
          value={squares[5]}
        />
      </div>
      <div className="board-row">
        <Square
          onSquareClick={() => {
            handleClick(6);
          }}
          value={squares[6]}
        />
        <Square
          onSquareClick={() => {
            handleClick(7);
          }}
          value={squares[7]}
        />
        <Square
          onSquareClick={() => {
            handleClick(8);
          }}
          value={squares[8]}
        />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // const currentSquares = history[history.length - 1];
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function handlePlay(nextSquares) {
    // setHistory([...history, nextSquares]);

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
