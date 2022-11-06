import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { HomeContainer, Section, MantraSection, ProjectSection,
ProjectList, SkillSection, SkillContent, AboutSection, AboutContent } from "./Home.styled";

import IllustrationImg from "../../assets/3d-me.svg"
import { useNavigate } from "react-router-dom";
import {sampleProjects} from "../../projects";


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



export default function Home(){
    const navigate = useNavigate()
return (
    <div>
        <Header/>
        <HomeContainer>
        <Section>
           <h1> My name is <span>Sam</span>. I am a <span>Frontend Developer</span></h1>
            <p>I build seamless webapps that help users accomplish what they need to do!</p>
            <button onClick={()=> navigate("/contact")}>Contact Me!</button>
        </Section>
        <Section>
            <img alt="3d illustration" src={IllustrationImg}/>
            <div><span></span> Currently working on Portfolio</div>
        </Section>
        </HomeContainer>
      
        <MantraSection>
            "I have an Intrinsic Motivation to learning about Tech and its space"
            <p>- Erinle Samuel</p>
        </MantraSection>
        <ProjectSection>
           <div className="proj__nav">
            <h2><span>#</span>projects <div className="line"></div></h2>
            <p onClick={()=> navigate("/projects")}>View all ~~~&gt; </p>
           </div>

           <ProjectList>
    
        {
            sampleProjects.map((val, i)=>{
                return (
                    <li key={val.id}>
              <img src={images[val.img_src]} alt={val.title} />
              <p className='stack'>{val.stack}</p>

              <div className='info'>
                <h2>{val.title}</h2>
                <p>{val.description}</p>
                <div className="button__container">
                  <button onClick={()=>window.open(val.github_link, '_blank', 'noopener,noreferrer')}>Github &lt;~&gt;</button>
                  <button onClick={()=>window.open(val.live_url, '_blank', 'noopener,noreferrer')}>Live Site &ge;</button>
                </div>
              </div>
            </li>
                )
            })
        }
        </ProjectList>
        </ProjectSection>
        <SkillSection>
        <div className="skills__nav">
            <h2><span>#</span>skills <div className="line"></div></h2>
           </div>
           <SkillContent>
           <div className="img__container">
            <img src={images["skills-img.svg"]} alt="skills section"/>
           </div>

           <div className="my-skills">
          <figure>
            <h1>Languages</h1>
            <figcaption>
             Javascript Typescript Python Java Kotlin  
            </figcaption>
          </figure>

            <div className="compartment__skill">
          <figure>
            <h1>Frameworks</h1>
            <figcaption>
             Reactjs Nextjs React-Native Django Sass Tailwind BootStrap
            </figcaption>
          </figure>

          <figure>
            <h1>Tools</h1>
            <figcaption>
             Git Github Jira 
            </figcaption>
          </figure>
        </div>

        <div className="compartment__skill">
          <figure>
            <h1>Tests</h1>
            <figcaption>
             Jest Cypress  
            </figcaption>
          </figure>

          <figure>
            <h1>Others</h1>
            <figcaption>
             HTML CSS RestAPI Framer-Motion Firebase
            </figcaption>
          </figure>
        </div>
           </div>
           </SkillContent>
        </SkillSection>

        <AboutSection>
        <div className="about__nav">
            <h2><span>#</span>about-me <div className="line"></div></h2>
           </div>
          <AboutContent>
        
          </AboutContent>
        </AboutSection>
        <Footer/>
    </div>
)
}
