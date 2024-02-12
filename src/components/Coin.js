import React, { useState } from 'react';
import './Coin.css';

function Coin() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [randomNumber,setRandomNumber] = useState(0);


  const handleClick = () => {
    setIsSpinning(true);
    // Randomize duration and easing for realistic spin
    const randomDuration = Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000; // Random duration between 3s to 4s
    const randomEasing = `cubic-bezier(${Math.random().toFixed(2)}, ${Math.random().toFixed(2)}, ${Math.random().toFixed(2)}, ${Math.random().toFixed(2)})`;

    // Apply random duration and easing to the spinning animation
    const coinElement = document.querySelector('.Coin');
    coinElement.style.animation = `coin-spin ${randomDuration}ms ${randomEasing} forwards`;

    // Stop spinning animation after random duration
    setTimeout(() => {
      setIsSpinning(false);
      setRandomNumber((Math.random().toFixed(1)%2)*10)
      coinElement.style.animation = '';
    }, randomDuration);
  };

  const handleKeyPress = (event) => {
    // Check if the pressed key is either 'Enter' or 'Space'
    if ((event.key === 'Enter' || event.key === ' ') && !isSpinning) {
      event.preventDefault(); // Prevent the default action for the key press
      handleClick(); // Trigger the handleClick function
    }
  };

  return (
    <div className={`Coin ${isSpinning ? 'spinning' : ''}`} onClick={handleClick} onKeyDown={handleKeyPress} role="button" tabIndex="0">
      { !isSpinning && <h3>CLICK TO SPIN</h3>}
      <div className={`Coin__side ${isSpinning ? 'Coin__side--switching' : (randomNumber % 2)? 'Coin__side--front' : 'Coin__side--back'}`}>
      </div>
    </div>
  );
}

export default Coin;
