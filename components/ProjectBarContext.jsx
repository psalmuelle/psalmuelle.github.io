"use client";
import React, { useState, useContext } from "react";

const ProjectBarContext = React.createContext();
const UpdateProjectBarContext = React.createContext();

export const useProjectBar = () => useContext(ProjectBarContext);
export const UpdateProjectBar = () => useContext(UpdateProjectBarContext);

export function ProjectBarProvider({ children }) {
  const [toggleBar, setToggleBar] = useState(false);
  const handleToggle = () => {
    return setToggleBar(!toggleBar);
  };

  return (
    <ProjectBarContext.Provider value={toggleBar}>
      <UpdateProjectBarContext.Provider value={handleToggle}>
        {children}
      </UpdateProjectBarContext.Provider>
    </ProjectBarContext.Provider>
  );
}
