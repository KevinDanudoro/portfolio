import React from "react";
import type { FC } from "react";
import { cn } from "@/lib/utils";

interface CardLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardLayout: FC<CardLayoutProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("p-4 rounded-md shadow-lg", className)} {...props}>
      {children}
    </div>
  );
};

export default CardLayout;
