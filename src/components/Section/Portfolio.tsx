import React from "react";
import type { FC } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { ArrowRight } from "lucide-react";

const portfolioContents = [
  {
    header: "Front-End Website",
    title: "Admin Dashboard",
    desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    image: "/image/hero.svg",
    button: (
      <Button className="w-fit" variant="outline">
        Case Study
        <ArrowRight />
      </Button>
    ),
  },
  {
    header: "Front-End Website",
    title: "Village Website",
    desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    image: "/image/hero.svg",
    button: (
      <Button className="w-fit" variant="outline">
        Case Study
        <ArrowRight />
      </Button>
    ),
  },
  {
    header: "Front-End Website",
    title: "E-Commerce",
    desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    image: "/image/hero.svg",
    button: (
      <Button className="w-fit" variant="outline">
        Case Study
        <ArrowRight />
      </Button>
    ),
  },
];

interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = ({}) => {
  return (
    <div className="w-full mt-24">
      <div className="w-content lg:w-content-lg flex justify-center items-center mx-auto flex-col gap-4">
        <h2 className="text-3xl font-semibold text-center">Portfolio</h2>
        <p className="md:w-1/2 w-2/3 text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>

        <div className="grid md:grid-cols-3 md:grid-rows-none grid-rows-3 gap-4 mt-12">
          {portfolioContents.map((content) => (
            <Card
              key={content.title}
              header={content.header}
              title={content.title}
              desc={content.desc}
              image={content.image}
              button={content.button}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
