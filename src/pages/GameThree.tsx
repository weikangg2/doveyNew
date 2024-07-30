import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Tetris from "react-tetris";
import "../tetris.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TypographyP } from "../typography/Typography";
import { InstructionsPopover } from "../components/InstructionsPopover"; // Adjust the import path as needed

export const GameThree: React.FC = () => {
    const [isGameOver, setIsGameOver] = useState(false);
    const [points, setPoints] = useState(0);
    const [linesCleared, setLinesCleared] = useState(0);
  
    useEffect(() => {
      if (isGameOver) {
        // Open dialog when game is over
        setIsGameOver(true);
      }
    }, [isGameOver]);
  
    return (
      <Card className="w-full max-w-4xl mx-auto mt-8 shadow-lg">
        <CardHeader>
          <CardTitle>Tetris Game</CardTitle>
        </CardHeader>
        <CardContent>
          <Tetris
            keyboardControls={{
              down: "MOVE_DOWN",
              left: "MOVE_LEFT",
              right: "MOVE_RIGHT",
              space: "HARD_DROP",
              z: "FLIP_COUNTERCLOCKWISE",
              x: "FLIP_CLOCKWISE",
              up: "FLIP_CLOCKWISE",
              p: "TOGGLE_PAUSE",
              c: "HOLD",
              shift: "HOLD",
            }}
          >
            {({
              HeldPiece,
              Gameboard,
              PieceQueue,
              points,
              linesCleared,
              state,
              controller,
            }) => {
              useEffect(() => {
                if (state === "LOST") {
                  setIsGameOver(true);
                  setPoints(points);
                  setLinesCleared(linesCleared);
                }
              }, [state, points, linesCleared]);
  
              return (
                <div className="flex flex-col items-center">
                  <div className="flex justify-between w-full mb-2">
                    <div className="flex items-center space-x-4 font-bold">
                      <TypographyP>Points: {points}</TypographyP>
                      <TypographyP>Lines Cleared: {linesCleared}</TypographyP>
                    </div>
                    <div className="flex items-center">
                      <InstructionsPopover />
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full">
                    <div className="mr-4">
                      <TypographyP>Held Piece</TypographyP>
                      <HeldPiece />
                    </div>
                    <div className="mx-4">
                      <TypographyP>Gameboard</TypographyP>
                      <Gameboard />
                    </div>
                    <div className="ml-4">
                      <TypographyP>Next Pieces</TypographyP>
                      <PieceQueue />
                    </div>
                  </div>
                  <Dialog open={isGameOver} onOpenChange={setIsGameOver}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Game Over</DialogTitle>
                        <DialogDescription>
                          Your score: {points}. Lines Cleared: {linesCleared}.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          onClick={() => {
                            setIsGameOver(false);
                            controller.restart();
                          }}
                        >
                          New Game
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              );
            }}
          </Tetris>
        </CardContent>
      </Card>
    );
  };
  
  export default GameThree;