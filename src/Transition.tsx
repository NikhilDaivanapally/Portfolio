import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Transition: React.FC<Props> = ({ children }) => {
  return (
    <>
      <motion.div
        className="slide-in w-full h-screen bg-black transform-origin-top"
        initial={{ translateY: 0 }}
        animate={{ translateY: [1000, 0, -1000] }}
        exit={{ translateY: [1000, 0, -1000] }}
        transition={{
          duration: 2,
          times: [0, 0.6, 1],
          ease: [0.87, 0, 0.13, 1],
        }}
      />

      {children}
    </>
  );
};

export default Transition;
