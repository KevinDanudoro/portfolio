import React from "react";
import type { FC } from "react";
import Image from "next/image";

import Button from "../Button/Button";
import Showcase from "../Showcase/Showcase";

const Hero: FC = ({}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="lg:w-content-lg w-content grid lg:grid-cols-[1fr,auto] grid-rows-[auto,1fr] mt-32 lg:gap-20 gap-14 lg:items-center lg:justify-items-start justify-items-center">
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold leading-[110%]">
            {"Hello, I'm"} <br />
            Kevin Danudoro
          </h1>
          <p className="mt-4 whitespace-pre-line">
            {`I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.`}
          </p>

          <Button className="mt-4 w-fit">Say Hello!</Button>

          <ul className="grid grid-cols-3 gap-2 mt-12" aria-label="achievement">
            <li>
              <Showcase
                className="rounded-l-md"
                title="17 Y"
                desc="Experience"
              />
            </li>
            <li>
              <Showcase title="250+" desc="Project" />
            </li>
            <li>
              <Showcase
                className="rounded-r-md"
                title="58"
                desc="Happy Client"
              />
            </li>
          </ul>
        </div>

        <Image
          src="/image/hero.svg"
          alt="hero image"
          width={512}
          height={512}
          className="object-contain w-full min-w-[25em] max-w-sm row-start-1 lg:row-start-auto"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
