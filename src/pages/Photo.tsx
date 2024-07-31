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
import { CarouselDialog } from "@/components/CarouselDialog"; // Import the dialog component
import AudioPlayer from '@/components/AudioComponent'; // Import the AudioPlayer component

const Photo: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Birthday Photo Carousel</CardTitle>
          <CardDescription>
            Celebrate our special moments with a beautiful photo carousel while listening to handpick good audio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Click the button below to view the photo carousel and relive our cherished memories.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <CarouselDialog />
        </CardFooter>
      </Card>
      <div className="flex justify-center mt-4">
        <AudioPlayer url="https://www.youtube.com/watch?v=8xg3vE8Ie_E&ab_channel=TaylorSwiftVEVO" />
      </div>
    </div>
  );
};

export default Photo;
