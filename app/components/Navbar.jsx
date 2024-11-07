import React from "react";
import { PiMoonStarsLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <header className="max-w-[900px] sticky top-0 z-20 bg-background/75 py-6 backdrop-blur-sm px-8 bg-background text-foreground">
      <nav className="flex justify-between items-center">
        <ul className="flex gap-4 sm:gap-8">
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-0 sm:ml-4">
          <button className="h-9 w-9 inline-flex justify-center items-center">
            <PiMoonStarsLight size={24} className="text-indigo-500"/>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
