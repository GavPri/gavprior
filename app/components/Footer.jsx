import React from "react";
import { FiGithub } from "react-icons/fi";
import { MdOutlineCopyright } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <section className="w-full h-16 mb-4 flex justify-between items-center">
      <p className="text-mutedForeground inline-flex items-center">
        <span>
          <MdOutlineCopyright className="mr-2" />
        </span>{" "}
        gavprior.com{" "}
      </p>
      <ul className="flex gap-6">
        <a
          target="_blank"
          href="https://github.com/GavPri"
          className="text-mutedForeground hover:text-foreground"
        >
          <FiGithub size={20} />
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/gavpdev"
          className="text-mutedForeground hover:text-foreground"
        >
          <SlSocialLinkedin size={20} />
        </a>
        <a
          href="mailto:gavinprior13@example.com"
          className="text-mutedForeground hover:text-foreground"
        >
          <TfiEmail size={20} />
        </a>
      </ul>
    </section>
  );
}

export default Footer