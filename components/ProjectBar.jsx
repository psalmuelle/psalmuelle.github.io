import React from "react";
import Image from "next/image";
import { MdLaunch, MdChevronLeft } from "react-icons/md";
import { FaGlobeAfrica } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { UpdateProjectBar, useProjectBar } from "./ProjectBarContext";

export default function ProjectBar({
  title,
  projectName,
  description,
  techStack,
  imageUrl,
  githubUrl,
  liveUrl,
}) {
  const bar = useProjectBar();
  const toggleBar = UpdateProjectBar();
  if (!bar) {
    return;
  }

  return (
    <div
      onClick={toggleBar}
      className='fixed z-50 w-screen h-screen top-0 right-0 bg-secondary/20'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='fixed top-0 right-0  h-screen o overflow-x-auto max-w-lg z-50 bg-white p-8 max-md:p-4 '>
        <div className=' w-full flex-between py-3 mb-6 border-b'>
          <div onClick={toggleBar} className='rounded-full border-2 p-0.5 '>
            <MdChevronLeft size={24} color='gray' />
          </div>
          <p onClick={toggleBar} className='font-bold hover:underline '>
            Back To Projects.
          </p>
        </div>

        <div className='mt-10'>
          <h2 className='text-2xl font-bold'>{projectName}</h2>
          <p className='my-2'>{title}</p>
          <Image
            src={imageUrl}
            width={512}
            height={384}
            className='h-auto mt-5 border rounded-lg'
            alt={projectName}
          />
          <div className='mt-8'>
            <h3 className='text-lg font-semibold'>About</h3>
            <p className='mt-3'>{description}</p>
          </div>
          <div className='mt-8'>
            <h3 className='text-lg font-semibold'>Technologies</h3>
            <div className='flex items-center gap-4 flex-wrap mt-6'>
              {techStack?.map((val, i) => {
                return (
                  <div
                    key={i}
                    className='rounded-lg font-semibold bg-secondary/50 px-2 py-1'>
                    {val}
                  </div>
                );
              })}
            </div>
          </div>
          <div className='mt-8'>
            <h3 className='text-lg font-semibold flex items-center gap-1'>
              <FaGlobeAfrica /> Website
            </h3>
            <a className='font-bold hover:uderline' href={liveUrl}>
              {liveUrl}
            </a>
          </div>
          <div className='mt-8 my-16'>
            <h3 className='text-lg font-semibold flex items-center gap-1'>
              <AiOutlineGithub /> GitHub
            </h3>
            <a className='font-bold hover:uderline' href={githubUrl}>
              {githubUrl}
            </a>
          </div>
          <a
            href={liveUrl}
            className='fixed bottom-0 w-full max-w-lg right-0 text-white py-4 bg-main flex-center gap-1 cursor-pointer'>
            <p className='font-semibold'>Open Project</p>
            <MdLaunch size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
