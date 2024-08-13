// src/components/ConfettiAnimation.jsx
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const ConfettiAnimation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Confetti
      width={windowWidth}
      height={windowHeight}
      recycle={false}
      numberOfPieces={800}
    />
  );
};

export default ConfettiAnimation;
