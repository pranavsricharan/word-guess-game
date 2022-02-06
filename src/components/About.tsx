import React from "react";
import "./About.css";

export default function About() {
  return (
  <section className="about-content">
    <p>This is a small React project inspired by the famous Wordle game. This game has no association with the developers of the original game. This is created solely for educational purposes. No copyright infringement intended.</p>
    <p>
    Checkout the original game <a href="https://www.powerlanguage.co.uk/wordle/" title="Original Wordle game" target="_blank" rel="noreferrer">here</a>.<br />

    Checkout the code to this react app <a href="https://github.com/pranavsricharan/word-guess-game/" target="_blank" rel="noreferrer">here</a>
    </p>
  </section>);
}
