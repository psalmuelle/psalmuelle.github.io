import React from "react";
import { Heading, Wrapper, Container } from "./Projects.styled";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjExample from "../../assets/proj-example.png"



export default function Projects(){
    return (
        <div>
            <Header/>

            <Heading>
            <h1><span>/</span>projects</h1>
            <p>List of my projects</p>
            </Heading>

            <Wrapper>
            <Container>
                <img src={ProjExample} alt="example" />
                <p className="stack">Html, CSS and Javascript</p>

                <div className="info">
                <h2>Example</h2>
                <p>Minecraft Server Hosting</p>
                <div>
                    <button>Github &lt;~&gt;</button>
                    <button>Live Site &ge;</button>
                </div>
                </div>
            </Container>
            </Wrapper>
            <Footer/>
        </div>
    )
    }