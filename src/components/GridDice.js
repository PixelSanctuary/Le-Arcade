import React, { useState, useEffect } from 'react';
import './GridDice.css';

const GridDice = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const colors = ['none','#FF0000', '#00FF00', '#0000FF', '#FFFF00'];

  // Function to handle the click event
  const startSwap = () => {
    if (!isSwitching) {
      setIsSwitching(true);
      setTimeout(() => {
        setIsSwitching(false);
        setCurrentColorIndex(Math.floor(Math.random() * 4) + 1); // update color index between 1-4
      }, 4000); // Adjust the timeout value as needed
    }
  };

  return (
    <div className={`GridDice ${isSwitching ? 'Swapping' : '' }`} style={{ backgroundColor: colors[currentColorIndex] }} onClick={startSwap}>
      <div className={` ${isSwitching ? 'side1-disco' : currentColorIndex || 'side1'}`}></div>
      <div className={` ${isSwitching ? 'side2-disco' : currentColorIndex || 'side2'}`}></div>
      <div className={` ${isSwitching ? 'side3-disco' : currentColorIndex || 'side3'}`}></div>
      <div className={` ${isSwitching ? 'side4-disco' : currentColorIndex || 'side4'}`}></div>
    </div>
  );
};

export default GridDice;
