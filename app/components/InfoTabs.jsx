"use client";

import React, { useState } from "react";

const InfoTabs = () => {
  const [tab, setTab] = useState("education");

  const handleTabChange = (tab) => {
    setTab(tab);
  };
  return (
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
  );
};

export default InfoTabs;
