"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

export default function BottomNav({ path, text }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(path)}
      className='mt-4 max-xl:mb-10 cursor-pointer flex items-center gap-4'>
      <button className='btn text-sm'>{text}</button>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 20 }}
        transition={{
          duration:0.4,
          repeat:Infinity,
          repeatType: "mirror",
          repeatDelay:0.1,   
        }}>
        <BsArrowRight color="black" size={22} />
      </motion.div>
    </div>
  );
}
