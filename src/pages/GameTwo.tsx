import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChromeDinoGame from "react-chrome-dino";

const GameTwo: React.FC = () => {
  useEffect(() => {
    // Function to remove the second runner-container
    const removeSecondRunnerContainer = () => {
      const runnerContainers = document.querySelectorAll(".runner-container");
      if (runnerContainers.length > 1) {
        runnerContainers[1].remove();
      }
    };

    // Remove the second runner-container after the component mounts
    removeSecondRunnerContainer();

    // Optionally, use a MutationObserver to remove the second runner-container if it gets added dynamically
    const observer = new MutationObserver(removeSecondRunnerContainer);
    observer.observe(document.body, { childList: true, subtree: true });

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Card className="w-full max-w-2xl h-96 mx-auto mt-8 shadow-lg">
      <CardHeader>
        <CardTitle>Dinosaur Jump Game</CardTitle>
        <CardDescription>
          Use Space bar to jump and start the game.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChromeDinoGame />
      </CardContent>
    </Card>
  );
};

export default GameTwo;
