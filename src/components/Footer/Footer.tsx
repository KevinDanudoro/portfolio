import React from "react";
import type { FC } from "react";
import Logo from "../Logo/Logo";
import LinkList from "../Navbar/LinkList";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="h-fit bg-dark-gray">
      <div className="flex w-content mx-auto h-full items-end py-12">
        <div className="flex justify-between w-full md:items-center items-start md:flex-row flex-col md:gap-0 gap-8">
          <Logo color="light" />
          <LinkList className="text-white flex-wrap gap-y-2" />
          <p className="text-white">
            Design by{" "}
            <a
              target="_blank"
              href="https://www.figma.com/community/file/1170206889562959306"
              className="font-semibold"
            >
              Templatecookie
            </a>{" "}
            from Figma Community
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
