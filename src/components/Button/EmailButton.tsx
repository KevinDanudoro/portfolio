import React from "react";
import type { FC } from "react";
import Button from "./Button";

interface EmailButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const EmailButton: FC<EmailButtonProps> = ({ children, ...props }) => {
  return (
    <a href="mailto:kevindanudoro68@gmail.com" target="_blank">
      <Button {...props}>{children}</Button>
    </a>
  );
};

export default EmailButton;
