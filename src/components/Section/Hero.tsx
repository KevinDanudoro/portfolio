import React from "react";
import type { FC } from "react";

import Button from "../Button/Button";
import Showcase from "../Showcase/Showcase";

import dynamic from "next/dynamic";
import Image from "next/image";
import EmailButton from "../Button/EmailButton";

const HeroAnimation = dynamic(() => import("../Animation/HeroAnimation"), {
  loading: () => (
    <Image
      src="/image/portfolio.png"
      alt="hero image blur"
      width={128}
      height={128}
      className="object-contain w-full min-w-[25em] max-w-sm row-start-1 lg:row-start-auto"
      priority
    />
  ),
});

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
            {`I'm a computer engineering undergraduate at Brawijaya University. Experienced and passionate to web and Android app development. I'm dedicated to a continuous learning mindset, constantly seeking new knowledge and skills in diverse software development areas.`}
          </p>

          <div className="mt-4 flex w-full justify-between">
            <EmailButton>Say Hello!</EmailButton>
            <a
              href="https://www.linkedin.com/in/kevin-danudoro-54540a230/"
              target="_blank"
            >
              <Image
                src="/image/linkedin-icon.svg"
                alt="linkedin icon"
                width={36}
                height={36}
                priority
              />
            </a>
          </div>

          <ul className="grid grid-cols-3 gap-2 mt-12" aria-label="achievement">
            <li>
              <Showcase
                className="rounded-l-md"
                title="1 Y"
                desc="Experience"
              />
            </li>
            <li>
              <Showcase title="3.94" desc="GPA" />
            </li>
            <li>
              <Showcase className="rounded-r-md" title="3" desc="Projects" />
            </li>
          </ul>
        </div>

        <HeroAnimation />
      </div>
    </div>
  );
};

export default Hero;
