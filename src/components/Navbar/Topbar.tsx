import React from "react";
import type { FC } from "react";
import Link from "next/link";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import LinkList from "./LinkList";

interface TopbarProps {}

const Topbar: FC<TopbarProps> = ({}) => {
  return (
    <div className="bg-white fixed top-0 left-0 right-0 h-16 z-50">
      <div className="w-content h-full mx-auto flex items-center justify-between">
        <Logo />

        <nav className="flex gap-8 items-center">
          <LinkList />
          <Link href="/">
            <Button>Contact</Button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;
