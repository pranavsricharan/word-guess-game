import Result, { LetterResult } from "../model/Result";
import WordGenerationService from "./WordGenerationService";

const MAX_ATTEMPTS = 6;

class WordGuessService {
  private wordGenerationService: WordGenerationService;
  private word?: string;
  private attempts: number;
  
  constructor() {
    this.wordGenerationService = new WordGenerationService();
    this.attempts = 0;
  }

  next() {
    this.word = this.wordGenerationService.nextWord();
  }

  guess(guessWord: string): Result {
    if (!this.canGuess) {
      throw new Error("You have exhausted all your attempts. Start a new game");
    }
    this.attempts++;

    if (guessWord === this.typeSafeWord) {
      const result = Result.correct(this.typeSafeWord);
      delete this.word;
      return result;
    }

    if (this.canGuess) {
      return Result.wrong(this.compareLetters(guessWord));
    } else {
      const result = Result.wrong(this.compareLetters(guessWord), this.typeSafeWord);
      delete this.word;
      return result;
    }

  }

  private compareLetters(guessWord: string) {
    const lettersResult: LetterResult[] = []
    const wordCharacters = this.typeSafeWord.split("")
    const guessWordCharacters = guessWord.split("")

    guessWordCharacters.forEach((letter, index) => {
      if (letter === wordCharacters[index]) {
        lettersResult.push(LetterResult.correctPosition(letter));
      } else if (wordCharacters.includes(letter)) {
        lettersResult.push(LetterResult.incorrectPosition(letter));
      } else {
        lettersResult.push(LetterResult.notPresent(letter));
      }
    });

    return lettersResult;
  }

  private get typeSafeWord() {
    if (!this.word) {
      throw new Error("Game not initialized. Did you forget to call `next()`?")
    }
    return this.word;
  }

  public get canGuess() {
    return this.attempts < MAX_ATTEMPTS;
  }
}

export default WordGuessService;