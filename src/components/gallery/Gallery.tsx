"use client";

import { Project } from "@/types/project";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import "./style.scss";
import Typography from "../typography/Typography";
import Button from "../button/Button";

interface Props {
  projects: Project[];
  className?: string;
}

export default function Gallery({ projects, className }: Props) {
  return (
    <div className={`gallery ${className}`}>
      {projects.map((project, index) => (
        <div key={index} className="gallery-item">
          <Image
            src={project.cover}
            alt={project.title}
            height={400}
            width={400}
            className="gallery-image"
          />
          
          <div className="overlay">
            <div className="overlay-content">
              <Typography component="h3" variant="md" color="light">
                {project.title}
              </Typography>
              <Typography component="p" variant="md" color="light">
                Technologies :
              </Typography>
              {project.tags.map((tag) => (
                <Typography
                  key={tag}
                  component="p"
                  variant="sm"
                  color="light"
                  className="tags"
                >
                  - {tag}
                </Typography>
              ))}
            </div>
            <div className="overlay-links">
              {project.github ? (
                <Button
                  theme="light"
                  size="sm"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  Code source
                </Button>
              ) : null}

              {project.url ? (
                <Button
                  theme="light"
                  size="sm"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  Visiter le site
                </Button>
              ) : null}
            </div>
          </div>
          <div className="mobile-btn">
          {project.github ? (
                <Button
                  theme="light"
                  size="sm"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  Code source
                </Button>
              ) : null}

              {project.url ? (
                <Button
                  theme="light"
                  size="sm"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  Visiter le site
                </Button>
              ) : null}
          </div>
        </div>
        
      ))}
    </div>
  );
}
