import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiFramer,
  SiMongodb,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";

const TechStacks = () => {
  const Technologies:any = {
    frontend: {
      Html: <FaHtml5 className="stroke-[#E24E25] fill-[#E24E25]" />,
      Css: <FaCss3Alt className="stroke-[#264DE4] fill-[#264DE4]" />,
      Js: <IoLogoJavascript className="stroke-[#F0DC4E] fill-[#cdb609]" />,
      React: <FaReact className="stroke-[#02DAF9] fill-[#02DAF9]" />,
      Redux: <SiRedux className="stroke-[#774EBF] fill-[#774EBF]" />,
      Tailwindcss: (
        <RiTailwindCssFill className="stroke-[#45BEF9] fill-[#45BEF9]" />
      ),
      Gsap: <img src="https://gsap.com/favicon-32x32.png" className="w-6" />,
      FramerMotion: <SiFramer />,
      swiperjs: (
        <img src="https://swiperjs.com/images/favicon.png" className="w-6" />
      ),
    },
    backend: {
      Node: <FaNode className="stroke-[#609A53] fill-[#609A53]" />,
      Expressjs: <SiExpress className="stroke-[] fill-[]" />,
      Mongodb: <SiMongodb className="stroke-[#18A54F] fill-[#18A54F]" />,

      socketio: <SiSocketdotio />,
      Firebase: <IoLogoFirebase className="stroke-[#FDCC29] fill-[#FDCC29]" />,
      jwtToken: (
        <img
          src="https://1.bp.blogspot.com/-9jhEkn_uApY/Xxx35kNQB1I/AAAAAAAAMKk/8Jrv75ClwUoh8bkUncTzOJIyH2rU6RkjQCLcBGAsYHQ/s1280/jwt.png"
          className="w-12"
        />
      ),
    },
  };

  return (
    <div className="TechStacks w-full h-fit p-5 sm:p-10 flex flex-col">
      {/* heading */}

      <div className="text-2xl sm:text-4xl w-fit leading-tight relative flex">
        <p className="opacity-20">I'm Good At</p>
        <p className="TechStackReveal absolute w-0 whitespace-nowrap overflow-hidden">
          I'm Good <span className="text-[#827EFC]">At</span>
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-10 flex-1 p-5 sm:py-10">
        <div className="Frontend ">
          <button className="block sm:text-2xl border-2  border-textcolor rounded-full leading-tight px-3 py-1">
            Frontend
          </button>

          <div className="frontendContainer flex flex-1 gap-3 flex-wrap mt-2 sm:mt-10">
            {Object.keys(Technologies.frontend).map((tag, i) => (
              <div
                key={i}
                className="frontend bg-cardsbackground text-textcolor flex flex-col opacity-0 scale-0  translate-y-2 sm:min-w-24 sm:h-fit items-center justify-end p-5 rounded-md"
              >
                {" "}
                <div className="text-xl sm:text-3xl">
                  {Technologies.frontend[tag]}
                </div>
                <span className="sm:text-2xl">{tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="Backend">
          <button className="block sm:text-2xl border-2  border-textcolor rounded-full leading-tight px-3 py-1">
            Backend
          </button>

          <div className="backendContainer flex flex-1 gap-3 flex-wrap mt-2 sm:mt-10">
            {Object.keys(Technologies.backend).map((tag, i) => (
              <div
                key={i}
                className="backend bg-cardsbackground text-textcolor flex flex-col opacity-0 scale-0  translate-y-2 sm:min-w-24 sm:h-fit items-center justify-end p-5 rounded-md"
              >
                {" "}
                <div className="text-xl sm:text-3xl">
                  {Technologies.backend[tag]}
                </div>
                <span className="sm:text-2xl">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
