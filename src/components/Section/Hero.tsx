import React from "react";
import type { FC } from "react";

import Showcase from "../Showcase/Showcase";

import Image from "next/image";
import EmailButton from "../Button/EmailButton";
import HeroAnimation from "../Animation/HeroAnimation";

const Hero: FC = ({}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="lg:w-content-lg w-content grid lg:grid-cols-[1fr,auto] grid-rows-[auto,1fr] mt-32 lg:gap-20 gap-14 lg:items-center lg:justify-items-start justify-items-center">
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold leading-[110%]">
            {"Hello, I'm"} <br />
            Kevin Danudoro
          </h1>
          <p className="mt-4 whitespace-pre-line text-base">
            Computer Engineer fresh graduate at Brawijaya University.
            Experienced and passionate about web and Android app development.
            Capable of working individually and an active team player, also
            dedicated to a continuous learning mindset, constantly seeking new
            knowledge and skills in diverse software development areas, with a
            strong focus on enhancing job efficiency and effectiveness.
          </p>

          <div className="mt-4 flex w-full justify-between">
            <EmailButton>Say Hello!</EmailButton>

            <div className="flex flex-row gap-3">
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

              <a href="https://github.com/KevinDanudoro" target="_blank">
                <Image
                  src="/image/github-icon.png"
                  alt="github icon"
                  width={36}
                  height={36}
                  priority
                />
              </a>

              <a href="https://wa.me/6281380859045" target="_blank">
                <Image
                  src="/image/whatsapp-icon.png"
                  alt="whatsapp icon"
                  width={36}
                  height={36}
                  priority
                />
              </a>
            </div>
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
