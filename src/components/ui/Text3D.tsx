import React from "react";
interface text3DProps {
  primary: string;
  secondary: string;
}
const Text3D: React.FC<text3DProps> = ({ primary, secondary }) => {
  return (
    <div className="relative cursor-pointer transform-style-preserve-3d group">
      <p className="text-5xl font-semibold transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
        {primary}
      </p>

      <p
        className="text-5xl font-semibold transition-all duration-500 text-[#827EFC] absolute top-0 opacity-0 
    transform-rotateX-90deg-translateY-3-5vw transform-origin
    group-hover:opacity-100 group-hover:translate-y-0
  "
      >
        {secondary}
      </p>
    </div>
  );
};

export default Text3D;
