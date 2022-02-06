import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const startGame = () => setGameStarted(true);
  return (
    <div className="app">
      <Header></Header>
        {gameStarted 
          ? (<strong>Game here</strong>)
          : (
            <main className="vertical-center">
              <About></About>
              <button className="start-game" onClick={startGame}>Start</button>
            </main>
          )
        }
    </div>
  );
}

export default App;
