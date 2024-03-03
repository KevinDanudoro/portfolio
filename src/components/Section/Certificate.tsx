import React from "react";
import type { FC } from "react";
import dynamic from "next/dynamic";

import { ArrowRight } from "lucide-react";

import Card from "../Card/Card";
import Button from "../Button/Button";

const Slider = dynamic(() => import("../Slider/Slider"), { ssr: false });

const CredentialButton = ({ href }: { href: string }) => (
  <a target="_blank" href={href}>
    <Button variant="outline">
      Credential <ArrowRight />
    </Button>
  </a>
);

const certificateContents = [
  {
    title: "Android Expert",
    header: "Sep 23, 2023 - Sep 23, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <CredentialButton href="https://www.dicoding.com/certificates/81P277EDNZOY" />
    ),
  },
  {
    title: "Android Intermediate",
    header: "Sep 23, 2023 - Sep 23, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <CredentialButton href="https://www.dicoding.com/certificates/1OP800WW2XQK" />
    ),
  },
  {
    title: "Android Fundamental",
    header: "Sep 23, 2023 - Sep 23, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <CredentialButton href="https://www.dicoding.com/certificates/1OP80DD02XQK" />
    ),
  },
  {
    title: "Android Beginner",
    header: "Sep 23, 2023 - Sep 23, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <CredentialButton href="https://www.dicoding.com/certificates/2VX3Y9E3NPYQ" />
    ),
  },
  {
    title: "Jetpack Compose",
    header: "May 25, 2023 - May 25, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <CredentialButton href="https://www.dicoding.com/certificates/NVP7OQG8WPR0" />
    ),
  },
  {
    title: "SOLID Programming",
    header: "Sep 23, 2023 - Sep 23, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <CredentialButton href="https://www.dicoding.com/certificates/1OP80004VXQK" />
    ),
  },
  {
    title: "Kotlin",
    header: "Feb 26, 2023 - Feb 26, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <CredentialButton href="https://www.dicoding.com/certificates/6RPN6N2D8P2M" />
    ),
  },
  {
    title: "Back-End Pemula",
    header: "Dec 18, 2023 - Dec 18, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <CredentialButton href="https://www.dicoding.com/certificates/4EXGK9V8DZRL" />
    ),
  },
  {
    title: "JavaScript",
    header: "Oct 17, 2023 - Oct 17, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <CredentialButton href="https://www.dicoding.com/certificates/JMZV10G93XN9" />
    ),
  },
  {
    title: "Dasar UX Design",
    header: "May 18, 2023 - May 18, 2026",
    image: "/image/dicoding-logo.jpg",
    button: (
      <CredentialButton href="https://www.dicoding.com/certificates/NVP7O80NRPR0" />
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
          Participate in certification programs in the field of Android and
          Website application development
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
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
