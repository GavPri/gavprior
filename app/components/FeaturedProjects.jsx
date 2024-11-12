import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import projectData from "../data/projectData";
import ProjectCard from "../projects/components/ProjectCard";

const FeaturedProjects = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h2 className="font-bold text-xl text-foreground">Featured Projects</h2>
        <Link
          href="/projects"
          className="inline-flex items-center font-thin text-mutedForeground"
        >
          view more <IoIosArrowRoundForward size={25} />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projectData.slice(0, 2).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            tags={project.tags}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
