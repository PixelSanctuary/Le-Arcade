import React, { useState, useEffect } from 'react';
import './Disc.css';

const Disc = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationDegree, setRotationDegree] = useState(0);

  // Colors for the disc sections
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];

  // Function to handle the click event
  const handleClick = () => {
    setIsSpinning(true);
    // Generate a random degree to land on after spinning
    const randomDegree = Math.floor(Math.random() * 360) + 720; // Landing between 720 and 1080 degrees
    setRotationDegree(randomDegree);
  };

  // Reset spinning state after animation completes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSpinning(false);
    }, 5000); // Adjust the timeout value as needed
    return () => clearTimeout(timeout);
  }, [isSpinning]);

  return (
    <div className={`Disc ${isSpinning ? 'spinning' : ''}`} style={{ transform: `rotate(${rotationDegree}deg)` }}>
      {colors.map((color, index) => (
        <div key={index} className="section" style={{ backgroundColor: color }}></div>
      ))}
      <button onClick={handleClick}>Spin</button>
    </div>
  );
};

export default Disc;
