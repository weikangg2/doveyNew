// src/pages/GameFour.tsx
import React from 'react';
import SnakeGameComponent from '../components/SnakeGameComponent';

const GameFour: React.FC = () => {
  return (
    <div className=" mx-auto p-4 flex justify-center">
      <SnakeGameComponent />
    </div>
  );
};

export default GameFour;
