import React from "react";
import type { FC } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { ArrowRight } from "lucide-react";

const portfolioContents = [
  {
    header: "Front-End Website",
    title: "Admin Dashboard",
    desc: "Admin dashboard that shows summary data in the form of charts. Provided with data table and form management for manipulating data.",
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
    desc: "The village profile page contains general information about the village as well as the activities conducted.",
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
    desc: "E-Commerce website to purchase video editing services for wedding ceremony.",
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
    <div className="w-full py-24">
      <div className="w-content lg:w-content-lg flex justify-center items-center mx-auto flex-col gap-4">
        <h2 className="text-3xl font-semibold text-center">Portfolio</h2>
        <p className="md:w-1/2 w-2/3 text-center [text-wrap:balance]">
          Interested and curious about Android and Website application
          development as well as its implementation into various case studies.
        </p>

        <div className="grid md:grid-cols-3 md:grid-rows-none grid-rows-3 gap-4 mt-8">
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
