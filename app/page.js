"use client";

import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className='text-[#545454] max-w-4xl flex flex-col justify-between gap-8'>
      <div>
        <h2 className=' text-2xl mt-4'>Hi 👋,</h2>
        <h1 className='text-[#0b0c15] text-4xl tracking-widest font-extrabold mt-8 '>
          I'M ERINLE SAMUEL
        </h1>
      </div>
      <div>
        <p className=''>
          A frontend developer, and javascript engineer. I spend most of my time
          bringing{" "}
          <Link href={"/projects"} className='text_link'>
            #IDEAS
          </Link>{" "}
          to life! I'm passionate about cutting-edge, pixel-perfect, beautiful
          interface and intuitively implemented user experience.
        </p>
        <p className='mt-4'>
          When I'm not coding, I write{" "}
          <Link href={"/blog"} className='text_link'>
            #ARTICLES
          </Link>{" "}
          to share knowledge and insights on web development.
        </p>
      </div>

      <BottomNav path={"/about"} text={"Know More Aboute Me."} />
    </div>
  );
}
