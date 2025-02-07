import { GrGithub } from "react-icons/gr";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="w-full h-screen sm:h-[90vh] overflow-hidden text-textcolor  bg-no-repeat bg-cover sm:bg-none sm:px-10">
      <div className="flex overflow-hidden   justify-between sm:items-center">
        <div className="mt-[450px] m-5 sm:mt-60">
          <p className="text-3xl text-textcolor  sm:text-5xl">Hi There 👋🏼</p>
          <p className="text-3xl sm:text-5xl">I'am Nikhil Daivanapally</p>
          <p className="text-3xl sm:text-5xl text-[#827EFC]">web developer</p>

          <a href="https://github.com/NikhilDaivanapally" target="_blank">
            <button className="flex relative items-center p-2 border-2 border-textcolor rounded-full mt-4 gap-2 z-10">
              Watch my Repo
              <GrGithub className="text-xl" />
            </button>
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* <img
            className="h-[600px] w-auto object-cover rounded-sm hidden sm:flex"
            src="https://images.unsplash.com/photo-1722480403866-fc98f4789f00?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
