import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import {Header, Introdution,About,Skills,ContactForm, Experiences, Footer} from '../components/'
const sections = [
  { title: "About", url: "#About" },
  { title: "Experience", url: "#Experience" },
  { title: "Skills", url: "#Skills" },
  { title: "Contact", url: "#Contact" },
];

const mainFeaturedPost = {
  title: "Arthur Rodrigues Batista",
  image:
    "https://wallpapertag.com/wallpaper/full/d/c/f/130130-download-dark-wallpaper-1920x1080-1920x1080-photo.jpg",
  imgText: "main image description",
};

const experiences = [
  {
    title: "Eureka Labs",
    description: "Web Developer",
    date: "2020 - Present",
    local: "Maringá-PR",
    icon: "work",
  },
  {
    title: "State University of Maringá",
    description: "Bachelor of Computer Science",
    date: "2017 - Present",
    local: "Maringá-PR",
    icon: "school",
  },
  {
    title: "PET-Informática",
    description:
      "Tutor of Programming Languages, Researcher and  Web Developer",
    date: "2017 - 2020",
    local: "Maringá-PR",
    icon: "work",
  },
];


class Main extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="lg">
          <Header title="Hi, nice to meet you." sections={sections} />
          <main>
            <Introdution post={mainFeaturedPost}></Introdution>
            <About></About>
            <Experiences experiences={experiences}></Experiences>
            <Skills></Skills>
            <ContactForm></ContactForm>
          </main>
        </Container>
        <Footer title="Footer" />
      </div>
    );
  }
}

export default Main;
