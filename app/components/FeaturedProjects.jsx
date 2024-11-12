import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const FeaturedProjects = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h2 className="font-bold text-xl text-foreground">Featured Projects</h2>
        <Link href="/projects" className="inline-flex items-center font-thin text-mutedForeground">
          view more <IoIosArrowRoundForward size={25} />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
