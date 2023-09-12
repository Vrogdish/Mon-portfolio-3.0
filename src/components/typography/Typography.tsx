import { NextFont } from "next/dist/compiled/@next/font";
import { Montserrat} from "next/font/google";
import React, { ReactNode } from "react";
import "./style.scss"

export const standardFont: NextFont = Montserrat({
    subsets:["latin"]
});

interface props {
  children: ReactNode;
  variant?: "xl" | "lg" | "md" | "sm" | "caption";
  component?: "p" | "h1" | "h2" | "h3" | "div";
  color?: "light" | "dark" | "grey";
  className?: string;
}

export default function Typography({
  children,
  component: Component = "div",
  variant = "sm",
  color = "dark",
  className,
}: props) {
  let variantFamily: string = "";
  let variantStyle: string = "";
  let colorStyle: string = "";

  switch (variant) {
    case "xl": //default
      variantFamily = standardFont.className;
      variantStyle="text-xl"
      break;
    case "lg":
      variantFamily = standardFont.className;
      variantStyle = "text-lg";
      break;
    case "md":
      variantFamily = standardFont.className;
      variantStyle = "text-md";
      break;
    case "sm":
      variantFamily = standardFont.className;
      variantStyle = "text-sm";
      break;
    case "caption":
      variantFamily = standardFont.className;
      variantStyle = "text-caption";
  }

  switch (color) {
    case "light": 
      colorStyle = "light-color";
      break;
    case "dark": //default
      colorStyle = "dark-color";
      break;
    case "grey":
      colorStyle = "grey-color";
  }

  return (
    <Component
      className={`${variantFamily}
        ${variantStyle}
        ${colorStyle}
        ${className}`}
    >
      {children}
    </Component>
  );
}
