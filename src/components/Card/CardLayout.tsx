import React from "react";
import type { FC } from "react";
import { cn } from "@/lib/utils";

interface CardLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardLayout: FC<CardLayoutProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("rounded-md shadow-lg bg-white", className)} {...props}>
      {children}
    </div>
  );
};

export default CardLayout;
