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
color: #ABB2BF;
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
    border: 1px solid #ABB2BF;
    display: flex;
    padding:8px;
    gap: 10px;
    width: 300px;
    justify-content: flex-start;
    align-items: center;
    margin-top: 8px;
    font-size: 14.2px;
    span{
        display: block;
        width: 16px;
        height: 16px;
        background: var(--secondary-color);
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
max-width: 85%;

.proj__nav{
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
    .line{
        width: 35vw;
        height: 1px;
        margin-left: 24px;
        background-color: var(--secondary-color);
    }
    @media (max-width: 900px) {
    font-size: 18px;
    .line{
        width: 0;
    }
  }
}
p{
  cursor: pointer;
}
}
`
const ProjectList = styled.ul`
 max-width: 100%;
  margin: 0 auto;
  margin-top: 48px;
  color: white;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: baseline;
  


  li{
    max-width: 330px;
  height: fit-content;
  border: 1px solid gray;
  border-radius: 3px;
  img {
    display: block;
    width: 100%;
    height: 201px;
    border-radius: 2px 2px 0 0;
    cursor: pointer;
  }
  .stack {
    color: #ABB2BF;
    padding: 8px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  .info {
    padding: 16px;

    h2 {
      font-weight: 500;
      font-size: 24px;
    }
    p {
      color: #ABB2BF;
      padding-top: 4px;
      padding-bottom: 16px;
    }
    .button__container {
      button {
        border: 1px solid var(--secondary-color);
        background: none;
        color: white;
        padding: 8px 16px;
        margin-right: 10px;
        font-weight: 500;
        font-size: 16px;
        border-radius: 1px;
        cursor: pointer;
      }
    }
  }
  }

  @media (max-width: 1173px) {
justify-content: center;
flex-wrap: wrap;
gap: 42px;
  }
`
const SkillSection = styled.section`
margin: 0 auto;
margin-top:100px ;
max-width: 85%;
.skills__nav{
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
    .line{
        width: 25vw;
        height: 1px;
        margin-left: 24px;
        background-color: var(--secondary-color);
    }
    @media (max-width: 900px) {
    font-size: 18px;
    .line{
        width: 0;
    }
  }
}
p{
  cursor: pointer;
}
}
`
const SkillContent= styled.div`
margin-top: 48px;
display: flex;
justify-content: space-between;
color: white;
.my-skills{
display: flex;
justify-content: center;
align-items: baseline;
gap: 16px;
.compartment__skill{
    display: flex;
    flex-direction: column;
    gap: 12px;
}
figure{
    max-width: 200px;
    border: 1px solid #ABB2BF;
    padding: 8px 0;
    color: #ABB2BF;
 h1{
    border-bottom: 1px solid #ABB2BF;
    padding: 0 8px;
    color: white;
    padding-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
 } 
 figcaption{
    padding: 0 8px;
    padding-top: 8px;
 }  
}
}
@media (max-width: 1000px) {
  flex-direction:column ;
  justify-content: center;
  align-items: center;
  .my-skills{
    flex-wrap: wrap;
    justify-content: center;
  }
  }
`
const AboutSection = styled.section`
margin: 0 auto;
margin-top:100px ;
max-width: 85%;
.about__nav{
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
    .line{
        width: 15vw;
        height: 1px;
        margin-left: 24px;
        background-color: var(--secondary-color);
    }
    @media (max-width: 900px) {
    font-size: 18px;
    .line{
        width: 0;
    }
  }
}
p{
  cursor: pointer;
}
}
`

const AboutContent = styled.div`

`

export {HomeContainer, Section, MantraSection, ProjectSection, ProjectList, SkillSection, SkillContent, AboutSection, AboutContent}

