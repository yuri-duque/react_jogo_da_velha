import React, { useState } from 'react';
import './TicTacToe.css';

function TicTacToe() {
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState(emptyBoard);

  const [currentPlayer, setCurrentPlayer] = useState("O");

  const handleCellClick = (index) => {
    const newBoard = board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item );
    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X" )
  }

  return (
    <main>
      <h1 className="title">JOGO DA VELHA</h1>

      <div className="board">

        {board.map((item, index) => (
          <div key={index} className={`cell ${item}`} onClick={() => handleCellClick(index)}>
            {item}
          </div>
        ))}

      </div>
    </main>
  );
}

export default TicTacToe;
