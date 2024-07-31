// src/pages/GameOne.tsx
import React, { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import GameMenubar from "@/components/GameMenuBar";

const puzzleCount = 4;
const photoCount = 40;

const puzzles = Array.from({ length: puzzleCount }, (_, i) => `puzzle${i + 1}.jpg`);
const photos = Array.from({ length: photoCount }, (_, i) => `photo${i + 1}.jpg`);

const allImages = [...puzzles, ...photos];

const GameOne: React.FC = () => {
  const { toast } = useToast();
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [currentImage, setCurrentImage] = useState(allImages[0]);

  const handlePuzzleSolved = () => {
    toast({
      title: "Puzzle Solved!",
      description: "Congratulations, you have solved the puzzle.",
      action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
      className: "bg-green-500 text-white",
    });
  };

  const handleRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * allImages.length);
    setCurrentImage(allImages[randomIndex]);
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-7xl shadow-lg">
        <CardHeader>
          <CardTitle>Jigsaw Puzzle Game</CardTitle>
          <CardDescription>
            Solve the puzzle by arranging the pieces in the correct order.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <GameMenubar
            setRows={setRows}
            setColumns={setColumns}
            solutionImageSrc={currentImage}
            onRandomImage={handleRandomImage}
          />
          <div className="mt-4">
            <JigsawPuzzle
              imageSrc={currentImage}
              rows={rows}
              columns={columns}
              onSolved={handlePuzzleSolved}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameOne;
