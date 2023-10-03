'use client'

import React, {useState} from "react";

const ProjectCard = () => {
  const [openBar, setOpenBar] = useState(false)

  
  return (
    <div onClick={()=> setOpenBar(!openBar)} className=" max-w-md bg-[url('../public/love-me.app.png')] rounded-lg h-96 bg- bg-cover mx-4 max-sm:mx-0 my-5">
      <div className=' w-full h-full bg-gradient-to-t from-[#545454]/80 to-white/50 rounded-lg flex justify-center items-end'>
        <div className='text-white py-8'>
          <h2 className='font-bold text-4xl'>Love me</h2>
          <p className='my-4'>Generate letters to your loved ones</p>
          <div className='flex gap-4'>
            <p className='rounded-full bg-[#545454] w-fit px-2 '>React</p>
            <p className='rounded-full bg-[#545454] w-fit px-2 '>Javascript</p>
            <p className='rounded-full bg-[#545454] w-fit px-2 '>Tailwindcss</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
