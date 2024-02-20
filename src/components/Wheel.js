import React, { useState, useEffect } from 'react';
import './Wheel.css';

const Wheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0);
  const [rotationDegree, setRotationDegree] = useState(0);

  // Function to handle the click event
  const handleClick = () => {
    setIsSpinning(true);
    // Set a random rotation speed between 10 and 20 degrees per frame
    const randomSpeed = Math.random() * (20 - 10) + 10;
    setRotationSpeed(randomSpeed);
  };

  // Function to update rotation degree
  const updateRotation = () => {
    if (isSpinning) {
      // Increment rotation degree based on rotation speed
      setRotationDegree((prevDegree) => (prevDegree + rotationSpeed) % 360);
    }
  };

  // Start and stop spinning animation
  useEffect(() => {
    const interval = setInterval(updateRotation, 60); // Update rotation every frame (60fps)
    return () => clearInterval(interval);
  }, [isSpinning, rotationSpeed]);

  // Stop spinning after a certain duration
  useEffect(() => {
    if (isSpinning) {
      const timeout = setTimeout(() => {
        setIsSpinning(false);
      }, 5000); // Adjust the timeout value as needed
      return () => clearTimeout(timeout);
    }
  }, [isSpinning]);

  return (
    <div onClick={handleClick} className={`Wheel ${isSpinning ? 'spinning' : ''}`} style={{ transform: `rotate(${rotationDegree}deg)` }}>
      <div className="spinner-1"></div>
      <div className="spinner-2"></div>
      <div className="spinner-3"></div>
      <div className="spinner-4"></div>
      <div className="spinner-5"></div>
    </div>
  );
};

export default Wheel;
