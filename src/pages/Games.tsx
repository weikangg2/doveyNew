// src/pages/Games.tsx
import React from "react";
import GameCard from "../components/GameCard";

const games = [
  {
    image: "/game-puzzle.jpg",
    name: "Jigsaw Puzzle",
    description: "Solve our jigsaw puzzle by arranging the pieces.",
    link: "/game-one", // Example link
    badge: "Fav", // Example badge text
  },
  {
    image: "/chrome-dino.jpeg",
    name: "Dino Game",
    description: "Play the dinosaur game and avoid obstacles.",
    link: "/game-two", // Example link
    badge: "Hot", // Example badge text
  },
  {
    image: "/tetris.jpeg",
    name: "Tetris",
    description: "Play the classic game of Tetris.",
    link: "/game-three", // Example link
    badge: "Wow", // Example badge text
  },
  {
    image: "/path/to/game-image2.png",
    name: "Game Two",
    description: "Description of game two.",
    link: "/game-two", // Example link
    badge: "Hot", // Example badge text
  },
];

const Games: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Games;
