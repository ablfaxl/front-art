import { Button } from "@/components/ui/button";
import React from "react";

export const Hero = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center bg-[#666] min-h-[170px] gap-y-6 py-16">
        <h1 className="text-4xl text-white font-bold">Unleash the FrontEnd</h1>
        <p className="text-white">
          Take a leap into the world of web development
        </p>
        <Button className="min-w-[240px]">Explore</Button>
      </div>
    </div>
  );
};
