import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import {MdOutlineMail} from 'react-icons/md'
import { BsMedium } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";


const FooterLink =({href, icon})=>{
  return(
    <Link href={href} >
      {icon}
    </Link>
  )
}


const Footer = () => {
  return (
    <footer className=''>
    <div>
    <FooterLink href={"https://www.linkedin.com/in/erinle-samuel/"} icon={<AiOutlineLinkedin size={20} />} />

    <FooterLink href={"https://github.com/psalmuelle"} icon={<AiOutlineGithub size={20} />} />

    <FooterLink href={"https://medium.com/@erinle-sam"} icon={<BsMedium size={20} />} />

    <FooterLink href={"https://twitter.com/erinle_sam"} icon={<FiTwitter size={20} />} />

    <FooterLink href={"mailto:psalmuelle1@gmail.com"} icon={<MdOutlineMail size={20} />} />
    </div>
    </footer>
  );
};

export default Footer;
