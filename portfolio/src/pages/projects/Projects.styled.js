import styled from "styled-components";

const Heading = styled.div`
color: white;
max-width: 85%;
margin: 0 auto;
margin-top: 52px;
h1{
    font-weight: 600;
    span{
        color: var(--secondary-color);
        padding-right: 4px;
    }
}
p{
    margin-top: 8px;
}
`


const Wrapper = styled.ul`
max-width: 85%;
margin: 0 auto;
margin-top: 52px;
color: white;

`


const Container = styled.li`
width: 330px;
height: fit-content;

img{
    display: block;
    width: 100%;
}


`


export {
    Heading,
    Wrapper,
    Container
}