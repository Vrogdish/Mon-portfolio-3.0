import React, { ReactNode } from "react";
import "./style.scss"

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: Props) {
  return <div className={`container ${className}`}>{children}</div>;
}
