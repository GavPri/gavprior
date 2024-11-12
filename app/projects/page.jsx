import React from "react";
import ProjectCard from "./components/ProjectCard";
const projectData = [
  {
    title: "GoWithSoph",
    description:
      "A mern stack travel blog built for my girlfriend, Sophie. Built with user authentication which allows users to like and comment on posts.",
    imageSrc: "/images/gowithsophsnippet.jpg", // Path to the project image
    tags: ["Node.js", "Express.js", "React.js", "TailwindCSS", "MongoDB"],
    githubLink: "https://github.com/GavPri/go-with-soph-mern",
  },
  {
    title: "Not Twitter Front End",
    description:
      "A simple social media site built with React.js and TailwindCSS, connecting to a Django RESTful API for handling user authentication, posts, comments, likes, and following users.",
    imageSrc: "/images/notTwitterBanner.jpg", // Path to the project image
    tags: ["React.js", "TailwindCSS"],
    githubLink: "https://github.com/GavPri/twitter_front_end",
  },
  {
    title: "Not Twitter Restful API",
    description:
      "A Django RESTful API for a social media site, handling user authentication, posts, comments, likes, and user follow functionality, providing a secure and scalable backend for seamless interaction.",
    imageSrc: "/images/notTwitterAPIBanner.jpg",
    tags: ["Python", "Django"],
    githubLink: "https://github.com/GavPri/Twitter_Clone_API",
  },
];

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
