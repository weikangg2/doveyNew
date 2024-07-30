// src/components/GameMenubar.tsx
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GameMenubarProps {
  setRows: (rows: number) => void;
  setColumns: (columns: number) => void;
  solutionImageSrc: string;
  onRandomImage: () => void;
}

const GameMenubar: React.FC<GameMenubarProps> = ({
  setRows,
  setColumns,
  solutionImageSrc,
  onRandomImage,
}) => {
  return (
    <div className="flex justify-between items-center w-full">
      <Dialog>
        <div className="flex items-center space-x-4">
          <Menubar className="flex-shrink-0">
            <MenubarMenu>
              <MenubarTrigger asChild>
                <div className="cursor-pointer">Settings</div>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarSub>
                  <MenubarSubTrigger>Rows</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem onClick={() => setRows(2)}>2</MenubarItem>
                    <MenubarItem onClick={() => setRows(5)}>5</MenubarItem>
                    <MenubarItem onClick={() => setRows(10)}>10</MenubarItem>
                    <MenubarItem onClick={() => setRows(20)}>20</MenubarItem>
                    <MenubarItem onClick={() => setRows(50)}>50</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSub>
                  <MenubarSubTrigger>Columns</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem onClick={() => setColumns(2)}>2</MenubarItem>
                    <MenubarItem onClick={() => setColumns(5)}>5</MenubarItem>
                    <MenubarItem onClick={() => setColumns(10)}>10</MenubarItem>
                    <MenubarItem onClick={() => setColumns(20)}>20</MenubarItem>
                    <MenubarItem onClick={() => setColumns(50)}>50</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <DialogTrigger asChild>
                  <MenubarItem>Show Solution</MenubarItem>
                </DialogTrigger>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Button onClick={onRandomImage}>New Random Image</Button>
        </div>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Solution</DialogTitle>
            <DialogDescription>
              This is the solution to the puzzle.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <img
              src={solutionImageSrc}
              alt="Solution"
              className="max-w-full h-auto"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GameMenubar;
