import React from "react";
import Image from "next/image";
import "./style.scss";
import Typography from "../typography/Typography";

interface Props {
  className?: string;
  variant?: "light" | "dark";
  showTitle?: boolean;
}

const navlinks = [
  {
    title: "Github",
    url: "https://github.com/Vrogdish",
    image: "/images/github.png",
    imageDark: "/images/github-dark.png",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/cedric-gache-12628a266/",
    image: "/images/linkedin.png",
    imageDark: "/images/linkedin-dark.png",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/Vrogdish",
    image: "/images/twitter-new.png",
    imageDark: "/images/twitter-dark.png",
  },
];

export default function SocialNetwork({
  className,
  variant = "light",
  showTitle = true,
}: Props) {


  return (
    <div className={`social ${className} `}>
      {navlinks.map((element, index) => (
        <div key={index}>
          <a href={element.url} target="_blank" className="icons">
            <Image
              src={variant === "light" ? element.image : element.imageDark}
              alt={`icone ${element.title}`}
              width={50}
              height={50}
            />
            {showTitle && (
              <Typography
                variant="caption"
                color={variant === "light" ? "light" : "dark"}
                component="p"
              >
                {element.title}
              </Typography>
            )}
          </a>
        </div>
      ))}
    </div>
  );
}
