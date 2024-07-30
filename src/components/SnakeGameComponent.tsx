// src/components/SnakeGameComponent.tsx
import React, { useState, useCallback } from "react";
import GameArea from "@acm-97/react-snake-game";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SnakeGameComponent: React.FC = () => {
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const stopGame = (value: number) => {
    setScore(value);
    setGameOver(true);
    setIsRunning(false);
  };

  const restartGame = () => {
    setScore(0);
    setIsRunning(true);
    setGameOver(false);
  };

  return (
    <div className="container-fullscreen">
      <Card className="w-full max-w-7xl shadow-lg mx-auto mt-8">
        <CardHeader>
          <CardTitle>Snake Game</CardTitle>
          <CardDescription>Play the classic Snake game.</CardDescription>
        </CardHeader>
        <CardContent>
          {gameOver ? (
            <Card className="w-full max-w-lg mx-auto mt-8">
              <CardHeader>
                <CardTitle>Game Over</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your Score: {score}</p>
              </CardContent>
              <CardFooter>
                <Button onClick={restartGame}>Restart Game</Button>
              </CardFooter>
            </Card>
          ) : (
            <GameArea
              state={{
                isRunning,
                speed: 1000,
                generateObstacles: true,
              }}
              onGameOver={stopGame}
              onEatFood={() => setScore((prevScore) => prevScore + 1)}
              onMove={(snakeHead, food) =>
                console.log("Snake moved:", snakeHead, food)
              }
              styles={{
                gameArea: { border: "2px solid #3498db" },
                snake: { background: "#3498db" },
                food: { background: "#e74c3c" },
              }}
            />
          )}
          {!gameOver && (
            <div className="mt-4">
              <strong>Score:</strong> {score}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SnakeGameComponent;
