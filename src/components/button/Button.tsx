"use client";
import React, { ReactNode } from "react";
import "./style.scss";
import Typography from "../typography/Typography";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  className,
  onClick,
  theme,
  size,
}: Props) {
  let colorStyle = "btn-dark";
  let sizeStyle = "btn-md";

  switch (theme) {
    case "dark":
      colorStyle = "btn-dark"; //default
      break;
    case "light":
      colorStyle = "btn-light";
      break;
    default:
      break;
  }

  switch (size) {
    case "sm":
      sizeStyle = " btn-sm";
      break;
    case "md":
      sizeStyle = " btn-md"; //default
      break;
    case "lg":
      sizeStyle = " btn-lg";
      break;
    default:
      break;
  }

  return (
    <div className={`my-button ${colorStyle} ${sizeStyle} ${className}`} onClick={onClick}>
      <Typography variant={size === "sm" ? "sm" : "md"} color="light" className="btn-text">
        {children}
      </Typography>
    </div>
  );
}
