import React from "react";
import { Answer, AnswerStatus } from "../model/Result";
import "./GameResult.css";

type Props = {
  result: Answer
}

export default function GameResult({ result }: Props) {
  return (
    <div className="game-result">
      {result.status === AnswerStatus.CORRECT 
        ? <div className="correct">Splendid! Correct answer</div>
        : <div className="wrong">Better luck next time!</div>
      }
      <h1>{result.word}</h1>
      <a href={`https://www.dictionary.com/browse/${result.word}`} target="_blank" rel="noreferrer">Click here</a> for definition.
    </div>
  );
}
