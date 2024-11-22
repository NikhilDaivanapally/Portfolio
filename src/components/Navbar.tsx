import React, { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "../animation/Menu.anim";
// import Text3D from "./ui/Text3D";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Navigates } from "../data";
import { Link, useLocation } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
interface navProps {
  navbar: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}
// interface Navigates
// const Navigates: string[] = ["Projects", "Contact", "About"];
const Navbar: React.FC<navProps> = ({ navbar, isMenuOpen, setIsMenuOpen }) => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="fixed z-50 right-5 top-5 flex items-center gap-2">
      { !(pathname == "/") && <Link to={"/"} className="sm:hidden">
          <div className="w-10 h-10 rounded-full bg-background border-[1px] flex items-center justify-center border-[#c9c7fe]">
            <BiHomeAlt2 className="text-xl" />
          </div>
        </Link>}
        <div
          className={`relative w-10 h-10 flex cursor-pointer transition-all duration-100 ease-in bg-background ring-1 ring-[#c9c7fe] rounded-full sm:scale-0 ${
            navbar ? "sm:scale-100" : ""
          }
  after:transition-all after:duration-200 after:ease-[cubic-bezier(0.22, 1, 0.36, 1)] after:content-[''] after:w-6 after:h-[1.5px] after:rounded-full after:bg-textcolor after:absolute after:left-1/2 after:-translate-x-1/2 ${
    isMenuOpen ? "after:top-1/2 after:rotate-45" : "after:top-6"
  }
  before:transition-all before:duration-200 before:ease-[cubic-bezier(0.22, 1, 0.36, 1)] before:content-[''] before:w-6 before:h-[1.5px] before:rounded-full before:bg-textcolor before:absolute before:left-1/2 before:-translate-x-1/2 ${
    isMenuOpen ? "before:top-1/2 before:-rotate-45" : "before:top-4"
  }`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <div
            className="fixed z-40 inset-0 bg-[rgba(0,0,0,0.5)]"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="absolute right-0 top-0 w-[350px] h-full bg-background text-textcolor text-black p-[50px]"
            >
              <div className="py-2 border-b-2 border-black">Take Me To</div>
              <div className=" w-[200px] mt-5 flex flex-col gap-10">
                {Navigates.map((el, i) => (
                  <Link to={el.path}>
                    <span
                      key={i}
                      className={`relative w-fit flex cursor-pointer text-5xl font-semibold group hover:text-[#827EFC]`}
                    >
                      <MdOutlineArrowForwardIos
                        className={`leading-none transition-all duration-300 w-0  group-hover:w-8`}
                      />{" "}
                      {el.name}
                    </span>
                  </Link>

                  // <Text3D key={i} primary={val} secondary={val} />
                ))}
              </div>
              <div className="mt-40">Follow Me On</div>
              <div className="text-3xl flex justify-around mt-5">
                <FaGithub className="cursor-pointer transition-all duration-100 rounded-full hover:text-white hover:ring-white hover:bg-black" />
                <FaInstagram className="cursor-pointer transition-all duration-100 hover:text-red-400" />
                <FaLinkedin className="cursor-pointer transition-all duration-100 hover:text-blue-400" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
