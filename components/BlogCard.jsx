import React from "react";

export default function BlogCard({ title, description, image, link }) {
  return (
    <div onClick={()=> window.location.replace(link)} className='relative w-full max-w-sm rounded-xl h-80 cursor-pointer'>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className='w-full h-full bg-cover bg-center rounded-xl'></div>

      <div className='absolute w-full h-full top-0 right-0 bg-gradient-to-t from-main/90 to-white/50 rounded-xl flex flex-col justify-end p-4 text-white'>
        <h1 className='text-2xl font-bold '>{title}</h1>
        <p className='my-4'>{description}</p>
      </div>
    </div>
  );
}
