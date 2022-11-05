import React from "react";
import { Heading, Wrapper, Container } from "./Projects.styled";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import projects from "../../projects";

const reversedItems = projects.map((item) => item).reverse();

function importAll(r) {
  const images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);




export default function Projects() {


  return (
    <div>
      <Header />

      <Heading>
        <h1>
          <span>/</span>projects
        </h1>
        <p>List of my projects</p>
      </Heading>

      <Wrapper>
        {reversedItems.map((val, i) => {
          return (
            <Container key={val.id}>
              <img src={images[val.img_src]} alt={val.title} />
              <p className='stack'>{val.stack}</p>

              <div className='info'>
                <h2>{val.title}</h2>
                <p>{val.description}</p>
                <div>
                  <button onClick={()=>window.open(val.github_link, '_blank', 'noopener,noreferrer')}>Github &lt;~&gt;</button>
                  <button onClick={()=>window.open(val.live_url, '_blank', 'noopener,noreferrer')}>Live Site &ge;</button>
                </div>
              </div>
            </Container>
          );
        })}
      </Wrapper>
      <Footer />
    </div>
  );
}
