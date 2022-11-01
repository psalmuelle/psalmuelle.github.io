import React from "react";
import "./home.css";
import Header from "../../components/Header";
import styled from "styled-components";
import IllustrationImg from "../../assets/3d-me.svg"
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: nowrap;
max-width: 85%;
margin: 32px auto;
color: white;
gap: 32px;

@media (max-width: 750px) {
    flex-wrap: wrap;
  }
`
const Section = styled.section`


h1{
font-weight: 600;
font-size: 32px;
padding: 0 32px 24px 0;

span{
    color: var(--secondary-color);
}
}
p{
color: gray;
max-width: 450px;
}
button{
margin-top: 20px;
padding: 10px 20px;
color: white;
border: 1px solid var(--secondary-color);
background: none;
border-radius: 2px;
cursor: pointer;
}

img{
    display: block;
    width: 300px;
}
div{
    border: 1px solid gray;
    display: flex;
    padding:8px;
    gap: 10px;
    width: 300px;
    justify-content: flex-start;
    align-items: center;
    span{
        display: block;
        width: 16px;
        height: 16px;
        background: var(--secondary-color);
    }
    strong{
        font-weight: 500;
    }
}

@media (max-width: 750px) {
    width: 100%;
  }
`



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
    </div>
)
}
