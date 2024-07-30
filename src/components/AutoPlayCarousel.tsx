// src/components/AutoPlayCarousel.tsx
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function AutoPlayCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000, // Delay in milliseconds
        }),
      ]}
      className="w-full max-w-full"
    >
      <CarouselContent>
        {["puzzleTwo.jpg", "puzzleThree.jpg", "puzzleFour.jpg", "puzzleOne.jpg"].map((image, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
