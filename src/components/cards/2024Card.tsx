// src/components/cards/2024Card.tsx
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

const Card2024: React.FC = () => {
  const cardText = `Hello this is a testttttttttttttttttttttttttttttttttttt
    tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt`;
  return (
    <Card>
      <CardHeader>
        <CardTitle>2024 Card</CardTitle>
        <CardDescription>{cardText}</CardDescription>
      </CardHeader>
      <CardFooter>
        <DialogClose asChild>
          <Button>Close Card</Button>
        </DialogClose>
      </CardFooter>
    </Card>
  );
};

export default Card2024;
