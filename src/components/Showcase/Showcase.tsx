import React from "react";
import type { FC } from "react";
import { cn } from "@/lib/utils";

interface ShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  desc: string;
}

const Showcase: FC<ShowcaseProps> = ({ className, title, desc, ...props }) => {
  return (
    <div
      className={cn(
        className,
        "bg-gray p-4 h-full flex items-center justify-center"
      )}
      {...props}
    >
      <p className="font-medium text-2xl text-center leading-7">
        {title}
        <br />
        <span className="text-md text-base text-dark-gray/70 text-center">
          {desc}
        </span>
      </p>
    </div>
  );
};

export default Showcase;
