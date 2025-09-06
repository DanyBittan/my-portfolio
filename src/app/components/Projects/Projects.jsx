"use client";
import ProjectShowcase from "./ProjectsShowcase";
import { useState } from "react";

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);
  console.log(openProject)
  return (
    <section
      id="projects"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="w-3/4 min-h-auto h-2/3 relative flex z-10 gap-4 text-shadow-lg shadow-pink-400 text-pink-100">
        <ProjectShowcase classes={`${openProject ? "w-full" : "w-3/4"} w-3/4 h-full border-purple-600 border-2`} openProject={openProject} setOpenProject={setOpenProject} projectName="DizManga" />
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-full h-full flex ">
            <ProjectShowcase classes="w-1/2 border-purple-600 border-2" openProject={openProject} setOpenProject={setOpenProject} projectName="Timer" />
            <ProjectShowcase classes="w-1/2 border-purple-600 border-2" openProject={openProject} setOpenProject={setOpenProject} projectName="Calculator" />
          </div>
          <div className="relative w-full h-full bg-purple-950 border-purple-600 border-2 font-alien">
            <p className="w-full h-full crt flex justify-center items-center text-8xl tracking-widest">PROJECTS</p></div>
        </div>
      </div>

    </section >
  );
}
