import styled from "styled-components";

const HomeContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: nowrap;
max-width: 85%;
margin: 32px auto;
color: white;
gap: 2px;

@media (max-width: 750px) {
    flex-wrap: wrap;
    gap: 32px;
  }
`
const Section = styled.section`


h1{
font-weight: 600;
font-size: 32px;
padding: 0 32px 24px 0;
max-width: 700px;
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
    margin-top: 8px;
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

const MantraSection = styled.div`
margin: 16px auto;
margin-top: 72px;
width: fit-content;
border: 1px solid gray;
position: relative;
font-size: 20px;
text-align: center;
padding: 9px 18px;
font-weight: 500;
color: white;

p{
    position: absolute;
    border: 1px solid gray;
    top: 100%;
    padding: 7px 14px;
    right: 0;
    font-size: 16px;
}
@media (max-width: 900px) {
    max-width: 97%;
    font-size: 18px;
  }

`

const ProjectSection = styled.section`

`


export {HomeContainer, Section, MantraSection, ProjectSection}