"use client";
import React, { useState, useEffect } from "react";
import { PiMoonStarsLight } from "react-icons/pi";
import { TbSunLow } from "react-icons/tb";
import Link from "next/link";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  // Check local storage or system preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    } else {
      // Check system preference if no theme is set in localStorage
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.body.classList.add(initialTheme);
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.replace(theme, newTheme); // Swap body class

    // Save to localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="max-w-3xl w-full sticky top-0 z-20 bg-background/75 py-6 backdrop-blur-sm px-8 sm:px-0 bg-background text-foreground">
      <nav className="flex justify-between items-center">
        <ul className="flex gap-4 sm:gap-8">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </ul>
        <div className="flex gap-0 sm:ml-8">
          <button
            className="h-9 w-9 inline-flex justify-center items-center"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <PiMoonStarsLight size={25} className="text-indigo-500" />
            ) : (
              <TbSunLow size={25} className="text-orange-300" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
