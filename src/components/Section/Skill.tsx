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
            Experienced in developing web applications using{" "}
            <span className="font-semibold">NextJS</span> framework and{" "}
            <span className="font-semibold">Tailwindcss</span>. Utilize the
            rendering, caching, routing, and asset optimization features of
            NextJS to build a website with excelent performance.
            <br className="mb-2" />
            Experienced in developing{" "}
            <span className="font-semibold">Android</span> applications using{" "}
            <span className="font-semibold">Kotlin - XML</span> and{" "}
            <span className="font-semibold">Jetpack Compose</span> with
            implementing clean architecture.
          </p>
        </div>
        <div className="flex flex-col flex-wrap lg:w-full sm:w-1/2 w-full aspect-square content-center gap-x-4 lg:row-start-auto row-start-2">
          <CardLayout className="w-[42%] h-auto first:mt-0 mt-4 aspect-square flex flex-col justify-center gap-2 font-medium text-xl items-center">
            <Image
              src="/image/nextjs-icon.png"
              alt="Nextjs Icon"
              width={80}
              height={100}
            />
            <small>Next JS</small>
          </CardLayout>
          <CardLayout className="w-[42%] h-auto first:mt-0 mt-4 aspect-square flex flex-col justify-center gap-2 font-medium text-xl items-center">
            <Image
              src="/image/android-icon.png"
              alt="Android Icon"
              width={80}
              height={100}
            />
            <small className="mt-2">Android</small>
          </CardLayout>
          <CardLayout className="w-[42%] h-auto first:mt-0 mt-4 aspect-square flex flex-col justify-center gap-2 font-medium text-xl items-center">
            <Image
              src="/image/tailwind-icon.png"
              alt="Tailwind Icon"
              width={80}
              height={100}
            />
            <small>Tailwind</small>
          </CardLayout>
          <CardLayout className="w-[42%] h-auto first:mt-0 mt-4 aspect-square flex flex-col justify-center gap-2 font-medium text-xl items-center">
            <Image
              src="/image/compose-icon.png"
              alt="Jetpack Compose Icon"
              width={80}
              height={80}
            />
            <small className="leading-5 text-center">
              Jetpack
              <br />
              Compose
            </small>
          </CardLayout>
        </div>
      </div>
    </div>
  );
};

export default Skill;
