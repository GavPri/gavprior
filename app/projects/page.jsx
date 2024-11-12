import React from "react";
import ProjectCard from "./components/ProjectCard";
import projectData from "../data/projectData";

const page = () => {
  console.log(projectData || "No Data");
  return (
    <section className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="text-4xl text-foreground tracking-wide font-bold">
        My Projects
      </h1>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Map through the array and render a ProjectCard for each project */}
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            tags={project.tags}
            githubLink={project.githubLink}
          />
        ))}
      </section>
    </section>
  );
};

export default page;
