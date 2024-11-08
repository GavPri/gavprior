import React from "react";

import Image from "next/image";

import { TbFileDownload } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

const PersonalIntro = () => {
  return (
    <section className="flex flex-col items-start mt-8 gap-8">
      <Image
        src="/images/hero.jpg"
        alt="Profile Picture"
        width={200}
        height={200}
        priority
        className="rounded-lg"
      />
      <div>
        <h1 className="text-4xl text-foreground tracking-wide font-bold">
          Hi 👋, Gavin here!
        </h1>
        <p className="text-foreground mt-4 font-light">
          26 year old full stack developer from Ireland {"\u{1F1EE}\u{1F1EA}"}
        </p>
        <p className="text-foreground mt-2 font-light">
          Full-stack developer who loves coding and hiking
        </p>
        <section className="mt-8 flex items-center gap-8">
          <a href="/images/resume.pdf" download="/images/resume.pdf">
            <button className="text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
              <span className="font-semibold">Resume</span>{" "}
              <TbFileDownload size={25} className="ml-2" />
            </button>
          </a>
          <section className="flex gap-6">
            <a
              target="_blank"
              href="https://github.com/GavPri"
              className="text-mutedForeground hover:text-foreground"
            >
              <FiGithub size={24} />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/gavpdev"
              className="text-mutedForeground hover:text-foreground"
            >
              <SlSocialLinkedin size={24} />
            </a>
            <a
              href="mailto:gavinprior13@example.com"
              className="text-mutedForeground hover:text-foreground"
            >
              <TfiEmail size={24} />
            </a>
          </section>
        </section>
      </div>
    </section>
  );
};

export default PersonalIntro;
