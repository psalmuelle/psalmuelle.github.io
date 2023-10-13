'use client'
import React from "react";
import BottomNav from "@/components/BottomNav";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/components/AppData";

const Page = () => {
  return (
    <div>
      <h1 className='title'>Blog.</h1>
      <div className='w-full max-w-4xl mt-16 mb-12 flex flex-wrap gap-10 justify-center items-center'>
   {
    blogs.map((val)=>{
      return(
       <BlogCard key={val.id} title={val.title} description={val.description} image={val.image} link={val.link}/>
      )
    })
   }
      </div>

      <BottomNav path={"/"} text={"Go Back Home"} />
    </div>
  );
};

export default Page;
