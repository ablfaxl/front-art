import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

export const Courses = () => {
  return (
    <div className="px-[160px] mt-16">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-2xl font-bold">Featured Courses</h1>
          <p className="font-light font-sans">
            Discover top-notch front end courses
          </p>
          <Button className="min-w-[240px]">View All Courses</Button>
        </div>
        <div className="size-[180px] bg-gray-300"></div>
      </div>
      <div className="mt-16 flex w-full items-center justify-between">
        {Array.from([1, 2, 3], (x) => (
          <Card key={x} />
        ))}
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="max-w-[340px] w-full min-h-[420px] border rounded">
      <div className="min-h-[340px] bg-[#D9D9D9] relative flex items-center justify-center text-sm font-sans">
        <Badge
          className="absolute rounded-l-none rounded-tr-none bg-[#e0e0e0] top-0 left-0 font-light font-sans"
          variant="outline"
        >
          New
        </Badge>
        Illustration of HTML5 logo
      </div>
      <div className="p-3">
        <p className="font-sans">HTML5 Essentials</p>
        <h3 className="font-bold text-xl">Intermediate Level</h3>
      </div>
    </div>
  );
};
