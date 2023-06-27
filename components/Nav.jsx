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
  AiOutlineSend,
} from "react-icons/ai";
import { FiHome, FiTwitter, FiMenu } from "react-icons/fi";
import { GrProjects, GrContact } from "react-icons/gr";
import { BsPencilSquare, BsMedium } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const NavLink = ({ title, href, icon, activeLink, hideTitle }) => {
  return (
    <Link
      href={href}
      className={`nav_link ${activeLink === href ? "active_btn" : ""} ${
        hideTitle ? "block w-fit h-[47px]" : ""
      }`}>
      {icon}
      {!hideTitle ? <p>{title}</p> : ""}
    </Link>
  );
};

const SocialLink = ({ href, title, icon, followers, hideTitle }) => {
  return (
    <Link
      className={`flex justify-between items-center p-2 rounded-lg last-of-type:justify-center hover:bg-black ${
        hideTitle ? "block w-fit p-3" : ""
      }`}
      href={href}
      target='_blank'>
      <div className='flex justify-center items-center gap-1'>
        {icon}
        {!hideTitle ? <p>{title}</p> : ""}
      </div>

      {!hideTitle ? <p>{followers}</p> : ""}
    </Link>
  );
};

const Nav = ({ activeLink }) => {
  const [hideNav, setHideNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const HideNavTexts = () => {
    setHideNav((prev) => !prev);
  };

  const HideMobileNav = () => {
    setMobileNav((prev) => !prev);
  };

  return (
    <nav
      className={`glassmorphism text-white p-4 max-xl:p-2 bg-[rgba(116,29,216,0.9)] w-64 ${
        hideNav ? "w-fit" : ""
      } mobile_nav`}>
      <div className=''>
        {/* DeskTop Navigation Menu */}
        <div
          className={`flex justify-between items-center ${
            hideNav ? "flex-col-reverse gap-6" : ""
          } max-xl:hidden`}>
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

        {/* Mobile Navigation Menu */}
        <div className={`flex justify-between items-center xl:hidden`}>
          <div className='border-2 border-white px-2 py-3 rounded-full'>
            <Image
              className='invert'
              src={"/es1.png"}
              alt='Logo'
              width={24}
              height={24}
            />
          </div>
          <div
            onClick={HideMobileNav}
            className='p-2 cursor-pointer active_btn'>
            {mobileNav ? <MdClose size={24} /> : <FiMenu size={24} />}
          </div>
        </div>

        <div className={` ${mobileNav ? "max-xl:block" : "max-xl:hidden"}`}>
          <div className={`mt-10 flex justify-center flex-col gap-2`}>
            <NavLink
              title={"Home"}
              activeLink={activeLink}
              href={"/"}
              icon={<FiHome size={hideNav ? 20 : ""} />}
              hideTitle={hideNav}
            />

            <NavLink
              title={"Projects"}
              activeLink={activeLink}
              href={"/projects"}
              icon={<GrProjects size={hideNav ? 20 : ""} className='invert' />}
              hideTitle={hideNav}
            />

            <NavLink
              title={"Blog"}
              activeLink={activeLink}
              href={"/blog"}
              icon={<BsPencilSquare size={hideNav ? 20 : ""} />}
              hideTitle={hideNav}
            />

            <NavLink
              title={"About"}
              href={"/about"}
              icon={<AiOutlineInfoCircle size={hideNav ? 20 : ""} />}
              activeLink={activeLink}
              hideTitle={hideNav}
            />

            <NavLink
              title={"Contact"}
              activeLink={activeLink}
              href={"/contact"}
              icon={<GrContact className='invert' size={hideNav ? 20 : ""} />}
              hideTitle={hideNav}
            />
          </div>

          <div className='glassmorphism bg-opacity-50 bg-gray-50 mt-6 mb-2 text- rounded-md py-4 px-2 flex justify-center flex-col gap-2'>
            <SocialLink
              href={"https://www.linkedin.com/in/erinle-samuel/"}
              title={"LinkedIn"}
              icon={<AiOutlineLinkedin size={hideNav ? 20 : ""} />}
              followers={"200"}
              hideTitle={hideNav}
            />

            <SocialLink
              href={"https://github.com/psalmuelle"}
              title={"GitHub"}
              icon={<AiOutlineGithub size={hideNav ? 20 : ""} />}
              followers={"15"}
              hideTitle={hideNav}
            />

            <SocialLink
              href={"https://medium.com/@erinle-sam"}
              title={"Medium"}
              icon={<BsMedium size={hideNav ? 20 : ""} />}
              followers={"50"}
              hideTitle={hideNav}
            />

            <SocialLink
              href={"https://twitter.com/erinle_sam"}
              title={"Twitter"}
              icon={<FiTwitter size={hideNav ? 20 : ""} />}
              followers={"50"}
              hideTitle={hideNav}
            />

            <SocialLink
              href={"mailto:psalmuelle1@gmail.com"}
              title={"Email"}
              icon={<AiOutlineSend size={hideNav ? 20 : ""} />}
              hideTitle={hideNav}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
