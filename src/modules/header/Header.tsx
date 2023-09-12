"use client";

import Navbar from "@/components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import "./style.scss";

export default function Header() {
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    let pos =0
    addEventListener("scroll", () => {
      pos = window.scrollY;
      setPositionY(pos)
    });
    
  }, []);

  return (
    <header className={`${positionY != 0 && "dark-theme"}`}>
      <Navbar variant="row" className="desktop-nav "  theme={`${positionY !=0 ? "light" : "dark"}`} />
    </header>
  );
}
