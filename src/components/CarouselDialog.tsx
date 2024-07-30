// src/components/CarouselDialog.tsx
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AutoPlayCarousel } from "./AutoPlayCarousel"; // Import the carousel component

export function CarouselDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Carousel</Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] max-w-full p-6">
        <DialogHeader>
          <DialogTitle>Photo Carousel</DialogTitle>
          <DialogDescription>
            Enjoy browsing through the images.
          </DialogDescription>
        </DialogHeader>
        <AutoPlayCarousel />
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
