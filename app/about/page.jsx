"use client";

import React from "react";
import { AiOutlineGithub, AiOutlineCalendar } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";

const AboutPage = () => {
  const router = useRouter();
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
    <div>
      <h1 className='title'>About Me.</h1>
      <div>
        <div className='mt-8'>
          <div className='flex justify-between items-center max-sm:flex-col max-sm:justify-start max-sm:items-start my-3'>
            <Link
              href={"https://github.com/psalmuelle"}
              className='flex justify-center items-center gap-2 hover:underline font-semibold'>
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

          <p>
            In the digital realm, the frontend of a web application wields
            profound influence, acting as the virtual face that users encounter
            first. Its visual appeal is not a mere adornment but a strategic
            necessity, shaping user experiences and perceptions. An
            aesthetically pleasing frontend crafts positive first impressions,
            drawing users into seamless, intuitive navigation. Beyond
            aesthetics, it builds trust and credibility, reflecting the brand's
            identity and fostering emotional connections. Using my experience as
            a frontend developer, I possess the ability to tackle technical
            challenges while crafting web apps that are desirable and
            indispensable.
          </p>
        </div>
        <div className='my-8'>
          <h2 className='font-bold hover:underline cursor-pointer mb-4'>
            Skills and Proficiencies
          </h2>

          <div className='flex gap-4 flex-wrap'>
            {skills.map((val) => {
              return (
                <div
                  key={val.id}
                  className='flex justify-center items-center gap-2 '>
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
          <div>
            <div className='flex justify-between items-center max-sm:flex-col max-sm:justify-start max-sm:items-start my-3'>
              <p className='hover:underline font-semibold cursor-pointer'>
                Frontend Developer Intern
              </p>
              <div className='flex justify-center items-center gap-1 underline font-bold cursor-pointer'>
                <AiOutlineCalendar />
                <p>2022</p>
              </div>
            </div>
            <div className='mb-4'>
              Worked at <span className='font-bold italic'>HNG</span> as a
              frontend developer with a team to create a web application that
              uses AI to generate letters to loved ones.
            </div>
          </div>
          <hr />

          <div>
            <div className='flex justify-between items-center max-sm:flex-col max-sm:justify-start max-sm:items-start my-3'>
              <p className='hover:underline font-semibold cursor-pointer'>
                Full-stack developer trainee
              </p>
              <div className='flex justify-center items-center gap-1 underline font-bold cursor-pointer'>
                <AiOutlineCalendar />
                <p>2022</p>
              </div>
            </div>
            <div className='mb-4'>
              Worked at <span className='font-bold italic'>Zuri Inc.</span> as a
              developer trainee where I got to learn how to build websites using
              different web frameworks and libraries.
            </div>
          </div>
          <hr />

          <div>
            <div className='flex justify-between items-center max-sm:flex-col max-sm:justify-start max-sm:items-start my-3'>
              <p className='hover:underline font-semibold cursor-pointer'>
                Freelance web developer
              </p>
              <div className='flex justify-center items-center gap-1 underline font-bold cursor-pointer'>
                <AiOutlineCalendar />
                <p>2020-2022</p>
              </div>
            </div>
            <div className='mb-4'>
              Worked at <span className='font-bold italic'>Upwork</span> as a
              freelance web developer with a speciality in WordPress. Helped
              clients build websites for their businesses.
            </div>
            <hr className='mb-10' />
          </div>
        </div>

        <div>
          <h2 className='font-bold hover:underline cursor-pointer mb-4'>
            Volunteer Experience
          </h2>
          <div>
            <div className='flex justify-between items-center max-sm:flex-col max-sm:justify-start max-sm:items-start my-3'>
              <p className='hover:underline font-semibold cursor-pointer'>
                Frontend Developer
              </p>
              <div className='flex justify-center items-center gap-1 underline font-bold cursor-pointer'>
                <AiOutlineCalendar />
                <p>2022</p>
              </div>
            </div>
            <div className='mb-4'>
              <p className='font-semibold'>ChRIS Project</p>
              <p>
                ChRIS is an <i>open-source</i> project that allows medical radiologists
                and physicians to scan images to identify tumours, detect
                changes in the internal structure of the body and identify
                defects. I contributed to the frontend part of the website using
                Reactjs and Patternfly
              </p>
            </div>
            <hr className='mb-10' />
          </div>
        </div>
        <div
          onClick={() => router.push("/projects")}
          className='mt-4 max-xl:mb-10 cursor-pointer flex gap-2 items-center '>
          <button className='btn'>Lets Continue To Projects</button>
          <BsArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
