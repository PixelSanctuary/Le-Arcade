import React, { useState, useEffect } from 'react';
import './Wheel.css';

const Wheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationDegree, setRotationDegree] = useState(0);

  // Function to handle the click event
  const handleClick = () => {
    // setRotationDegree(0) need to improvise the spining logic
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
    <div onClick={handleClick} className={`Wheel ${isSpinning ? 'spinning' : ''}`} style={{ transform: `rotate(${rotationDegree}deg)` }}>
      <div className="spinner"></div>
    </div>
  );
};

export default Wheel;
