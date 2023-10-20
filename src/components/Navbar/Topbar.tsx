import React from "react";
import type { FC } from "react";
import Link from "next/link";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";

interface TopbarProps {}

const Topbar: FC<TopbarProps> = ({}) => {
  return (
    <>
      <header className="bg-white fixed top-0 left-0 right-0 h-16">
        <div className="w-content h-full mx-auto flex items-center justify-between">
          <Logo />

          <nav className="flex gap-8 items-center">
            <ul className="flex gap-8 font-normal">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Process</Link>
              </li>
              <li>
                <Link href="/">Portfolio</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Service</Link>
              </li>
            </ul>
            <Link href="/">
              <Button>Contact</Button>
            </Link>
          </nav>
        </div>
      </header>
      <div className="h-16"></div>
    </>
  );
};

export default Topbar;
