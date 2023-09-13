import React from "react";
import Image from "next/image";
import "./style.scss";
import Typography from "../typography/Typography";

interface Props {
  className?: string;
}

const navlinks = [
  {
    title: "Github",
    url: "https://github.com/Vrogdish",
    image: "/images/github.png",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/cedric-gache-12628a266/",
    image: "/images/linkedin.png",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/Vrogdish",
    image: "/images/twitter.png",
  },
];

export default function SocialNetwork({ className }: Props) {
  return (
    <div className={`social ${className} `}>
      {navlinks.map((element, index) => (
        <div key={index} >
          <a href={element.url} target="_blank" className="icons" >
            <Image
              src={element.image}
              alt={`icone ${element.title}`}
              width={50}
              height={50}
            />
            <Typography variant="caption" color="light" component="p">
              {element.title}
            </Typography>
          </a>
        </div>
      ))}
    </div>
  );
}
