import React from "react";

export default function BlogCard() {
  return (
    <div className='relative w-full max-w-sm rounded-xl h-72'>
      <div className='w-full h-full bg-[url(/love-me.jpg)] bg-contain rounded-xl'>
       
      </div>

      <div className='absolute w-full h-full top-0 right-0 bg-gradient-to-t from-main/90 to-white/50 rounded-xl flex flex-col justify-end p-4 text-white'>
        <h1 className='text-2xl font-bold '>
          How To Build A Mainstream Example
        </h1>
        <p className='mb-2'>
          In the past we have worked with large javascript applications and
          frameworks and it...
        </p>
      </div>
    </div>
  );
}
