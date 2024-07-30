// src/components/GameCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Game {
  image: string;
  name: string;
  description: string;
  link: string;
  badge: string; // Add badge property
}

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={game.link} className="block group overflow-hidden relative">
      <Card className="relative transition-transform border border-gray-300 dark:border-gray-700">
        <div className="group-hover:scale-105 transform transition-transform">
          <CardHeader className="p-0">
            {/* image */}
            <div className="relative w-full h-[350px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
              <img
                className="absolute bottom-0 shadow-2xl"
                src={game.image}
                alt={game.name}
                width={447}
                height={400}
                loading="lazy"
              />
              <Badge variant="destructive" className="absolute top-8 left-8">
                {game.badge}
              </Badge>
            </div>
          </CardHeader>
          <div className="">
            {/* Game details */}
            <div className="h-full px-8 py-6">
              <h4 className="h4 mb-1">{game.name}</h4>
              <p className="text-muted-foreground text-lg">
                {game.description}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default GameCard;
