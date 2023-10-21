import React from "react";
import type { FC } from "react";
import CardLayout from "../Card/CardLayout";
import Image from "next/image";
import Button from "../Button/Button";
import { Download } from "lucide-react";

interface IntroductionProps {}

const Introduction: FC<IntroductionProps> = ({}) => {
  return (
    <div className="w-full flex justify-center lg:mt-10 mt-20">
      <CardLayout className="w-content lg:w-content-lg p-10">
        <div className="flex lg:gap-20 gap-10 items-center md:flex-row flex-col">
          <Image
            src="/image/hero.svg"
            alt="portfolio picture"
            height={256}
            width={256}
            className="object-contain"
          />

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">
              I am Professional User Experience Designer
            </h2>

            <p className="mt-2">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.{" "}
              <br className="mb-2" /> I design and develop services for
              customers specializing creating stylish, modern websites, web
              services.
            </p>

            <div className="flex gap-2 mt-2">
              <Button>My Project</Button>
              <Button variant="outline" className="flex items-center">
                <Download /> Download CV
              </Button>
            </div>
          </div>
        </div>
      </CardLayout>
    </div>
  );
};

export default Introduction;
