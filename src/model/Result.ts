export enum AnswerStatus {
  CORRECT,
  WRONG
}
export class Answer {
  private constructor(public readonly status: AnswerStatus, public readonly word?: string) {}

  public static correct(word: string) {
    return new Answer(AnswerStatus.CORRECT, word);
  }

  public static wrong(word?: string) {
    return new Answer(AnswerStatus.WRONG, word);
  }
}

export enum LetterStatus {
  CORRECT_POSITION,
  INCORRECT_POSITION,
  NOT_PRESENT
}

export class LetterResult {
  private constructor(public readonly letter: string, public readonly status: LetterStatus) {}

  public static correctPosition(letter: string) {
    return new LetterResult(letter, LetterStatus.CORRECT_POSITION);
  }

  public static incorrectPosition(letter: string) {
    return new LetterResult(letter, LetterStatus.INCORRECT_POSITION);
  }

  public static notPresent(letter: string) {
    return new LetterResult(letter, LetterStatus.NOT_PRESENT);
  }
}

export class Result {
  private constructor(
    public readonly answer: Answer,
    public readonly letters?: LetterResult[]) {}

  public static correct(word: string) {
    return new Result(Answer.correct(word));
  }

  public static wrong(letters: LetterResult[], word?: string) {
    return new Result(Answer.wrong(word), letters);
  }
}

export default Result