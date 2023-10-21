import React from "react";
import type { FC } from "react";
import Link from "next/link";

interface LinkListProps {
  color?: "dark" | "light";
}

const LinkList: FC<LinkListProps> = ({ color = "dark" }) => {
  return (
    <ul
      className={`flex gap-8 font-normal ${color === "light" && "text-white"}`}
    >
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">About</Link>
      </li>
      <li>
        <Link href="/">Portfolio</Link>
      </li>
      <li>
        <Link href="/">Certificates</Link>
      </li>
    </ul>
  );
};

export default LinkList;
