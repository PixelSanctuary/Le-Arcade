import React, { useState } from 'react';
import './TrianglePrism.css';

const TrianglePrism = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [resultColor, setResultColor] = useState(null);

  const colors = ['red', 'green', 'blue'];

  const spinPrism = () => {
    setIsSpinning(true);
    setResultColor(null);

    setTimeout(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setResultColor(randomColor);
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className={`triangle-prism ${isSpinning ? 'spin' : ''}`} onClick={spinPrism}>
        <div className='Top' ></div>
        <div className='Bottom' ></div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" fill={resultColor} viewBox="0 -960 960 960" width="24"><path d="m280-400 200-200 200 200H280Z"/></svg>
    </div>
  );
};

export default TrianglePrism;
