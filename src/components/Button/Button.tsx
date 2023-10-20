import React from "react";
import type { FC } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
}

const Button: FC<ButtonProps> = ({
  variant = "default",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        className,
        "px-4 py-2 bg-purple hover:bg-dark-purple duration-150 rounded-md text-white font-semibold text-base "
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
