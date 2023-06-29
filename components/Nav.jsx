"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineVerticalLeft,
  AiOutlineVerticalRight,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { FiHome, FiMenu } from "react-icons/fi";
import { GrProjects, GrContact } from "react-icons/gr";
import { BsPencilSquare } from "react-icons/bs";
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
      className={`glassmorphism z-10 text-[#0b0c15] p-4 max-xl:p-2 ${
        hideNav ? "w-fit" : "w-60"
      } mobile_nav absolute top-4 xl:left-4 xl:min-h-[450px] xl:h-[80vh] max-xl:mx-auto max-xl:right-0 max-xl:left-0`}>
      <div className=''>
        {/* DeskTop Navigation Menu */}
        <div
          className={`flex justify-between items-center ${
            hideNav ? "flex-col-reverse gap-6" : ""
          } max-xl:hidden`}>
          <div className='border-4 border-[#0b0c15] px-2 py-[13px] rounded-full'>
            <Image src={"/es1.png"} alt='Logo' width={28} height={28} />
          </div>
          <div onClick={HideNavTexts} className='p-3 cursor-pointer active_btn'>
            {hideNav ? <AiOutlineVerticalLeft /> : <AiOutlineVerticalRight />}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`flex justify-between items-center xl:hidden`}>
          <div className='border-4 border-[#0b0c15] px-2 py-3 rounded-full'>
            <Image src={"/es1.png"} alt='Logo' width={24} height={24} />
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
              icon={<GrProjects size={hideNav ? 20 : ""} />}
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
              icon={<GrContact size={hideNav ? 20 : ""} />}
              hideTitle={hideNav}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
