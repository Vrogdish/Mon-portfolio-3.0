import React from "react";
import "./style.scss";

import { getAllProjects } from "@/api/api";
import Gallery from "@/components/gallery/Gallery";

export default async function Projects() {
  const projects = await getAllProjects();


  return (
    <section className="projects" id="projects">
      <div className="separate"></div>
      <div className="triangle"></div>
      <Gallery projects={projects} className="container-gallery" />
    </section>
  );
}
