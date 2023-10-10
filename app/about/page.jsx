"use client";

import React from "react";
import { AiOutlineGithub, AiOutlineCalendar } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import Link from "next/link";
import { aboutIntro, experience, volunteer } from "@/components/AppData";
import BottomNav from "@/components/BottomNav";
import { BsRocketTakeoff } from "react-icons/bs";

const AboutPage = () => {
  const skills = [
    {
      id: 1,
      skill: "Javascript",
      logo: <IoLogoJavascript />,
    },
    {
      id: 2,
      skill: "Typescript",
      logo: <SiTypescript />,
    },
    {
      id: 3,
      skill: "Reactjs",
      logo: <RiReactjsLine />,
    },
    {
      id: 4,
      skill: "Nextjs",
      logo: <TbBrandNextjs />,
    },
  ];

  return (
    <div className='max-w-5xl'>
      <h1 className='title'>About Me.</h1>
      <div>
        <div className='mt-8'>
          <div className='flex-between max-sm:flex-col max-sm:justify-start max-sm:items-start my-3'>
            <Link
              href={"https://github.com/psalmuelle"}
              className='flex-center gap-2 hover:underline font-semibold'>
              Engineering{" "}
              <span>
                <AiOutlineGithub />
              </span>
            </Link>
            <Link
              className='font-bold underline'
              href={"https://github.com/psalmuelle"}>
              View Github
            </Link>
          </div>
          {aboutIntro.map((val, i) => {
            return <p key={i}>{val}</p>;
          })}
        </div>
        <div className='my-8'>
          <h2 className='font-bold hover:underline cursor-pointer mb-4'>
            Skills and Proficiencies
          </h2>

          <div className='flex gap-4 flex-wrap'>
            {skills.map((val) => {
              return (
                <div key={val.id} className='flex-center gap-2 '>
                  <span>{val.logo}</span>
                  <p>{val.skill}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className='font-bold hover:underline cursor-pointer mb-4'>
            Work Experience
          </h2>

          {experience.map((val) => {
            return (
              <>
                <div
                  key={val.id}
                  className='flex justify-between items-center max-sm:flex-col max-sm:justify-start max-sm:items-start my-3'>
                  <p className='hover:underline font-semibold cursor-pointer'>
                    {val.title}
                  </p>
                  <div className='flex-center gap-1 underline font-bold cursor-pointer'>
                    <AiOutlineCalendar />
                    <p>{val.year}</p>
                  </div>
                </div>
                <ul className='mb-4'>
                 {val.description.map((val)=>{
                  return(
                  <li className="flex justify-start items-start gap-2 my-2">
                    <div className="bg-green-00 py-1">
                  <BsRocketTakeoff size={20} />
                 </div>
                    <p className=" ">{val}</p>
                  </li>
                  )
                 })}
                </ul>
                <hr className='mb-10' />
              </>
            );
          })}

        </div>

        <div>
          <h2 className='font-bold hover:underline cursor-pointer mb-4'>
            Volunteer Experience
          </h2>
          <div>
            <div className='flex-between max-sm:flex-col max-sm:justify-start max-sm:items-start my-3'>
              <p className='hover:underline font-semibold cursor-pointer'>
                Frontend Developer
              </p>
              <div className='flex-center gap-1 underline font-bold cursor-pointer'>
                <AiOutlineCalendar />
                <p>2022</p>
              </div>
            </div>

            {volunteer.map((val) => {
              return (
                <div className='mb-4' key={val.id}>
                  <p className='font-semibold'>{val.title}</p>
                  <p>{val.content}</p>
                </div>
              );
            })}
            <hr className='mb-10' />
          </div>
        </div>

        <BottomNav path={"/projects"} text={"Lets Continue To Projects."} />
      </div>
    </div>
  );
};

export default AboutPage;
