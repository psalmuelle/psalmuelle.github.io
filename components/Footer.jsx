import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { BsMedium } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const FooterLink = ({ href, icon }) => {
  return <Link href={href}>{icon}</Link>;
};

const Footer = () => {
  return (
    <footer className='w-full xl:w-fit xl:ml-[305px] xl:mt-10 '>
      <div className='max-xl:fixed bottom-0 flex max-xl:justify-between justify-center items-center mobile_glassmorphism rounded-t-2xl w-full p-4 md:px-20 xl:gap-8'>
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
      </div>
    </footer>
  );
};

export default Footer;
