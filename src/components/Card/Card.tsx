import React from "react";
import type { FC } from "react";
import CardLayout from "./CardLayout";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  desc?: string;
  header?: string;
  button?: React.ReactNode;
}

const Card: FC<CardProps> = ({
  image,
  title,
  desc,
  button,
  header,
  className,
  ...props
}) => {
  return (
    <CardLayout
      className={cn(
        "grid grid-rows-[auto,1fr] overflow-hidden rounded-lg shadow-card pt-0",
        className
      )}
      {...props}
    >
      <Image
        src={image}
        alt="card image"
        width={1024}
        height={1024}
        className="object-cover w-full aspect-square object-left"
      />
      <div className="p-4 flex flex-col gap-1">
        {header && (
          <small className="text-slate-600 font-medium">{header}</small>
        )}
        <h3 className="text-lg font-medium">{title}</h3>
        {desc && <p className="text-sm font-light">{desc}</p>}
        <div className="w-full mt-4">{button}</div>
      </div>
    </CardLayout>
  );
};

export default Card;
