"use client";

import React from "react";
import { UpdateProjectBar } from "./ProjectBarContext";
import Image from "next/image";

const ProjectCard = ({
  id,
  projectName,
  techStack,
  title,
  imageUrl,
  setCurrentId,
}) => {
  const toggleBar = UpdateProjectBar();

  const handleClick = () => {
    setCurrentId(id - 1);
    toggleBar();
  };

  return (
    <div
      onClick={handleClick}
      className={`relative max-w-sm w-full rounded-lg h-96 mx-4 max-sm:mx-0 my-5 `}>
      <div className='w-full h-full bg-[url(/love-me.jpg)] bg-contain rounded-xl'>
        {/* <Image src={'/love-me.app.png'} alt="article" width={1000} height={288} className=" w-full h-auto"/> */}
      </div>
      <div className='absolute top-0 right-0  w-full h-full bg-gradient-to-t from-secondary/90 to-white/50 rounded-lg flex justify-center items-end px-4'>
        <div className='text-white py-8'>
          <h2 className='font-bold text-4xl'>{projectName}</h2>
          <p className='my-4'>{title}</p>
          <div className='flex flex-wrap gap-4 my-2'>
            {techStack?.map((val, i) => {
              return (
                <p key={i} className='rounded-full bg-secondary w-fit px-2 '>
                  {val}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
