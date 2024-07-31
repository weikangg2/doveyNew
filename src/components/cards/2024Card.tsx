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
  const cardText = `hi baby dovey, happy grad, 23rd birthday and 2nd anniversary, hope buahbi can be happy 
                    in this new year that babi is older, decided to do a different version of a card 
                    dis year because babi also keep saying that the table has no more space and dont 
                    want any more extra decorations on the table, so i decided to make wut babi likes 
                    to ply like puzzle n some other games but couldnt make solitaire cus too hard ig 
                    hahahaha, and also made somewhat like a photo gallery with our current highlights, 
                    which can auto play itself too :D hope babi likes dis smol gifty i prepared which 
                    i tot was kinda unique, cus tt dun even hv anyone do dis after i search, lemon8
                    too, so i hope babi likes it, and also hope babi can be happy this year and faster
                    get a job and earn money soon so that we can go and learn driving and eat fuud and 
                    buy more things and go more places together. think that we went through a lot of 
                    things this year and hope that it will only get better from here yerhh, think we 
                    argued a lot this year when i go exchange too, hopefully now when we are together,
                    will argue less and live harmoniously together :D, love love yerh babi ❤️
                    - your fav hubby 😃`;
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
