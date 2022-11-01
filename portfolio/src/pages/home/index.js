import React from "react";
import "./home.css";
import Header from "../../components/Header";
import styled from "styled-components";
import IllustrationImg from "../../assets/3d-me.svg"

const HomeContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
`
const Section = styled.section`

`



export default function Home(){
return (
    <div>
        <Header/>
        <HomeContainer>
        <Section>
            Sam is a <span>Frontend</span> and <span>Blockchain Developer</span>
        </Section>
        <Section>
            <img alt="3d illustration" src={IllustrationImg}/>
            <p><span></span> Currently working on <strong>Portfolio</strong></p>
        </Section>
        </HomeContainer>
    </div>
)
}
