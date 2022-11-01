import React from "react";
import Header from "../../components/Header";
import { HomeContainer, Section, MantraSection, ProjectSection } from "./home.styled";
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
            This is the project i Am talking about. i know this is not the rhing i ean t to do but dont worru i wiill come t te reso  asf as fa sfa sfj   aisfsf afsjk anas fkas fn fn  f a ka fnf na fsn fnk f k fd f nkd fnk
        </ProjectSection>
    </div>
)
}
