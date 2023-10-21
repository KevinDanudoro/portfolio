import React from "react";
import type { FC } from "react";
import Slider from "../Slider/Slider";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { ArrowRight } from "lucide-react";

const certificateContents = [
  {
    title: "Android Developer Expert",
    header: "Sep 23, 2023 - Sep 23, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <Button variant="outline">
        Credential <ArrowRight />
      </Button>
    ),
  },
  {
    title: "Jetpack Compose",
    header: "May 25, 2023 - May 25, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <Button variant="outline">
        Credential <ArrowRight />
      </Button>
    ),
  },
  {
    title: "Kotlin",
    header: "Feb 26, 2023 - Feb 26, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <Button variant="outline">
        Credential <ArrowRight />
      </Button>
    ),
  },
  {
    title: "JavaScript",
    header: "Oct 17, 2023 - Oct 17, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <Button variant="outline">
        Credential <ArrowRight />
      </Button>
    ),
  },
  {
    title: "Dasar UX Design",
    header: "May 18, 2023 - May 18, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <Button variant="outline">
        Credential <ArrowRight />
      </Button>
    ),
  },
];

interface CertificateProps {}

const Certificate: FC<CertificateProps> = ({}) => {
  return (
    <div className="bg-gray w-full py-16">
      <div className="w-content lg:w-content-lg flex justify-center items-center mx-auto flex-col gap-4">
        <h2 className="text-3xl font-semibold text-center">Certificates</h2>
        <p className="md:w-1/2 w-2/3 text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="w-full mt-8">
          <Slider>
            {certificateContents.map((content) => (
              <Card
                key={content.title}
                title={content.title}
                header={content.header}
                image={content.image}
                button={content.button}
                className="min-h-[25rem]"
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
