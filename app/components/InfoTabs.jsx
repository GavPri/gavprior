"use client";

import React, { useState } from "react";
import { IoIosGlobe } from "react-icons/io";
import { BiSmile, BiWinkSmile } from "react-icons/bi";

const InfoTabs = () => {
  const [tab, setTab] = useState("education");

  const handleTabChange = (tab) => {
    setTab(tab);
  };
  return (
    <section className="flex flex-col">
      <div className="h-9 items-center justify-center rounded-lg bg-muted p-1 text-mutedForeground mb-2 grid grid-cols-2">
        <button
          onClick={() => handleTabChange("work")}
          className={
            tab === "work"
              ? "bg-background text-foreground rounded-lg"
              : `opacity-50 inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`
          }
        >
          Work
        </button>
        <button
          onClick={() => handleTabChange("education")}
          className={
            tab === "education"
              ? "bg-background text-foreground rounded-lg shadow-md"
              : `opacity-50 inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`
          }
        >
          Education
        </button>
      </div>
      {tab === "work" && (
        <div className="rounded-lg bg-muted w-full shadow-lg">
          <div className="mx-2 lg:ml-10 lg:pl-4">
            <h4 className="text-lg text-mutedForeground inline-flex justify-evenly items-center my-4 ">
              404 not found, yet! <BiWinkSmile size={20} className="ml-2" />
            </h4>
          </div>
        </div>
      )}
      {tab === "education" && (
        <div className="rounded-lg bg-muted w-full shadow-lg flex flex-col flex-1 justify-start gap-2 py-4 ">
          <div className="mx-2 lg:ml-10 lg:pl-4 lg:border-l">
            <time className="text-xs text-mutedForeground  inline-flex gap-2">
              <span>January 2023</span>
              <span>-</span>
              <span>April 2024</span>
            </time>
            <h2 className="text-foreground text-xl font-bold mb-2">
              Code Institute
            </h2>
            <h3 className="text-mutedForeground text-md md:text-lg font-medium ">
              Diploma in Full Stack Software Development ( Advanced Front End )
            </h3>
            <p className="text-sm text-foreground mb-6">
              Completed a practical, industry-driven program covering front-end,
              back-end, and databases. Developed real-world projects using HTML,
              CSS, JavaScript, Python, and Django.
            </p>
            <a
              href="https://not-twitter-ci-76f2852107f0.herokuapp.com/"
              target="_blank"
            >
              <button className="border py-1 px-2 shadow-md rounded-md text-sm text-foreground inline-flex justify-evenly items-center">
                Final Project <IoIosGlobe size={25} className="ml-2" />
              </button>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default InfoTabs;
