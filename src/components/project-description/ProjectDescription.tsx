"use client";
import React from "react";
import Typography from "../typography/Typography";
import Button from "../button/Button";
import { Project } from "@/types/project";
import "./style.scss";

interface Props {
  className?: string;
  project: Project;
}

export default function ProjectDescription({ className, project }: Props) {
  return (
    <div className={`project-description ${className} `}>
      <Typography variant="lg" component="h3" className="title">
        {project.title}
      </Typography>
      <Typography component="div" className="content">
        <div>
          <h4>Description : </h4>
          <p>{project.description}</p>
        </div>
        <div>
          <h4>Compétences : </h4>
          {project.tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
        <div className="links">
          {project.github ? (
            <Button onClick={() => window.open(project.github, "_blank")}>
              Code source
            </Button>
          ) : null}

          {project.url ? (
            <Button onClick={() => window.open(project.url, "_blank")}>
              Visiter le site
            </Button>
          ) : null}
        </div>
      </Typography>
    </div>
  );
}
