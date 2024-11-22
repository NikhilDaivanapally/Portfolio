import { Link } from "react-router-dom";
import { Socials } from "../data";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = () => {
  const SocialsRef = useRef<(HTMLDivElement | null)[]>([]);

  function handleMouseEnter(e: MouseEvent) {
    console.log("Mouse entered");
    const element = e.currentTarget as HTMLElement;
    const translate = element.getBoundingClientRect().height;
    const spans = element.querySelectorAll("span");
    const spans1 = element.querySelectorAll(".child1 span");
    const spans2 = element.querySelectorAll(".child2 span");

    // Check if spans are correctly selected
    console.log(spans1, spans2);

    gsap.to(gsap.utils.toArray(spans1), {
      stagger: 0.03,
      y: -10,
      duration: 1,
      ease: "power4.out",
    });

    gsap.to(gsap.utils.toArray(spans2), {
      stagger: 0.03,
      y: -10,
      duration: 1,
      ease: "power4.out",
    });

    gsap.set(gsap.utils.toArray(spans), {
      y: 0,
      duration: 0,
    });
  }

  useEffect(() => {
    if (SocialsRef.current.length > 0) {
      SocialsRef.current.forEach((val) => {
        val?.addEventListener("mouseenter", handleMouseEnter);
      });

      return () => {
        SocialsRef.current.forEach((val) => {
          val?.removeEventListener("mouseenter", handleMouseEnter);
        });
      };
    }
  }, []);

  return (
    <div className="projects w-full h-[40vh] sm:h-[60vh] p-5 sm:p-10 flex flex-col">
      <p className="text-2xl sm:text-4xl">
        Connect with <span className="text-[#827EFC]">Me</span>
      </p>
      <a
        href="mailto:nikhildaivanapally@gmail.com"
        className="w-fit rounded-full md:text-xl mt-4 p-2 border-[1px] border-textcolor"
      >
        nikhildaivanapally@gmail.com
      </a>
      <div className="my-8">
        <p className="text-lg text-gray-500">socials - </p>
        <ul className="flex gap-4 text-lg md:text-xl">
          {Socials.map((el) => {
            return (
              <Link to={"/"} key={el}>
                {el}
              </Link>
            );
          })}
        </ul>
      </div>
      <p className="m-auto">crafted with 💗 by Me</p>
    </div>
  );
};

export default Footer;
