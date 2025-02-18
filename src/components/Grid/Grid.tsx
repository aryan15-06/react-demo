import { useState } from "react";
import Card from "../Card/Card";
import {ToastContainer, toast} from 'react-toastify';
import './Grid.css'
import 'react-toastify/dist/ReactToastify.css';
import React from "react";


interface GridProps {
    numberOfCards: number;
}

function isWinner(board: string[], symbol: string): string {
    console.log(board, symbol)
    if(board[0] == board[1] && board[1] == board[2] && board[2] == symbol)return symbol;
    if(board[3] == board[4] && board[4] == board[5] && board[5] == symbol)return symbol;
    if(board[6] == board[7] && board[7] == board[8] && board[8] == symbol)return symbol;


    if(board[0] == board[3] && board[3]  == board[6] && board[3]== symbol)return symbol;
    if(board[1] == board[4] && board[4] == board[7] && board[4] == symbol)return symbol;
    if(board[2] == board[5] && board[5] == board[8] && board[5]  == symbol)return symbol;

    if(board[0] == board[4] &&  board[4] == board[8] &&  board[4]  == symbol)return symbol;
    if(board[2] == board[4] &&  board[4] == board[6] &&   board[4] == symbol)return symbol;

    return "";
}


const Grid: React.FC<GridProps> =  ({numberOfCards}) => {
    const [turn, setTurn] = useState<boolean>(true);
    const [board, setBoard] = useState<string[]>(Array(numberOfCards).fill(""));
    const [winner, setWinner] = useState<string | null>(null);
    const [isDraw, setIsDraw] = useState<boolean>(false);


  function play(index: number): void {
      if (board[index] !== "" || winner) return;

      board[index] = turn ? "O" : "X";
      setBoard([...board]);

      const win = isWinner(board, turn ? "O" : "X");

      if(win){
        setWinner(win);
        toast(`Congratulation ${win} won the game!`);
        return;
      }

      if(!board.includes("") && !win){
        setIsDraw(true);
        toast("Game is Draw!");
      }

      setTurn(!turn);
  }


  const reset = (): void => {
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
    setIsDraw(false);
    setTurn(true);
  }
  return (
    <div className="grid-wrapper">
        <ToastContainer position="top-center" />
        {winner && (
            <>
                <h1 className="turn-highlight">Winner is {winner}</h1>
                <button className="reset" onClick={reset}>Reset Game</button>
            </>
        )}
        {isDraw && (
            <>
                <h1 className="turn-highlight">Game is a Draw!</h1>
                <button className="reset" onClick={reset}>Reset Game</button>
            </>
        )}
        {!winner && !isDraw && (
            <h1 className="turn-highlight">Current Turn: {turn ? 'O' : 'X'}</h1>
        )}
        <div className="grid">
            {board.map((value, idx) => (
                <Card
                    gameEnd={winner || isDraw}
                    onPlay={play}
                    player={value}
                    key={idx}
                    index={idx}
                />
            ))}
        </div>
    </div>
);
}

export default Grid