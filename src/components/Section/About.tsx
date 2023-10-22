import React from "react";
import type { FC } from "react";
import CardLayout from "../Card/CardLayout";
import Image from "next/image";
import Button from "../Button/Button";
import { Download } from "lucide-react";
import Link from "next/link";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <div className="w-full flex justify-center lg:pt-10 pt-20">
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
              {"I'am a Junior Front-End Developer"}
            </h2>

            <p className="mt-2">
              I design and develop services for customers specializing creating
              stylish and modern apps based on exisisting design.{" "}
              <br className="mb-2" /> I develop applications using the latest
              technology and implement best practices to optimize application
              performance.
            </p>

            <div className="flex gap-2 mt-2">
              <Link href="#portfolio">
                <Button>My Project</Button>
              </Link>
              <a href="/resume/resume.pdf" target="_blank">
                <Button variant="outline" className="flex items-center">
                  <Download /> Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </CardLayout>
    </div>
  );
};

export default About;
