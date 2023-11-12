import { useState } from "react";

function Square({ value, onSquareClick }) {
  function handleClick() {
    onSquareClick();
    console.log(value);
  }

  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}

export default function Board() {
  const [val, setVal] = useState(Array(9).fill(null));

  function handleClick(num) {
    // clone the array
    const newArr = val.slice();
    // fill the modified array
    newArr[num] = "x";

    // return new array
    setVal(newArr);
  }

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
