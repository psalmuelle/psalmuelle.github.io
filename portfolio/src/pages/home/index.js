import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { HomeContainer, Section, MantraSection, ProjectSection } from "./Home.styled";
import IllustrationImg from "../../assets/3d-me.svg"
import { useNavigate } from "react-router-dom";



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
            <div><span></span> Currently working on <strong>Portfolio</strong></div>
        </Section>
        </HomeContainer>
      
        <MantraSection>
            "My greatest assets are my clients. I treat each client as if they are the only one!"
            <p>- Laurice Leitao</p>
        </MantraSection>
        <ProjectSection>
           <div>
            <h2><span>#</span>projects <div></div></h2>
            <p onClick={()=> navigate("/projects")}>View all ~~~&gt; </p>
           </div>

        </ProjectSection>
        <Footer/>
    </div>
)
}
