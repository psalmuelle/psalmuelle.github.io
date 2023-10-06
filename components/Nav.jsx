"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FiHome, FiInfo, FiMenu } from "react-icons/fi";
import { GrProjects, GrContact } from "react-icons/gr";
import { BsPencilSquare } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const NavLink = ({ title, href, icon, activeLink, hideTitle, onClick }) => {
  return (
    <Link
      href={href}
      className={`nav_link ${activeLink === href ? "active_btn" : ""} ${
        hideTitle ? "block w-fit h-[47px]" : ""
      }`}
      onClick={onClick}>
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

  const pathName = usePathname();

  return (
    <div className='w-fit h-fit xl:fixed'>
      <nav className={`nav-container ${hideNav ? "w-fit" : "w-60"} `}>
        <div>
          {/* DeskTop Navigation Menu */}
          <div
            className={`flex-between ${
              hideNav ? "flex-col-reverse gap-6" : ""
            } max-xl:hidden`}>
            <div className='logo py-[13px] '>
              <Image src={"/es1.png"} alt='Logo' width={28} height={28} />
            </div>
            <div onClick={HideNavTexts} className='p-3 mobile_navbar'>
              {hideNav ? <BiRightArrow /> : <BiLeftArrow />}
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`flex-between xl:hidden`}>
            <div className='logo py-3'>
              <Image src={"/es1.png"} alt='Logo' width={24} height={24} />
            </div>
            <div onClick={HideMobileNav} className='p-2 mobile_navbar'>
              {mobileNav ? <MdClose size={24} /> : <FiMenu size={24} />}
            </div>
          </div>

          <div
            className={` ${mobileNav ? "flex-center " : "max-xl:hidden"}  `}
            onClick={() => setMobileNav(false)}>
            <div className={`mt-10 flex justify-center flex-col gap-2`}>
              {!(pathName === "/") && (
                <NavLink
                  title={"Home"}
                  activeLink={activeLink}
                  href={"/"}
                  icon={<FiHome size={hideNav ? 20 : ""} />}
                  hideTitle={hideNav}
                />
              )}

              {!(pathName === "/about") && (
                <NavLink
                  title={"About"}
                  href={"/about"}
                  icon={<FiInfo size={hideNav ? 21 : 19} />}
                  activeLink={activeLink}
                  hideTitle={hideNav}
                />
              )}

              {!(pathName === "/projects") && (
                <NavLink
                  title={"Projects"}
                  activeLink={activeLink}
                  href={"/projects"}
                  icon={<GrProjects size={hideNav ? 20 : ""} />}
                  hideTitle={hideNav}
                />
              )}

              {!(pathName === "/blog") && (
                <NavLink
                  title={"Blog"}
                  activeLink={activeLink}
                  href={"/blog"}
                  icon={<BsPencilSquare size={hideNav ? 20 : ""} />}
                  hideTitle={hideNav}
                />
              )}

              {!(pathName === "/contact") && (
                <NavLink
                  title={"Contact"}
                  activeLink={activeLink}
                  href={"/contact"}
                  icon={<GrContact size={hideNav ? 20 : ""} />}
                  hideTitle={hideNav}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
