import { Projectslist } from "../data";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 15, // max tilt rotation (degrees)
  perspective: 500, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(0.22, 1, 0.36, 1)", // Easing on enter/exit.
};

const Projects = () => {
  return (
    <>
      <div className="projects w-full h-fit px-5 sm:p-10 flex flex-col">
        
        {/* heading */}
        <div className="text-2xl sm:text-4xl w-fit leading-tight relative flex">
          <p className="opacity-20 whitespace-nowrap overflow-hidden">
            Some of my Recent Projects
          </p>
          <p className="ProjectReveal absolute w-0 whitespace-nowrap overflow-hidden">
            Some of my Recent <span className="text-[#827EFC]">Projects</span>
          </p>
        </div>

        {/* larger screens */}
        <div className="relative z-5 w-full hidden sm:flex flex-wrap justify-center gap-6 py-10 sm:py-20 px-0 sm:px-10">
          {Projectslist?.slice(0, 3)?.map((project, i) => {
            return (
              <Tilt
                key={i}
                options={defaultOptions}
                className="project opacity-0 translate-y-5 cursor-pointer rounded-lg shadow-lg transition-all duration-100 hover:scale-[1.05] "
              >
                <ProjectCard project={project} key={`project${i + 1}`} />
              </Tilt>
            );
          })}
        </div>

        {/* small screens (Mobile) */}
        <div className="relative z-5 w-full  flex sm:hidden flex-wrap justify-center gap-6 py-10 sm:py-20 px-0 sm:px-10">
          {Projectslist?.slice(0, 3)?.map((project, i) => {
            return <ProjectCard project={project} key={`project${i + 1}`} />;
          })}
        </div>

        <div className="w-full relative">
          <Link
            to={"/projects"}
            className="w-fit block ml-auto p-2 px-4 cursor-pointer rounded-full border-[1px] border-[#827EFC]"
          >
            See More Projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
