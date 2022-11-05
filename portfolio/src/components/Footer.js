import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/logo-light.svg";

const Wrapper = styled.footer`
  width: 100%;
  color: white;
  margin-top: 72px;
  border-top: 1px solid gray;
`;
const Content = styled.div`
  max-width: 85%;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .copyright {
    color: gray;
    text-align: center;
    margin-top: 32px;
  }
  .sub-content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    .media {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 12px;
      color: var(--secondary-color);
      a {
        display: inline-block;
        margin-right: 8px;
        color: white;
      }
    }
  }
  .logo-caption {
    margin-top: 8px;
  }
`;
const LogoWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 4px;
  color: white;
  cursor: pointer;
  z-index: -122222;
  .logo {
    display: block;
    width: 24px;
    height: 24px;
    z-index: 1100;
  }
  .name {
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
  }
  a {
    text-decoration: none;
    color: gray;
    display: block;
    margin-left: 16px;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Content>
        <div className='sub-content'>
          <div>
            <LogoWrapper>
              <img src={LogoImg} alt='logo' className='logo' />
              <p className='name'>Sam</p>
              <a href='mailto:psalmuelle!@gmail.com'> psalmuelle1@gmail</a>
            </LogoWrapper>
            <p className='logo-caption'>Frontend Developer from Nigeria</p>
          </div>
          <div className='media'>
            <p>Media</p>
            <div>
              <a href='https://github.com/psalmuelle'>Github</a>
              <a href='https://www.linkedin.com/in/erinle-samuel/'>Linkedin</a>
              <a href='mailto:psalmuelle1@gmail.com'>Email</a>
            </div>
          </div>
        </div>
        <p className='copyright'>&copy; Copyright 2022. Developed By Sam </p>
      </Content>
    </Wrapper>
  );
}
