"use client";

import React, { useState } from "react";
import type { FC } from "react";
import Link from "next/link";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import LinkList from "./LinkList";
import EmailButton from "../Button/EmailButton";

interface TopbarProps {}

const Topbar: FC<TopbarProps> = ({}) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="bg-white fixed top-0 left-0 right-0 h-16 z-50">
      <div className="w-content h-full mx-auto flex items-center justify-between">
        <Logo />

        <nav>
          <div className="md:flex hidden gap-8 items-center">
            <LinkList />
            <EmailButton>Contact</EmailButton>
          </div>

          <div className="md:hidden">
            <div
              className="w-7 h-6 flex justify-between flex-col cursor-pointer z-10 relative"
              onClick={() => setisOpen((prev) => !prev)}
            >
              <div
                className={`h-1 w-full bg-dark-gray rounded-lg duration-150 origin-left ${
                  isOpen ? "rotate-45 translate-x-1" : ""
                }`}
              />
              <div
                className={`h-1 w-full bg-dark-gray rounded-lg duration-150 ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <div
                className={`h-1 w-full bg-dark-gray rounded-lg duration-150 origin-left ${
                  isOpen ? "-rotate-45 translate-x-1" : ""
                }`}
              />
            </div>

            <div
              className={`fixed top-0 bottom-0 right-0 w-[40vw] duration-150 bg-gray flex flex-col justify-center items-center  min-h-fit px-24 ${
                isOpen ? "translate-x-0" : "translate-x-[100%]"
              }`}
            >
              <LinkList className="flex flex-col items-center gap-12" />
              <EmailButton className="mt-8">Contact</EmailButton>
            </div>

            <div
              className={`fixed inset-0 bg-dark-gray/30 -z-10 duration-150 transition-opacity ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-[100%]"
              }`}
              onClick={() => isOpen && setisOpen((prev) => !prev)}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;
