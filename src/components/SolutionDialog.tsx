// src/components/SolutionDialog.tsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SolutionDialogProps {
  imageSrc: string;
  trigger: React.ReactNode;
}

const SolutionDialog: React.FC<SolutionDialogProps> = ({ imageSrc }) => {
  return (
    <Dialog>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Solution</DialogTitle>
          <DialogDescription>
            This is the solution to the puzzle.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <img src={imageSrc} alt="Solution" className="max-w-full h-auto" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SolutionDialog;
