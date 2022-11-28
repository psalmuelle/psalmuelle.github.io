import React, { useState } from "react";
import LogoImg from "../assets/logo-light.svg";
import CloseBar from "../assets/close-bar.svg";
import OpenBar from "../assets/open-bar.svg";
import GithubLogo from "../assets/Github.svg";
import LinkedinLogo from "../assets/Linkedin.svg";
import EmailLogo from "../assets/Email.svg";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {motion} from "framer-motion"

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 32px 0 8px 0;
  max-width: 85%;
  text-align: center;
  margin: 0 auto;
  background-color: var(--primary-color);
 border-radius: 0 0 4px 4px;
  position: sticky;
  z-index: 99999;
  top: 0;
`;
const ImageWrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 4px;
  color: white;
  cursor: pointer;
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
`;
const LinkWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  width: fit-content;
  .nav-link {
    color: white;
    text-decoration: none;
  }
  .unselected {
    color: #ABB2BF;
  }
  span {
    color: var(--secondary-color);
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const SocialDeskTop = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
position: absolute;
top: 0;
left: -5.5%;
div{
height: 8rem;
width: 0;
background: #000;
border: 1px solid #ABB2BF;
}
a img{
  width: 32px;
  height: 32px;
}
@media (max-width: 900px) {
    display: none;
  }
`;

const Hamburger = styled.img`
  display: none;
  width: 28px;
  height: 28px;
  cursor: pointer;
  @media (max-width: 640px) {
    display: block;
  }
`;

const MobileMenuContainer = styled.ul`
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: none;
  background: var(--primary-color);
  width: 100%;
  padding: 0 7.5%;
  padding-top: 52px;
  height: calc(100vh - 63px);
  top: 100%;
  right: 0;
  list-style-type: none;
  z-index: 1222;
  
  .social-links {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    gap: 16px;
    margin-top: 42px;
    a img {
      width: 40px;
      height: 40px;
    }
  }
  .nav-link {
    color: white;
    text-decoration: none;
    font-size: 28px;
  }
  .unselected {
    color: #ABB2BF;
  }
  span {
    color: var(--secondary-color);
  }
  @media (max-width: 640px) {
    display: flex;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <Wrapper>
      <SocialDeskTop>
        <div></div>
        <a href='https://github.com/psalmuelle'>
          <img src={GithubLogo} alt='social-handle' />
        </a>
        <a href='https://www.linkedin.com/in/erinle-samuel/'>
          <img src={LinkedinLogo} alt='social-handle' />
        </a>
        <a href='mailto:psalmuelle1@gmail.com'>
          <img src={EmailLogo} alt='social-handle' />
        </a>
      </SocialDeskTop>
      <ImageWrapper onClick={()=> navigate("/")}>
        <img src={LogoImg} alt='logo' className='logo' />
        <p className='name'>Sam</p>
      </ImageWrapper>
      <LinkWrapper>
        <li>
          <NavLink
            end  
            className={({ isActive }) =>
              "nav-link" + (!isActive ? " unselected" : "")
            }
            to='/'>
            {" "}
            <span>#</span> home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              "nav-link" + (!isActive ? " unselected" : "")
            }
            to='/projects'>
            {" "}
            <span>#</span> works
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              "nav-link" + (!isActive ? " unselected" : "")
            }
            to='/about'>
            {" "}
            <span>#</span> about-me
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              "nav-link" + (!isActive ? " unselected" : "")
            }
            to='/contact'>
            {" "}
            <span>#</span> contacts
          </NavLink>
        </li>
      </LinkWrapper>
      <Hamburger
        src={open ? CloseBar : OpenBar}
        alt='hamburger'
        onClick={() => setOpen(!open)}
      />

      {/* Mobile Menu */}

      {open && (
        <MobileMenuContainer>
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              to='/'>
              {" "}
              <span>#</span> home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              to='/projects'>
              {" "}
              <span>#</span> works
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              to='/about'>
              {" "}
              <span>#</span> about-me
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              to='/contact'>
              {" "}
              <span>#</span> contacts
            </NavLink>
          </li>
          <li className='social-links'>
            <a href='https://github.com/psalmuelle'>
              <img src={GithubLogo} alt='social-handle' />
            </a>
            <a href='https://www.linkedin.com/in/erinle-samuel/'>
              <img src={LinkedinLogo} alt='social-handle' />
            </a>
            <a href='mailto:psalmuelle1@gmail.com'>
              <img src={EmailLogo} alt='social-handle' />
            </a>
          </li>
        </MobileMenuContainer>
      )}
    </Wrapper>
  );
};

export default Header;
