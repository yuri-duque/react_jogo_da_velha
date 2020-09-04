import React, { useState, useEffect } from 'react';
import './TicTacToe.css';

function TicTacToe() {
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {
    // verifica se há ganhador para impossibilitar novo clique
    if (winner) return null;

    // verifica se a celula clicada estava vazia
    if (board[index] !== "") return null;
    
    // seta a celula clicada na board
    const newBoard = board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item);
    setBoard(newBoard);

    // trocando usuário atual
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  const checkWinner = () => {
    const possibleWatsToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    possibleWatsToWin.forEach(cells => {
      if (cells.every(cell => cell === "X")) setWinner("X venceu!");

      else if (cells.every(cell => cell === "O")) setWinner("O venceu!");
    })

    checkDraw();
  }

  useEffect(checkWinner, [board]);

  const checkDraw = () => {
    // "board.every" verifica se para todos os itens a condiçao é verdadeira 
    if(board.every(item => item !== "") && !winner){
      // empate
      setWinner("Empatou!");
    }
  }

  const resetGame = () => {
    setCurrentPlayer("");
    setBoard(emptyBoard);
    setWinner(null);
  }

  return (
    <main>
      <h1 className="title">JOGO DA VELHA</h1>

      <div className={`board ${winner ? "game-over" : ""}`}>

        {board.map((item, index) => (
          <div key={index} className={`cell ${item}`} onClick={() => handleCellClick(index)}>
            {item}
          </div>
        ))}

      </div>

      {winner &&
        <footer>
          <h2 className="winner-message">
            <span className={winner}>{winner}</span>
        </h2>

        <button onClick={resetGame}>Recomeçar jogo!</button>
        </footer>
      }
    </main>
  );
}

export default TicTacToe;
