// src/pages/Photo.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CarouselDialog } from "@/components/CarouselDialog"; // Import the dialog component

const Photo: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Birthday Photo Carousel</CardTitle>
          <CardDescription>
            Celebrate our special moments with a beautiful photo carousel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Click the button below to view the photo carousel and relive our cherished memories.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <CarouselDialog />
        </CardFooter>
      </Card>
    </div>
  );
};

export default Photo;
