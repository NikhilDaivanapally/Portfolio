import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStacks from "../components/TechStacks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { animatePageIn } from "../animation/page.anim";
import { Template } from "../template";

const Home = () => {
  useEffect(() => {
    animatePageIn();
    // animatePageOut();
  }, []);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".ProjectReveal", {
      width: "100%",
      scrollTrigger: {
        trigger: ".projects",
        start: "0% 90%",
        end: "200 90%",
        scrub: 2,
      },
    });
    gsap.to(".TechStackReveal", {
      width: "100%",
      scrollTrigger: {
        trigger: ".TechStacks",
        start: "0% 90%",
        end: "200 90%",
        scrub: 2,
      },
    });

    gsap.to(".project", {
      opacity: 1,
      y: 0, // Optional: adds a slight movement for a more noticeable effect
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".projects", // The container of all `.project` elements
        start: "0% 70%",
        end: "60% 70%",
        scrub: 2,
      },
    });
    gsap.to(".frontend", {
      opacity: 1,
      scale: 1,
      y: 0, // Optional: adds a slight movement for a more noticeable effect
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".frontendContainer",
        id: "frontend",
        start: "top 90%",
        end: "top 80%",
        scrub: 2,
      },
    });
    gsap.to(".backend", {
      opacity: 1,
      scale: 1,
      y: 0, // Optional: adds a slight movement for a more noticeable effect
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".backendContainer",
        id: "backend",
        start: "top 90%",
        end: "top 80%",
        scrub: 2,
      },
    });
  });
  return (
    <Template page="Home">
      <div>
        <Hero />
        <TechStacks />
        <Projects />
        <Footer />
      </div>
    </Template>
  );
};

export default Home;
