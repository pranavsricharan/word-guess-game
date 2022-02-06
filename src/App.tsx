import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Game from './components/Game';
import Header from './components/Header';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const startGame = () => setGameStarted(true);
  return (
    <div className="app">
      <Header></Header>
        {gameStarted 
          ? (<Game/>)
          : (
            <main className="vertical-center">
              <About></About>
              <button className="primary" onClick={startGame}>Start</button>
            </main>
          )
        }
    </div>
  );
}

export default App;
