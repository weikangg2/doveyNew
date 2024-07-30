// src/components/TabsDialog.tsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import Card2024 from "@/components/cards/2024Card";
import Card2025 from "@/components/cards/2025Card";

const TabsDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">View Cards</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Cards</DialogTitle>
          <DialogDescription>
            View your cards for 2024 and in the future.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="2024" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="2024">2024 Card</TabsTrigger>
            <TabsTrigger value="2025">2025 Card</TabsTrigger>
          </TabsList>
          <TabsContent value="2024">
            <Card2024 />
          </TabsContent>
          <TabsContent value="2025">
            <Card2025 />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default TabsDialog;
