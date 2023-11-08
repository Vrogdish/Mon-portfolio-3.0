import React from "react";
import "./style.scss";
import Container from "@/components/container/Container";
import Slider from "@/components/slider/Slider";
import { getData} from "@/api/api";

export  default async function Projects() {
    const projects = await getData()
  

  return (
    <section className="projects" id="projects">
      <div className="separate"></div>
      <div className="triangle"></div>
      <Container className="container">
        <Slider itemList={projects}/>
      </Container>
    </section>
  );
}
