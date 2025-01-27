import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiFramer,
  SiGreensock,
  SiMongodb,
  SiPassport,
  SiRedis,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";
import { Projectslist } from "../data";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import { GrMysql } from "react-icons/gr";

const TechStacks: any = {
  Html: <FaHtml5 className="stroke-[#E24E25] fill-[#E24E25]" />,
  Css: <FaCss3Alt className="stroke-[#264DE4] fill-[#264DE4]" />,
  Js: <IoLogoJavascript className="stroke-[#F0DC4E] fill-[#cdb609]" />,
  React: <FaReact className="stroke-[#02DAF9] fill-[#02DAF9]" />,
  Redux: <SiRedux className="stroke-[#744DB6] fill-[#744DB6]" />,
  Passport: <SiPassport className="stroke-[#5FDD67] fill-[#5FDD67]" />,
  Tailwindcss: <RiTailwindCssFill className="stroke-[] fill-[]" />,
  Node: <FaNode className="stroke-[#609A53] fill-[#609A53]" />,
  Expressjs: <SiExpress className="stroke-[] fill-[]" />,
  Mongodb: <SiMongodb className="stroke-[#18A54F] fill-[#18A54F]" />,
  Scoketio: <SiSocketdotio />,
  Redis: <SiRedis className="stroke-[#FF4438] fill-[#FF4438]" />,
  Mysql: <GrMysql className="stroke-[#015980] fill-[#015980]" />,
  Framermotion: <SiFramer />,
  Gsap: <SiGreensock className="stroke-[#0FE141] fill-[#0FE141]" />,
};

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
                <div
                  key={`project${i + 1}`}
                  className="w-full h-fit cursor-pointer sm:gap-0 sm:w-[400px] sm:h-[570px] bg-cardsbackground text-textcolor rounded-lg p-6 flex flex-col gap-y-12 justify-between"
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
                  <div className="mt-2 leading-tight">
                    {project.description}
                  </div>
                  {/* TechStackused and live link */}
                  <div className="flex flex-col gap-2">
                    {/* TechStacks */}
                    <ul className="flex-1 flex gap-2 list-none  cursor-pointer">
                      {project.techstacksused.map(
                        (stack: string, i: number) => (
                          <li key={`${stack}_${i}`}>{TechStacks[stack]}</li>
                        )
                      )}
                    </ul>
                    {/* live link */}
                    <div className="w-fit flex self-end">
                      {project.githubRepo && (
                        <a
                          href={project.githubRepo}
                          target="_blank"
                          className="mx-1 w-fit self-end text-sm transition-all duration-200 scale-90 hover:scale-100"
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
                        className="mx-1 w-fit text-sm transition-all duration-200 scale-90 hover:scale-100"
                      >
                        <div className="flex items-center text-[#827EFC] pb-[.5px] border-b-2 border-[#827EFC]">
                          Live link
                          <GoArrowUpRight />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            );
          })}

          {/* see more */}
        </div>

        {/* small screens (Mobile) */}
        <div className="relative z-5 w-full  flex sm:hidden flex-wrap justify-center gap-6 py-10 sm:py-20 px-0 sm:px-10">
          {Projectslist?.slice(0, 3)?.map((project, i) => {
            return (
              <div
                key={`project${i + 1}`}
                className="w-full h-fit gap-4 cursor-pointer sm:gap-0 sm:w-[400px] sm:h-[500px] bg-cardsbackground text-textcolor rounded-lg p-6 flex flex-col justify-between"
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
