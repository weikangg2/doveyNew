// src/components/Hero.tsx
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust this import based on your actual ShadCN UI library structure
import TabsDialog from "./TabsDialog";

const Hero: React.FC = () => {
  const images = [
    { url: "/dovey-logo.png" },
    { url: "/dovey-logo.png" },
    { url: "/dovey-logo.png" },
    { url: "/dovey-logo.png" },
    { url: "/dovey-logo.png" },
  ];

  const backgroundImage = "/home-bg.jpg"; // Ensure this path is correct

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, my name is Ryan Davis
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Brief description with insights into myself, my vocational journey,
            and what I engage in professionally.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <TabsDialog />
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <img
                        src={image.url}
                        alt={`Carousel Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-black dark:text-white" />
              <CarouselNext className="text-black dark:text-white" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
