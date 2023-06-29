"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  return (
    <div className='text-[#545454]'>
      <div>
        <h2 className='text-[#545454] text-2xl'>
          Allow me to introduce myself!
        </h2>
        <h1 className='text-[#0b0c15] text-4xl tracking-widest font-extrabold my-4'>
          I'M ERINLE SAMUEL
        </h1>
      </div>
      <div>
        <p className=''>
          A frontend developer, and javascript engineer. I spend most of my time
          bringing ideas to live! I'm passionate about cutting-edge,
          pixel-perfect, beautiful interface and intuitively implemented user
          interface/experience.
        </p>
        <p className='mt-4'>
          When I'm not coding, I write{" "}
          <Link href={"/blog"} className='text-[#0b0c15] font-bold'>
            #ARTICLES
          </Link>{" "}
          to share knowledge and insights on web development.
        </p>
        <p className='mt-4'>I love music and reading books.</p>
      </div>

      <div
        onClick={() => route("/about")}
        className='mt-8 flex gap-2 items-center '>
        <button>Know More About Me</button>
        <BsArrowRight size={20} />
      </div>
    </div>
  );
}
