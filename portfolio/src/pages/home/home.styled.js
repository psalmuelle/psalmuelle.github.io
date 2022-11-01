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
z-index: -122;
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
margin: 0 auto;
margin-top:100px ;
margin-bottom: 500px;
max-width: 85%;

div{
display: flex;
justify-content: space-between;
align-items: center;
color: white;
h2{
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-weight: 500;
    font-size: 28px;

    span{
        color: var(--secondary-color);
        padding-right: 6px;
    }
    div{
        width: 35vw;
        height: 1px;
        margin-left: 24px;
        background-color: var(--secondary-color);
    }
    @media (max-width: 900px) {
    font-size: 18px;
    div{
        width: 0;
    }
  }
}
p{
  cursor: pointer;
}
}
`


export {HomeContainer, Section, MantraSection, ProjectSection}