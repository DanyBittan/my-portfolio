"use client";
import ProjectShowcase from "./ProjectsShowcase";
import ProjectsSelector from "./ProjectsSelector";
import { useState } from "react";
export default function Projects() {
  const [project, setProject] = useState("");
  return (
    <section
      id="projects"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="w-3/4 min-h-auto h-3/4 relative flex justify-center items-center bg-space2 bg-cover bg-no-repeat rounded-2xl -top-1.5 -left-1.5 z-10">
        <div className="projects-bg h-full absolute inset-0 z-0 rounded-2xl" />
        <ProjectsSelector setProject={setProject} />
        <ProjectShowcase project={project} />
      </div>
      <div className="w-3/4 h-3/4 absolute bg-[#a02060] rounded-2xl ml-6 mt-6"></div>
      <div className="w-3/4 h-3/4 absolute bg-orange-600 rounded-2xl ml-3 mt-3"></div>
      <div className="w-3/4 h-3/4 absolute bg-yellow-500 rounded-2xl"></div>
    </section>
  );
}
