import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Banner = () => {
  return (
    <div className="w-full flex items-center justify-between min-h-[170px] px-[160px]">
      <div>
        <div className="flex items-center gap-x-10">
          <Avatar className="size-24">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div className="space-y-3">
            <h3 className="text-2xl font-extrabold">Space Voyager</h3>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="font-normal">
                FrontEnd Enthusiast
              </Badge>
              <Badge variant="secondary" className="font-normal">
                Spacer
              </Badge>
            </div>
            <p>
              Embark on a journey to explore the wonders of front end
              development.
            </p>
          </div>
        </div>
      </div>
      <Button size="lg">Start Journey</Button>
    </div>
  );
};
