"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight, AiOutlineInfoCircle, AiOutlineLinkedin, AiOutlineGithub, AiOutlinePhone } from "react-icons/ai";
import { FiHome, FiTwitter, FiMenu } from "react-icons/fi";
import { GrProjects, GrContact } from "react-icons/gr";
import { BsPencilSquare, BsMedium } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

const NavLink = ({ title, href, icon }) => {
  return (
    <Link href={href}>
      {icon}
      <p>{title}</p>
    </Link>
  );
};

const SocialLink = ({ href, title, icon, followers }) => {
  return (
    <Link href={href} target="_blank">
      <div>
        {icon}
        <p>{title}</p>
      </div>

      <p>{followers}</p>
    </Link>
  );
};

const Nav = () => {
  const [hideNav, setHideNav] = useState(false);

  const HideNavTexts = () => {
    setHideNav((prev) => !prev);
  };

  return (
    <nav>
      <div>
        <Image src={"/es1.png"} alt='Logo' width={32} height={32} />
        <div onClick={HideNavTexts}>
          {hideNav ? <AiOutlineVerticalLeft /> : <AiOutlineVerticalRight />}
        </div>
      </div>

      <div>
        <NavLink title={"Home"} href={"/"} icon={<FiHome />} />

        <NavLink title={"Projects"} href={"/projects"} icon={<GrProjects />} />

        <NavLink title={"Blog"} href={"/blog"} icon={<BsPencilSquare />} />

        <NavLink title={"About"} href={"/about"} icon={<AiOutlineInfoCircle />} />

        <NavLink title={"Contact"} href={"/contact"} icon={<GrContact />} />
      </div>

      <div>
        <SocialLink href={"https://www.linkedin.com/in/erinle-samuel/"} title={'LinkedIn'} icon={<AiOutlineLinkedin/>} followers={'200'} />

        <SocialLink href={"https://github.com/psalmuelle"} title={'GitHub'} icon={<AiOutlineGithub/>} followers={'15'} />

        <SocialLink href={"https://medium.com/@erinle-sam"} title={'Medium'} icon={<BsMedium/>} followers={'20'} />

        <SocialLink href={"https://twitter.com/erinle_sam"} title={'Twitter'} icon={<FiTwitter/>} followers={'50'} />

        <SocialLink href={"tel:+2348158842213"} title={'Call'} icon={<AiOutlinePhone/>} />
      </div>
    </nav>
  );
};

export default Nav;
