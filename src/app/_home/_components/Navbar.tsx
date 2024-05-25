import React from "react";
import { SearchInput } from "@/components/ui/search-Input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md flex items-center justify-between p-4 2xl:container">
      <div className="flex items-center gap-x-5">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <p className="text-2xl leading-9 font-extrabold">FrontEnd Explorer</p>
      </div>
      <div className="flex items-center gap-x-10">
        <ul className="flex items-center gap-x-10">
          <li className="cursor-pointer hover:text-slate-500 duration-300 text-lg">
            Home
          </li>
          <li className="cursor-pointer hover:text-slate-500 duration-300 text-lg">
            About
          </li>
          <li className="cursor-pointer hover:text-slate-500 duration-300 text-lg">
            Courses
          </li>
          <li className="cursor-pointer hover:text-slate-500 duration-300 text-lg">
            Projects
          </li>
        </ul>
        <SearchInput
          className="min-w-48"
          type="text"
          placeholder="search on site"
        />
      </div>
    </div>
  );
};
