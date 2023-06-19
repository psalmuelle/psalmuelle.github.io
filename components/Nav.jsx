"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineVerticalLeft,
  AiOutlineVerticalRight,
  AiOutlineInfoCircle,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlinePhone,
} from "react-icons/ai";
import { FiHome, FiTwitter, FiMenu } from "react-icons/fi";
import { GrProjects, GrContact } from "react-icons/gr";
import { BsPencilSquare, BsMedium } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const NavLink = ({ title, href, icon, activeLink }) => {
  return (
    <Link
      href={href}
      className={`nav_link ${activeLink === href ? "active_btn" : ""}`}>
      {icon}
      <p>{title}</p>
    </Link>
  );
};

const SocialLink = ({ href, title, icon, followers }) => {
  return (
    <Link href={href} target='_blank'>
      <div>
        {icon}
        <p>{title}</p>
      </div>

      <p>{followers}</p>
    </Link>
  );
};

const Nav = ({ activeLink }) => {
  const [hideNav, setHideNav] = useState(false);

  const HideNavTexts = () => {
    setHideNav((prev) => !prev);
  };

  return (
    <nav className='glassmorphism text-white p-4 bg-[rgba(116,29,216,1)] w-64'>
      <div className='flex justify-between items-center '>
        <div className='border-2 border-white px-2 py-3.5 rounded-full'>
          <Image
            className='invert'
            src={"/es1.png"}
            alt='Logo'
            width={32}
            height={32}
          />
        </div>
        <div onClick={HideNavTexts} className='p-3 cursor-pointer active_btn'>
          {hideNav ? <AiOutlineVerticalLeft /> : <AiOutlineVerticalRight />}
        </div>
      </div>

      <div className='mt-10 flex justify-center flex-col gap-4'>
        <NavLink
          title={"Home"}
          activeLink={activeLink}
          href={"/"}
          icon={<FiHome />}
        />

        <NavLink
          title={"Projects"}
          activeLink={activeLink}
          href={"/projects"}
          icon={<GrProjects className='invert' />}
        />

        <NavLink
          title={"Blog"}
          activeLink={activeLink}
          href={"/blog"}
          icon={<BsPencilSquare />}
        />

        <NavLink
          title={"About"}
          href={"/about"}
          icon={<AiOutlineInfoCircle />}
          activeLink={activeLink}
        />

        <NavLink
          title={"Contact"}
          activeLink={activeLink}
          href={"/contact"}
          icon={<GrContact className='invert' />}
        />
      </div>

      <div className='bg-black flex justify-center flex-col gap-4'>
        <SocialLink
          href={"https://www.linkedin.com/in/erinle-samuel/"}
          title={"LinkedIn"}
          icon={<AiOutlineLinkedin />}
          followers={"200"}
        />

        <SocialLink
          href={"https://github.com/psalmuelle"}
          title={"GitHub"}
          icon={<AiOutlineGithub />}
          followers={"15"}
        />

        <SocialLink
          href={"https://medium.com/@erinle-sam"}
          title={"Medium"}
          icon={<BsMedium />}
          followers={"50"}
        />

        <SocialLink
          href={"https://twitter.com/erinle_sam"}
          title={"Twitter"}
          icon={<FiTwitter />}
          followers={"50"}
        />

        <SocialLink
          href={"tel:+2348158842213"}
          title={"Call"}
          icon={<AiOutlinePhone />}
        />
      </div>
    </nav>
  );
};

export default Nav;
