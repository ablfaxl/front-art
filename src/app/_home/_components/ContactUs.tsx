import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const ContactUs = () => {
  return (
    <div>
      <hr className="w-full my-16" />
      <div className="px-[160px] mt-16 flex items-center justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold">Get in Touch</h1>
          <p className="text-sm font-sans">
            Have a question or suggestion? Feel free to reach out
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Your Name</Label>
            <Input size={50} type="text" id="name" placeholder="Name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email Address</Label>
            <Input size={50} type="email" id="email" placeholder="Email" />
          </div>
          <Button className="w-1/2">Submit</Button>
        </div>
      </div>
    </div>
  );
};
