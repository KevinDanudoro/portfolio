import React from "react";
import type { FC } from "react";
import CardLayout from "../Card/CardLayout";
import Image from "next/image";

interface SkillProps {}

const Skill: FC<SkillProps> = ({}) => {
  return (
    <div className="bg-gray w-full h-fit flex justify-center items-center">
      <div className="lg:w-content-lg w-content grid lg:grid-cols-2 lg:grid-rows-none grid-rows-[auto,1fr] lg:gap-32 gap-12 mt-28 mb-20 items-center justify-items-center lg:justify-items-start">
        <div className="lg:w-auto sm:w-[60%] w-full">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum.
            <br className="mb-2" />
            Suspendis imperdiet Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla purus arcu, varius eget velit non.
          </p>
        </div>
        <div className="flex flex-col flex-wrap lg:w-full sm:w-1/2 w-full aspect-square content-center gap-x-4 lg:row-start-auto row-start-2">
          <CardLayout className="w-[42%] first:mt-0 mt-4 aspect-square flex flex-col justify-center gap-2 font-medium text-xl items-center">
            <Image
              src="/image/tailwind-icon.png"
              alt="Tailwind Icon"
              width={80}
              height={100}
            />
            <small>Tailwind</small>
          </CardLayout>
          <CardLayout className="w-[42%] first:mt-0 mt-4 aspect-square flex flex-col justify-center gap-2 font-medium text-xl items-center">
            <Image
              src="/image/nextjs-icon.png"
              alt="Nextjs Icon"
              width={80}
              height={100}
            />
            <small>Next JS</small>
          </CardLayout>
          <CardLayout className="w-[42%] first:mt-0 mt-4 aspect-square flex flex-col justify-center gap-2 font-medium text-xl items-center">
            <Image
              src="/image/react-icon.png"
              alt="React Icon"
              width={80}
              height={100}
            />
            <small>React JS</small>
          </CardLayout>
          <CardLayout className="w-[42%] first:mt-0 mt-4 aspect-square flex flex-col justify-center gap-2 font-medium text-xl items-center">
            <Image
              src="/image/redux-icon.png"
              alt="Redux Icon"
              width={80}
              height={80}
            />
            <small>Redux</small>
          </CardLayout>
        </div>
      </div>
    </div>
  );
};

export default Skill;
