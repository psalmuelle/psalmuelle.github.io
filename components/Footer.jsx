import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { BsMedium, BsWhatsapp } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const FooterLink = ({ href, icon }) => {
  return <Link className="hover:opacity-90" href={href}>{icon}</Link>;
};

const Footer = () => {
  return (
    <footer className='w-full xl:w-fit xl:ml-[305px] xl:mt-10 '>
      <div className='footer'>
        <FooterLink
          href={"https://www.linkedin.com/in/erinle-samuel/"}
          icon={<AiOutlineLinkedin size={24} />}
        />

        <FooterLink
          href={"https://github.com/psalmuelle"}
          icon={<AiOutlineGithub size={24} />}
        />

        <FooterLink
          href={"https://medium.com/@erinle-sam"}
          icon={<BsMedium size={24} />}
        />

        <FooterLink
          href={"https://twitter.com/erinle_sam"}
          icon={<FiTwitter size={24} className="hover"/>}
        />

        <FooterLink
          href={"mailto:psalmuelle1@gmail.com"}
          icon={<MdOutlineMail size={24} />}
        />

<FooterLink
          href={"https://wa.link/07bpvp"}
          icon={<BsWhatsapp size={23} />}
        />
      </div>
    </footer>
  );
};

export default Footer;
