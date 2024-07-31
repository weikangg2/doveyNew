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
  const puzzleCount = 4;
  const photoCount = 40;
  
  const puzzles = Array.from({ length: puzzleCount }, (_, i) => `puzzle${i + 1}.jpg`);
  const photos = Array.from({ length: photoCount }, (_, i) => `photo${i + 1}.jpg`);
  
  const allImages = [...puzzles, ...photos];
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000, // Delay in milliseconds
        }),
      ]}
      className="relative w-full max-w-full overflow-hidden"
    >
      <CarouselContent className="flex">
        {allImages.map((image, index) => (
          <CarouselItem
            key={index}
            className="flex-shrink-0 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-2">
              <Card className="h-[30rem]">
                <CardContent className="flex items-center justify-center h-full p-2">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2  z-10" />
      <CarouselNext className="absolute right-0 top-1/2  z-10" />
    </Carousel>
  );
}
