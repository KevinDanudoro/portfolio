import React from "react";
import type { FC } from "react";
import CardLayout from "./CardLayout";
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  desc: string;
  header?: string;
  button?: React.ReactNode;
}

const Card: FC<CardProps> = ({ image, title, desc, button, header }) => {
  return (
    <CardLayout className="grid grid-rows-[auto,1fr] overflow-hidden rounded-lg shadow-card pt-0">
      <Image
        src={image}
        alt="card image"
        width={256}
        height={256}
        className="object-cover w-full h-48"
      />
      <div className="p-4 flex flex-col gap-1">
        <small className="text-slate-600 font-medium">{header}</small>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm font-light mb-4">{desc}</p>
        {button}
      </div>
    </CardLayout>
  );
};

export default Card;
