// src/components/AutoPlayCarousel.tsx
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function AutoPlayCarousel() {
  const photos = [
    "puzzleTwo.jpg",
    "puzzleThree.jpg",
    "puzzleFour.jpg",
    "puzzleOne.jpg",
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg",
    "photo9.jpg",
    "photo10.jpg",
    "photo11.jpg",
    "photo12.jpg",
    "photo13.jpg",
    "photo14.jpg",
    "photo15.jpg",
    "photo16.jpg",
    "photo17.jpg",
    "photo18.jpg",
    "photo19.jpg",
    "photo20.jpg",
    "photo21.jpg",
    "photo22.jpg",
    "photo23.jpg",
    "photo24.jpg",
    "photo25.jpg",
    "photo26.jpg",
    "photo27.jpg",
    "photo28.jpg",
    "photo29.jpg",
    "photo30.jpg",
    "photo31.jpg",
    "photo32.jpg",
    "photo33.jpg",
    "photo34.jpg",
    "photo35.jpg",
    "photo36.jpg",
  ];
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000, // Delay in milliseconds
        }),
      ]}
      className="w-full max-w-full"
    >
      <CarouselContent className="flex">
        {photos.map((image, index) => (
          <CarouselItem key={index} className="flex-shrink-0 w-full p-2">
            <Card className="h-[30rem]">
              <CardContent className="flex items-center justify-center h-full p-2">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
