"use client";

import React from "react";
import type { FC } from "react";

import LottieAnimation from "../../../public/animation/portfolio.json";
import dynamic from "next/dynamic";
import Image from "next/image";

const Lottie = dynamic(() => import("lottie-react"), {
  loading: () => (
    <Image
      src="/image/portfolio-blur.png"
      alt="hero image blur"
      width={256}
      height={256}
      priority
      className="object-contain w-full md:min-w-[25em] min-w-0 max-w-sm row-start-1 lg:row-start-auto mb-6"
    />
  ),
  ssr: false,
});

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
