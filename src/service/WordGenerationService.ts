import wordList from "../data/five_letter_words.json";

class WordGenerationService {
  private seen: string[];

  constructor() {
    this.seen = [];
  }
  
  nextWord(){
    let word = "";
    do {
      word = wordList[Math.floor(Math.random() * wordList.length)]
    } while(this.seen.includes(word));

    this.seen.push(word);
    return word;
  }
}

export default WordGenerationService;