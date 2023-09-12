"use client"

import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./style.scss"

interface props {
  className?: string;
  theme : "light" | "dark"
}

export default function BurgerMenu({ className,theme }: props) {
  const [MenuIsopen, SetMenu] = useState(false);

  const handleclick = () => {
    !MenuIsopen ? SetMenu(true) : SetMenu(false);
    
  };

  let themeStyle : "light" | "dark" = "light";
  switch (theme) {
    case "light":
      themeStyle = "dark";
      break;
    case "dark":
      themeStyle = "light";
      break;
    default:
      break;
  }

  return (
    <div className={`burger ${className}`}>
      <div className={`burger-btn ${themeStyle}`} onClick={handleclick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {MenuIsopen? (
        <div onClick={handleclick}>
        <Navbar variant="col" theme={"light"} className="burger-nav"/>
      </div>
      ): null }
       
    </div>
  );
}