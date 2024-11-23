import { useEffect } from "react";
import { Template } from "../template";
import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { animatePageIn } from "../animation/page.anim";
import { Projectslist } from "../data";

const Projects = () => {
  useEffect(() => {
    animatePageIn();
  }, []);
  const TechStacks: any = {
    Html: <FaHtml5 className="stroke-[#E24E25] fill-[#E24E25]" />,
    Css: <FaCss3Alt className="stroke-[#264DE4] fill-[#264DE4]" />,
    Js: <IoLogoJavascript className="stroke-[#F0DC4E] fill-[#cdb609]" />,
    React: <FaReact className="stroke-[#02DAF9] fill-[#02DAF9]" />,
    Tailwindcss: <RiTailwindCssFill className="stroke-[] fill-[]" />,
    Node: <FaNode className="stroke-[#609A53] fill-[#609A53]" />,
    Expressjs: <SiExpress className="stroke-[] fill-[]" />,
    Mongodb: <SiMongodb className="stroke-[#18A54F] fill-[#18A54F]" />,
  };

  // const defaultOptions = {
  //   reverse: false, // reverse the tilt direction
  //   max: 15, // max tilt rotation (degrees)
  //   perspective: 500, // Transform perspective, the lower the more extreme the tilt gets.
  //   scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  //   speed: 1000, // Speed of the enter/exit transition
  //   transition: true, // Set a transition on enter/exit.
  //   axis: null, // What axis should be disabled. Can be X or Y.
  //   reset: true, // If the tilt effect has to be reset on exit.
  //   easing: "cubic-bezier(0.22, 1, 0.36, 1)", // Easing on enter/exit.
  // };
  return (
    <Template page="Projects">
      <div className="Project p-5 w-full min-h-screen">
        <p className="text-4xl">Projects</p>
        <div className="relative z-5 w-full  flex flex-wrap justify-center gap-6 py-5 sm:py-10 px-0 sm:px-10">
          {Projectslist.map((project, i) => {
            return (

              <div
                key={`project${i + 1}`}
                className="w-full h-fit gap-4 cursor-pointer sm:gap-0 sm:w-[400px] sm:h-[500px] bg-cardsbackground text-textcolor rounded-lg p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-2 hover:scale-[1.03]"
              >
                {/* project image */}
                <div className="w-full h-[300px] rounded-lg cursor-pointer">
                  <img
                    className="w-full h-full object-cover border-2 rounded-lg shadow-md"
                    src={project.image}
                    alt=""
                  />
                </div>
                {/* project description */}
                <div className="mt-2 leading-tight">{project.description}</div>
                {/* TechStackused and live link */}
                <div className="flex items-center">
                  {/* TechStacks */}
                  <ul className="flex-1 flex gap-2 list-none  cursor-pointer">
                    {project.techstacksused.map((stack: string, i: number) => (
                      <li key={`${stack}_${i}`}>{TechStacks[stack]}</li>
                    ))}
                  </ul>
                  {/* live link */}
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      className="mx-1 text-sm transition-all duration-200 scale-90 hover:scale-100"
                    >
                      <div className="flex items-center text-[#827EFC] pb-[.5px] border-b-2 border-[#827EFC]">
                        Github Repo
                        <GoArrowUpRight />
                      </div>
                    </a>
                  )}
                  <a
                    href={project.livelink}
                    target="_blank"
                    className="mx-1 text-sm transition-all duration-200 scale-90 hover:scale-100"
                  >
                    <div className="flex items-center text-[#827EFC] pb-[.5px] border-b-2 border-[#827EFC]">
                      Live link
                      <GoArrowUpRight />
                    </div>
                  </a>
                </div>
              </div>
            );
          })}

          {/* see more */}
        </div>
      </div>
      ;
    </Template>
  );
};

export default Projects;
