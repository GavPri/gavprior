import Image from "next/image";

const ProjectCard = ({ title, description, imageSrc, tags, githubLink }) => {
  return (
    <div className="rounded-xl border bg-card text-cardForeground shadow flex flex-col">
      {/* Image Section */}
      <div className="flex flex-col space-y-1.5 p-6">
        <a href={imageSrc}>
          <Image
            alt={title}
            loading="lazy"
            width={500}
            height={300}
            className="h-40 w-full object-cover object-top"
            src={imageSrc}
            style={{ color: "transparent" }}
          />
        </a>
      </div>

      {/* Title and Description Section */}
      <div className="p-6 pt-0 flex flex-col gap-2">
        <h3 className="font-semibold leading-none tracking-tight text-foreground">{title}</h3>
        <div className="prose max-w-full text-pretty font-sans text-xs text-mutedForeground dark:prose-invert">
          <p>{description}</p>
        </div>
      </div>

      {/* Tags Section */}
      <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondaryForeground hover:bg-secondary/80 px-1 py-0 text-[10px]"
            >
              {tag}
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="flex flex-row flex-wrap items-start gap-1">
          <a target="_blank" href={githubLink} rel="noopener noreferrer">
            <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primaryForeground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github size-3"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              Source
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
