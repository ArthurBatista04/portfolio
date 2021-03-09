import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import {
  Header,
  Introdution,
  About,
  Skills,
  ContactForm,
  Experiences,
  Footer,
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
  image:
    "https://wallpapertag.com/wallpaper/full/d/c/f/130130-download-dark-wallpaper-1920x1080-1920x1080-photo.jpg",
  imgText: "main image description",
};

class Main extends Component {
  render() {
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
      </div>
    );
  }
}

export default Main;
