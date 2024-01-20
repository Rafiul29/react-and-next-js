import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSqures = history[currentMove];

  function handlePlay(nextSqures) {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSqures];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
  }

  function jumpTO(mv) {
    setCurrentMove(mv);
    setXIsNext(mv % 2 == 0);
  }

  const moves = history.map((sq, mv) => {
    let descirption;
    if (mv > 0) {
      descirption = `Go to the move a # ${mv}`;
    } else {
      descirption = `Go to the start the game`;
    }
    return (
      <li key={mv} className="mb-2 bg-slate-400 text-white p-2 rounded-sm">
        <button onClick={() => jumpTO(mv)}>{descirption}</button>
      </li>
    );
  });
  return (
    <div className="flex justify-center p-5 gap-4">
      <div>
        <Board xIsNext={xIsNext} squares={currentSqures} onPlay={handlePlay} />
      </div>
      <div className="">
        <ol className="border p-2 bg-gray-300">{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
