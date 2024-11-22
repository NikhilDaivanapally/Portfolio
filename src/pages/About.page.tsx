import { useEffect } from "react";
import { animatePageIn } from "../animation/page.anim";
import { Template } from "../template";
import profile from "../assets/profile2-removebg-preview.jpg";
const About = () => {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <Template page="About">
      <div className="Project p-5 w-full">
        <p className="text-4xl">About</p>
        <div className="flex flex-col md:flex-row justify-center  mt-10 gap-20">
          <div className="m-auto md:m-0 w-40 h-40 rounded-full overflow-hidden">
            <img className="" src={profile} alt="" />
          </div>
          <p className="text-xl md:text-2xl md:w-1/2">
            Hi there! 👋 I'm Nikhil.
            <br />I am a passionate Web Developer with a focus on creating
            intuitive and engaging user experiences. My expertise spans across
            both frontend and backend development, allowing me to build
            comprehensive and scalable web applications from the ground up.
          </p>
        </div>
      </div>
    </Template>
  );
};

export default About;
