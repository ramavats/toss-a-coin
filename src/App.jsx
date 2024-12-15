import React, { useState } from 'react';
import './App.css';
import coinFlipSound from './coin-flip.mp3'; // Make sure to have this sound file in the src folder

function App() {
  const [result, setResult] = useState('');
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoin = () => {
    setIsFlipping(true);
    const audio = new Audio(coinFlipSound);
    audio.play();

    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setResult(outcome);
      setIsFlipping(false);
    }, 2000); // 3 seconds delay
  };

  return (
    <div className="App">
      <div className={`coin ${isFlipping ? 'flipping' : ''}`}>
        <div className={`coin-face heads ${result === 'Heads' && !isFlipping ? 'show' : ''}`}>
          Heads
        </div>
        <div className={`coin-face tails ${result === 'Tails' && !isFlipping ? 'show' : ''}`}>
          Tails
        </div>
      </div>
      <button onClick={flipCoin} disabled={isFlipping}>
        Flip
      </button>
    </div>
  );
}

export default App;