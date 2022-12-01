import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  HomeContainer,
  Section,
  MantraSection,
  ProjectSection,
  ProjectList,
  SkillSection,
  SkillContent,
  AboutSection,
  AboutContent,
  ContactMeContent,
  ContactMeSection,
} from "./Home.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import IllustrationImg from "../../assets/3d-me.svg";
import SamPhoto from '../../assets/erinle_sam.png'
import { useNavigate } from "react-router-dom";
import { sampleProjects } from "../../projects";

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

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <HomeContainer>
        <Section>
          <h1>
            {" "}
            My name is <span>Sam</span>. I am a <span>Frontend Developer</span>
          </h1>
          <p>
            I build seamless webapps that help users accomplish what they need
            to do!
          </p>
          <button onClick={() => navigate("/contact")}>Contact Me!</button>
        </Section>
        <Section>
          <LazyLoadImage
            style={{ zIndex: "-999999" }}
            effect='blur'
            alt='3d illustration'
            src={IllustrationImg}
          />
          <div>
            <span></span> Currently working on Portfolio
          </div>
        </Section>
      </HomeContainer>

      <MantraSection>
        "I Have An Intrinsic Motivation To Learning!"
        <p>- Erinle Samuel</p>
      </MantraSection>
      <ProjectSection>
        <div className='proj__nav'>
          <h2>
            <span>#</span>projects <div className='line'></div>
          </h2>
          <p onClick={() => navigate("/projects")}>View all ~~~&gt; </p>
        </div>

        <ProjectList>
          {sampleProjects.map((val, i) => {
            return (
              <li key={val.id}>
                <LazyLoadImage
                  effect='blur'
                  src={images[val.img_src]}
                  alt={val.title}
                />
                <p className='stack'>{val.stack}</p>

                <div className='info'>
                  <h2>{val.title}</h2>
                  <p>{val.description}</p>
                  <div className='button__container'>
                    <button
                      onClick={() =>
                        window.open(
                          val.github_link,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }>
                      Github &lt;~&gt;
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          val.live_url,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }>
                      Live Site &ge;
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ProjectList>
      </ProjectSection>
      <SkillSection>
        <div className='skills__nav'>
          <h2>
            <span>#</span>skills <div className='line'></div>
          </h2>
        </div>
        <SkillContent>
          <div className='my-skills'>
            <figure>
              <h1>Languages</h1>
              <figcaption>Javascript Typescript Python</figcaption>
            </figure>

            <div className='compartment__skill'>
              <figure>
                <h1>Web Frameworks</h1>
                <figcaption>
                  Nextjs Django BootStrap
                </figcaption>
              </figure>

              <figure>
                <h1>Libraries</h1>
                <figcaption>React, React Native</figcaption>
              </figure>

            </div>

            <div className='compartment__skill'>
              <figure>
                <h1>Tests</h1>
                <figcaption>Jest Cypress</figcaption>
              </figure>

              <figure>
                <h1>Others</h1>
                <figcaption>HTML CSS RestAPI Framer-Motion Firebase</figcaption>
              </figure>
            </div>
            <div className='compartment__skill'>

              <figure>
                <h1>Tools</h1>
                <figcaption>Git Github Jira Linear</figcaption>
              </figure>

              <figure>
                <h1>Others</h1>
                <figcaption>HTML CSS RestAPI Framer-Motion Firebase</figcaption>
              </figure>
            </div>
          </div>
        </SkillContent>
      </SkillSection>

      <AboutSection>
        <div className='about__nav'>
          <h2>
            <span>#</span>about-me <div className='line'></div>
          </h2>
        </div>
        <AboutContent>
          <div>
            <h1>Hi, I'm Erinle Samuel</h1>
            <p>
              I am a frontend developer with a passion for building webapps that
              help users accomplish what they need to do. I am a self-taught
              developer who is always eager to learn new things. I am currently
              working on my portfolio and I am open to new opportunities.
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <button onClick={() => navigate("/contact")}>
              Read More -&gt;
            </button>
          </div>
          <div>
            <LazyLoadImage width={300} src={SamPhoto}/>
          </div>
        </AboutContent>
      </AboutSection>


      <ContactMeSection>
        <div className='contact__nav'>
          <h2>
            <span>#</span>contacts <div className='line'></div>
          </h2>
        </div>
        <ContactMeContent>
         
        </ContactMeContent>
      </ContactMeSection>
      <Footer />
    </div>
  );
}
