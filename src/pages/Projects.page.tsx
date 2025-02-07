import { useEffect } from "react";
import { Template } from "../template";

import { animatePageIn } from "../animation/page.anim";
import { Projectslist } from "../data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <Template page="Projects">
      <div className="Project p-5 w-full min-h-screen">
        <p className="text-4xl">Projects</p>
        <div className="relative z-5 w-full  flex flex-wrap justify-center gap-6 py-5 sm:py-10 px-0 sm:px-10">
          {Projectslist.map((project, i) => {
            return <ProjectCard project={project} key={`project${i + 1}`} />;
          })}
        </div>
      </div>
    </Template>
  );
};

export default Projects;
