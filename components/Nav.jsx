"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";
import { FiHome } from "react-icons/fi";

const NavLink = ({title, href, icon}) => {
  return (
    <Link href={href}>
      {icon}
      <p>{title}</p>
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
        <NavLink
        title={'Home'}
        href={'/'}
        icon= {(<FiHome/>)}
        />
      </div>
    </nav>
  );
};

export default Nav;
