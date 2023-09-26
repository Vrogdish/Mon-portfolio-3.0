"use client";
import React, { ReactNode } from "react";
import "./style.scss";
import Typography from "../typography/Typography";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  theme?: "dark" | "light";
}

export default function Button({ children, className, onClick, theme }: Props) {
  let colorStyle = "btn-dark";

  switch (theme) {
    case "dark":
      colorStyle = "btn-dark"; //default

      break;
    case "light":
      colorStyle = "btn-light";

    default:
      break;
  }

  return (
    <div className={`my-button ${colorStyle} ${className}`} onClick={onClick}>
      <Typography variant="md" color="light" className="btn-text">
        {children}
      </Typography>
    </div>
  );
}
