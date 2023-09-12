"use client";
import "./style.scss";

import { scrollToId } from "@/utils/scrollToId";
import React from "react";
import Typography from "../typography/Typography";

interface Props {
  className?: string;
  variant: "row" | "col";
  theme: "light" | "dark";
}

const menuList = [
  {
    title: "À propos",
    id: "about",
  },
  {
    title: "Mes projets",
    id: "projects",
  },
  {
    title: "Me contacter",
    id: "contact",
  },
];

export default function Navbar({ className, variant, theme }: Props) {
  let variantStyle ;

  switch (variant) {
    case "row":
      variantStyle = "row";
      break;
    case "col":
      variantStyle = "col";
      break;
    default:
      break;
  }

  let themeStyle : "light" | "dark";
  switch (theme) {
    case "light":
      themeStyle = "light";
      break;
    case "dark":
      themeStyle = "dark";
      break;
    default:
      break;
  }

  return (
    <nav className={`navbar ${variantStyle} ${className} `}>
      {menuList.map((element) => (
        <div
          key={element.id}
          className="navlink "
          onClick={() => scrollToId(element.id)}
        >
          <Typography variant="md" color={themeStyle}>
            {element.title}
            </Typography>
        </div>
      ))}
    </nav>
  );
}
