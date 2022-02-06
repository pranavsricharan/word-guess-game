import React from "react";
import Result, { LetterStatus } from "../model/Result";
import "./GameGridRow.css";

type Props = {
  word?: string
  result?: Result
}

function getPaddedArray(word?:string) {
  const letters =  Array(5).fill('');
  if (!!word) {
    word.split("").forEach((letter, index) => letters[index] = letter);
  }

  return letters;
}

export default function GameGridRow({ word, result }: Props) {
  let letters: string[] = getPaddedArray(word);

  const getClassName = (index: number) => {
    if (!result || !result.letters) {
      return "";
    }

    switch (result.letters[index].status) {
      case LetterStatus.CORRECT_POSITION:
        return 'correct';
      case LetterStatus.INCORRECT_POSITION:
        return 'incorrect-position';
      case LetterStatus.NOT_PRESENT:
        return 'not-present'
    }
  }

  return (
    <div className="game-grid-row">
      {
        letters.map((letter, index) => <div className={getClassName(index)} key={letter + index}>{letter}</div>)
      }
    </div>
  );
}
