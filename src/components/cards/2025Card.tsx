// src/components/cards/2025Card.tsx
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

const Card2025: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>2025 Card</CardTitle>
        <CardDescription>Coming Soon!</CardDescription>
      </CardHeader>
      <CardFooter>
        <DialogClose asChild>
          <Button>Close Card</Button>
        </DialogClose>
      </CardFooter>
    </Card>
  );
};

export default Card2025;
