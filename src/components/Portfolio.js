import React, { useState } from "react";
import Project from "./Project";
import { Container, Row, Col } from "react-bootstrap";
function Portfolio() {
  // name, description, deployedLink, githubLink, image {each project}
  const projects = [
    {
      // Example
      name: "Tech-Blog",
      description:
        "An application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
      deployedLink: "https://tech-blog-russ.herokuapp.com/",
      githubLink: "https://github.com/RussC22/Tech-Blog",
      image: "Tech-Blog.png",
    },
    // {
    //   name: "Text-Editor",
    //   description:
    //     "This text editor runs in the browser, this app will be a single-page application that meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser; the application also functions offline.",
    //   deployedLink: "https://text-editor-russc22.herokuapp.com/",
    //   githubLink: "https://github.com/RussC22/Text-Editor",
    //   image: "Text_Editor.png",
    // },
    {
      name: "Social-Network-API",
      description:
        "This is an API for my social network that uses a NoSQL database",
      demoVideoLink: "https://drive.google.com/file/d/1nTn_3mMy9QNPsr6BZo57RrHkIT0UfsCc/view",
      githubLink: "https://github.com/RussC22/Social-Network-API",
      image: "Social-Network-API.png",
    },
    {
      name: "Note Taker",
      description:
        "An application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
      deployedLink: "https://tech-blog-russ.herokuapp.com/",
      githubLink: "https://github.com/RussC22/Tech-Blog",
      image: "Note Taker.png",
    },
  ];
  return (
    <div className="content pb-5">
      <h2>Portfolio</h2>

      <Container className="bg-light bg-opacity-50 rounded-4 shadow mt-5 mb-5">
        <Row className="portfolio p-3">
          {projects.map((project) => (
            <Col xs={6} md={4} className="project-col">
              <Project project={project} key={project.name} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
