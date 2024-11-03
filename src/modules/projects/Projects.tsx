import React from "react";
import "./style.scss";
import Container from "@/components/container/Container";
import Slider from "@/components/slider/Slider";
import { getAllProjects } from "@/api/api";
import Typography from "@/components/typography/Typography";

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <section className="projects" id="projects">
      <div className="separate"></div>
      <div className="triangle"></div>

      <Typography component="h2" variant="lg" className="title">
        Mes Projets
      </Typography>
      <Container className="container">
        <Slider projects={projects} />
      </Container>
    </section>
  );
}
