"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { ProjectBarProvider } from "@/components/ProjectBarContext";
import { projects } from "@/components/AppData";
import ProjectBar from "@/components/ProjectBar";
import BottomNav from "@/components/BottomNav";

const Page = () => {
  const [id, setId] = useState();

  const handleCurrentId = (id) => setId(id);

  return (
    <ProjectBarProvider>
      <div className='' beforeun>
        <h1 className='title'>Projects.</h1>
        <div className='max-w-4xl mt-16 flex flex-wrap justify-center items-center'>
          {projects.map((val) => {
            return (
              <ProjectCard
                key={val.id}
                id={val.id}
                projectName={val.projectName}
                techStack={val.techStack}
                title={val.title}
                imageUrl={val.image}
                setCurrentId={handleCurrentId}
              />
            );
          })}
        </div>

        {/* Project details container */}
        <ProjectBar
          title={projects[id]?.title}
          projectName={projects[id]?.projectName}
          description={projects[id]?.description}
          techStack={projects[id]?.techStack}
          imageUrl={projects[id]?.image}
          githubUrl={projects[id]?.githubUrl}
          liveUrl={projects[id]?.websiteUrl}
        />

       
        <BottomNav path={'/about'} text={"Let's Go To My Resume."}/>
      </div>
    </ProjectBarProvider>
  );
};

export default Page;
