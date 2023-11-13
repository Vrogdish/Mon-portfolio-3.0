import React from "react";
import "./style.scss";
import Container from "@/components/container/Container";
import Slider from "@/components/slider/Slider";
import { getAllProjects} from "@/api/api";

export  default async function Projects() {
  
    const projects = await getAllProjects()
  

  return (
    <section className="projects" id="projects">
      <div className="separate"></div>
      <div className="triangle"></div>
      <Container className="container">
        <Slider projects={projects}/>
      </Container>
    </section>
  );
}
