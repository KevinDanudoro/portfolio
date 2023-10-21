"use client";

import React from "react";
import type { FC } from "react";

import Lottie from "lottie-react";

import LottieAnimation from "../../../public/animation/portfolio.json";

interface HeroAnimationProps {}

const HeroAnimation: FC<HeroAnimationProps> = ({}) => {
  return (
    <Lottie
      animationData={LottieAnimation}
      className="object-contain w-full md:min-w-[25em] min-w-0 max-w-sm row-start-1 lg:row-start-auto"
    />
  );
};

export default HeroAnimation;
