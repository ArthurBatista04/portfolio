import React from "react";
import Container from "@material-ui/core/Container";
import {
  Header,
  Introdution,
  About,
  Skills,
  ContactForm,
  Experiences,
  Footer,
  Menu,
  Interests,
} from "../components/";

const sections = [
  { title: "About", url: "#About" },
  { title: "Experiences", url: "#Experience" },
  { title: "Skills", url: "#Skills" },
  { title: "Interests", url: "#Interests" },
  { title: "Contact", url: "#Contact" },
];

const mainFeaturedPost = {
  title: "Arthur Rodrigues Batista",
  image: "https://img.ibxk.com.br/2017/06/07/07091555185016.jpg",
  imgText: "main image description",
};

const Main = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Header title="Welcome" sections={sections} />
        <main>
          <Introdution post={mainFeaturedPost}></Introdution>
          <About></About>
          <Experiences></Experiences>
          <Skills></Skills>
          <Interests></Interests>
          <ContactForm></ContactForm>
        </main>
      </Container>
      <Footer title="Footer" />
      <Menu sections={sections} />
    </div>
  );
};

export default Main;
