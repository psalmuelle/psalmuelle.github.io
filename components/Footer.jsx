import Link from "next/link";

const Footer = () => {
  return (
    <footer className='relative border-t border-white mt-20 py-10 pt-8 flex justify-center items-center flex-col text-center'>
      <div>
        <p>Erinle Samuel</p>
        <p className="text-sm">Software Engineer (Web)</p>
        <p className="text-sm opacity-80">&copy; {new Date().getFullYear()}</p>
      </div>
      <Link
        href='https://github.com/psalmuelle/psalmuelle.github.io#readme'
        target='_blank'
        className='absolute bottom-3 right-6 text-blue-400 text-sm'>
        #Design Attributes
      </Link>
    </footer>
  );
};

export default Footer;
