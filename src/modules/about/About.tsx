"use client"

import React from "react";
import "./style.scss";
import Image from "next/image";
import Typography from "@/components/typography/Typography";
import Container from "@/components/container/Container";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    // rootMargin : "-100px",
    triggerOnce : true
  });



  return (
    <section className="about" id="about">
      <div  className={`separate ${inView? "separate_visible" : null}`} ></div>
      <Container  className={`container ${inView?"about_visible":null}`}>
        <div ref={ref} className="description">
          <div className="description-header">
            <div className="picture">
              <Image src={"/images/profil-square.jpg"} alt="profil" width={100} height={100}/>
            </div>
            <Typography variant="md" className="title" component="h2">
              Vous recherchez un développeur web pour votre entreprise ou un
              projet ?
            </Typography>
          </div>
          <Typography className="content" component="p">
            Passionné d&apos; informatique depuis 30 ans et après avoir passé
            près de 20 ans dans la maintenance et la gestion d&apos;appareils
            automatisés en libre service, j&apos;ai depuis peu decidé de me
            lancer dans la programmation et principalement dans la création et
            l&apos;integration de site web.<br></br> D&apos;abord autodidacte pendant
            quelques années, je me suis ensuite orienté vers une formation
            OpenClassrooms pour approfondir mes connaissances. <br></br>Je vous laisse
            découvrir mes compétences et differents projets personnels ainsi que
            quelques uns issus de ma formation.
          </Typography>
          <Typography component="p">
            Cédric.
          </Typography>
        </div>

        <Typography className="skills" variant="md">
          <span>HTML</span>
          <span>CSS</span>
          <span>React</span>
          <span>Angular</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>SEO</span>
        </Typography>
      </Container>
    </section>
  );
}
