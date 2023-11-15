"use client";
import React from "react";
import "./style.scss";
import Typography from "@/components/typography/Typography";
import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import { scrollToId } from "@/utils/scrollToId";
import SocialNetwork from "@/components/social-network/SocialNetwork";

export default function HeroTop() {
  const name = "< Cédric Gache >";

  return (
    <section className="hero">
      <Container className="container">
        <div className="title">
          <Typography variant="lg" color="grey" component="h1" className="name">
            {name}
          </Typography>
          <Typography variant="xl" component="h2" className="job">
            DEVELOPPEUR <br></br> WEB
          </Typography>
          <SocialNetwork variant="dark" showTitle={false} className="cta" />
        </div>
        <div className="circle"></div>
      </Container>
    </section>
  );
}
