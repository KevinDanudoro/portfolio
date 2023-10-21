import React from "react";
import type { FC } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline";
}

const Button: FC<ButtonProps> = ({
  variant = "default",
  children,
  className,
  ...props
}) => {
  if (variant === "default")
    return (
      <button
        className={cn(
          className,
          "px-4 py-2 bg-purple hover:bg-dark-purple duration-150 rounded-md text-white font-semibold text-base flex gap-2"
        )}
        {...props}
      >
        {children}
      </button>
    );

  return (
    <button
      className={cn(
        className,
        "px-4 py-2 bg-white hover:bg-dark-purple duration-150 rounded-md text-purple hover:text-white border-2 border-solid border-purple font-semibold text-base flex gap-2"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
