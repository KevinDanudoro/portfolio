import React from "react";
import type { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="flex items-center gap-3">
      <span className="w-9 h-9 aspect-square rounded-full bg-purple flex justify-center items-center uppercase text-white font-medium text-lg">
        k
      </span>
      <small className="text-lg font-semibold ">Kevin</small>
    </div>
  );
};

export default Logo;
