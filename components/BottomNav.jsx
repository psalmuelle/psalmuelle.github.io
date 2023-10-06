'use client'
import React from "react"
import { useRouter } from "next/navigation"
import { BsArrowRight } from "react-icons/bs"



export default function BottomNav({path,text}){
    const router = useRouter()
    return(
        <div
        onClick={()=> router.push({path})}
        className='mt-4 max-xl:mb-10 cursor-pointer flex gap-2 items-center '>
        <button className="btn">{text}.</button>
        <BsArrowRight size={20} />
      </div>
    )
}