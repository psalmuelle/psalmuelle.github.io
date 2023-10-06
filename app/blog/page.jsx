import React from "react";
import BottomNav from "@/components/BottomNav";
import BlogCard from "@/components/BlogCard";

const Page = () => {
  return (
    <div>
      <h1 className='title'>Blog.</h1>
      <div className='w-full max-w-4xl mt-16 mb-12 flex flex-wrap gap-10 justify-center items-center'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <BottomNav path={"/"} text={"Go Back Home"} />
    </div>
  );
};

export default Page;
