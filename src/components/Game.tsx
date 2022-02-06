import React, { useState } from "react";
import Result, { Answer } from "../model/Result";
import WordGuessService from "../service/WordGuessService";
import "./Game.css";
import GameGridRow from "./GameGridRow";
import GameResult from "./GameResult";
import KeyboardInput from "./KeyboardInput";

function getEmptyWordGrid(): string[] {
  return Array(6).fill("");
}

function getEmptyResults(): (Result | undefined)[] {
  return Array(6);
}

const wordGuessService = new WordGuessService();
wordGuessService.next();

export default function Game() {
  const [wordGrid, setWordGrid] = useState(getEmptyWordGrid())
  const [results, setResults] = useState(getEmptyResults());
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState<Answer>();
  const onChange = (text: string) => {
    setInput(text);
    wordGrid[currentAttempt] = input;
    setWordGrid(
      [
        ...wordGrid.slice(0, currentAttempt),
        text,
        ...wordGrid.slice(currentAttempt + 1)
      ]
    );
  }
  const onSubmit = (text: string) => {
    const result = wordGuessService.guess(text);
    setInput("");
    setCurrentAttempt(currentAttempt + 1);
    setResults([
      ...results.slice(0, currentAttempt),
      result,
      ...results.slice(currentAttempt + 1)
    ]);
    setAnswer(result.answer)
  } 

  const reset = () => {
    wordGuessService.next();
    setAnswer(undefined);
    setCurrentAttempt(0);
    setInput("");
    setResults(getEmptyResults());
    setWordGrid(getEmptyWordGrid());
  };

  return <main className="game">
    <div className="game-grid">
      {
        wordGrid
          .map((word, index) => 
            (<GameGridRow key={word + index} result={results[index]} word={word} />)
          )
      }
    </div>
    {!wordGuessService.canGuess && (
      <div className="game-result-container">
        <GameResult result={answer} />
        <button className="primary" onClick={reset}>New game</button>
      </div>
      )}
    {wordGuessService.canGuess && <KeyboardInput input={input} onChange={onChange} onSubmit={onSubmit} />}
  </main>;
}
