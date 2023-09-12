"use client"
import React from "react";
import "./style.scss";
import Typography from "@/components/typography/Typography";
import Container from "@/components/container/Container";
import Form from "@/components/form/Form";
import SocialNetwork from "@/components/social-network/SocialNetwork";
import Button from "@/components/button/Button";

export default function Footer() {
  return (
    <footer id="contact">
      <Container className="contact">
        <div>
          <Typography
            variant="md"
            color="light"
            component="h3"
            className="title"
          >
            Retrouvez moi sur les réseaux sociaux :
          </Typography>
          <SocialNetwork />
          <Typography
            variant="caption"
            color="light"
            component="div"
            className="portfolio"
          >
            <p>
              Site réalisé avec NextJs. Vous pouvez retrouver le code source sur
              ma page github ou cliquer directement sur le lien suivant :
            </p>
          </Typography>
          <Button className="portfolio-btn" onClick={()=>{window.open("https://github.com/Vrogdish/Mon-portfolio-3.0", "_blank")}}>
            Code source
          </Button>
        </div>
        <div>
          <Typography
            variant="md"
            color="light"
            component="h3"
            className="title"
          >
            Contacter moi via le formulaire :
          </Typography>
          <Form />
        </div>
      </Container>
    </footer>
  );
}
