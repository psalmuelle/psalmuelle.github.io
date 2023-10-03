import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { MdLaunch, MdChevronLeft } from "react-icons/md";
import { FaGlobeAfrica } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

const Page = () => {
  return (
    <div className=''>
      <h1 className='title'>Projects.</h1>
      <div className=' mt-16 grid grid-cols-2 max-md:grid-cols-1 justify-center items-center'>
        <ProjectCard />
        <ProjectCard />
      </div>
      {/* Project details container */}
      <div className='fixed top-0 right-0  h-screen o overflow-x-auto max-w-lg z-50 bg-white p-8 max-md:p-4 '>
        <div className=' w-full flex justify-between items-center py-3 mb-6 border-b'>
          <div className='rounded-full border-2 p-0.5 '>
            <MdChevronLeft size={24} color='gray' />
          </div>
          <p className='font-bold hover:underline '>Back To Projects.</p>
        </div>

        <div className='mt-10'>
          <h2 className='text-2xl font-bold'>Alameda Inc.</h2>
          <p className='my-2'>
            This is the range of the project that requires the total number
            number of the same.
          </p>
          <Image
            src={"/love-me.jpg"}
            width={512}
            height={384}
            className='h-auto mt-5 border rounded-lg'
          />
          <div className='mt-8'>
            <h3 className='text-lg font-semibold'>About</h3>
            <p className='mt-3'>
              This is the only reason why i wil not allow him to come to the
              meeting and i will not allow such thing thing to happen, not under
              my watch. This is the height of it.
            </p>
          </div>
          <div className='mt-8'>
            <h3 className='text-lg font-semibold'>Technologies</h3>
            <div className='flex items-center gap-4 flex-wrap mt-6'>
              <div className='rounded-lg font-semibold bg-[#545454]/50 px-2 py-1'>
                Tailwind CSS
              </div>
              <div className='rounded-lg font-semibold bg-[#545454]/50 px-2 py-1'>
                Framer Motion
              </div>
              <div className='rounded-lg font-semibold bg-[#545454]/50 px-2 py-1'>
                Reactjs
              </div>
            </div>
          </div>
          <div className='mt-8'>
            <h3 className='text-lg font-semibold flex items-center gap-1'>
              <FaGlobeAfrica /> Website
            </h3>
            <Link href={"www.website.com"}>www.website.com</Link>
          </div>
          <div className='mt-8 my-16'>
            <h3 className='text-lg font-semibold'>GitHub</h3>
            <Link href={"wwww.github.com"}>www.github.com</Link>
          </div>
          <div className='fixed bottom-0 w-full max-w-lg right-0 text-white py-4 bg-[#0b0c15] flex justify-center items-center gap-1 cursor-pointer'>
            <p className='font-semibold'>Open Project</p>
            <MdLaunch size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
