import React from "react";
import type { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LinkListProps extends React.HTMLAttributes<HTMLUListElement> {}

const LinkList: FC<LinkListProps> = ({ className, ...props }) => {
  return (
    <ul className={cn("flex gap-8 font-normal", className)} {...props}>
      <li>
        <Link href="#hero">Home</Link>
      </li>
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#skills">Skills</Link>
      </li>
      <li>
        <Link href="#portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="#certificate">Certificates</Link>
      </li>
    </ul>
  );
};

export default LinkList;
