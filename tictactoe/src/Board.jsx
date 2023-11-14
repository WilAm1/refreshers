import { useEffect, useState } from "react";

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
      console.log("you win!");
    }
  }
};

export default function Board() {
  const [val, setVal] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  // changes the value of the array by renaming it to X
  function handleClick(num) {
    // clone the array
    const newArr = val.slice();

    // fill the modified array
    newArr[num] = turn;

    // change the turn
    setTurn(turn === "O" ? "X" : "O");

    // set new array. then check if there is a winner!

    // return new array
    setVal(newArr);
  }

  useEffect(() => {
    checkWinner(val);
  });

  // check if it is complete
  /**

  *   x , x, x
   *  null, null, null
   * null, null, null
   */

  // function isComplete() {
  //   // check the array if there is no null
  // }

  return (
    <>
      <div className="board-row">
        <Square
          value={val[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          onSquareClick={() => {
            handleClick(1);
          }}
          value={val[1]}
        />

        <Square
          onSquareClick={() => {
            handleClick(2);
          }}
          value={val[2]}
        />
      </div>

      <div className="board-row">
        <Square
          onSquareClick={() => {
            handleClick(3);
          }}
          value={val[3]}
        />
        <Square
          onSquareClick={() => {
            handleClick(4);
          }}
          value={val[4]}
        />
        <Square
          onSquareClick={() => {
            handleClick(5);
          }}
          value={val[5]}
        />
      </div>
      <div className="board-row">
        <Square
          onSquareClick={() => {
            handleClick(6);
          }}
          value={val[6]}
        />
        <Square
          onSquareClick={() => {
            handleClick(7);
          }}
          value={val[7]}
        />
        <Square
          onSquareClick={() => {
            handleClick(8);
          }}
          value={val[8]}
        />
      </div>
    </>
  );
}
