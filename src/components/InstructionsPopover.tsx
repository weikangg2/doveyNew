import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const InstructionsPopover: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="destructive">Instructions</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4 p-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Controls</h4>
            <ul className="list-disc pl-4">
              <li>Move Left: Left Arrow</li>
              <li>Move Right: Right Arrow</li>
              <li>Move Down: Down Arrow</li>
              <li>Hard Drop: Space</li>
              <li>Rotate Clockwise: X or Up Arrow</li>
              <li>Rotate Counter-Clockwise: Z</li>
              <li>Pause: P</li>
              <li>Hold: C or Shift</li>
            </ul>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
