import { useEffect } from "react";
import { Template } from "../template";
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
import { animatePageIn } from "../animation/page.anim";
import { Projectslist } from "../data";
import { GrMysql } from "react-icons/gr";

const Projects = () => {
  useEffect(() => {
    animatePageIn();
  }, []);
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

  return (
    <Template page="Projects">
      <div className="Project p-5 w-full min-h-screen">
        <p className="text-4xl">Projects</p>
        <div className="relative z-5 w-full  flex flex-wrap justify-center gap-6 py-5 sm:py-10 px-0 sm:px-10">
          {Projectslist.map((project, i) => {
            return (
              <div
                key={`project${i + 1}`}
                className="w-full h-fit cursor-pointer sm:gap-0 sm:w-[400px] sm:h-[580px] bg-cardsbackground text-textcolor rounded-lg p-6 flex flex-col justify-between transition-all duration-200"
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
                <div className="flex flex-col gap-4">
                  {/* TechStacks */}
                  <ul className="flex-1 flex gap-2 list-none  cursor-pointer">
                    {project.techstacksused.map((stack: string, i: number) => (
                      <li key={`${stack}_${i}`}>{TechStacks[stack]}</li>
                    ))}
                  </ul>
                  {/* live link */}
                  <div className="w-fit flex">
                    {project.githubRepo && (
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        className="mx-1 text-sm transition-all duration-200 scale-90"
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
                      className="mx-1 text-sm transition-all duration-200 scale-90"
                    >
                      <div className="flex items-center text-[#827EFC] pb-[.5px] border-b-2 border-[#827EFC]">
                        Live link
                        <GoArrowUpRight />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {/* see more */}
        </div>
      </div>
    </Template>
  );
};

export default Projects;
