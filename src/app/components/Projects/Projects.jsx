"use client";
import ProjectShowcase from "./ProjectsShowcase";
import { useState } from "react";

export default function Projects(props) {
  const [openProject, setOpenProject] = useState("");
  console.log(openProject)
  return (
    <div
      id="projects"
      className="w-full h-screen flex justify-center items-center"
    >
      <button onClick={!openProject ? () => props.setAboutTopic("") : () => setOpenProject("")} className="w-auto h-auto rounded-full text-2xl bg-purple-800 absolute top-4 left-4 px-2 py-1 z-20 text-shadow-lg shadow-pink-400 text-pink-100 font-rocket  ">&lt;=</button>
      {!openProject
        ? <div className="w-full min-h-auto h-full relative flex z-10 text-shadow-lg shadow-pink-400 text-pink-100 ">
          <ProjectShowcase classes="w-3/4 h-full border-r-2 border-purple-600" setOpenProject={setOpenProject} projectName="DizManga" />
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className="w-full h-full flex border-b-2 border-purple-600">
              <ProjectShowcase classes="w-1/2 h-full" setOpenProject={setOpenProject} projectName="Timer" />
              <ProjectShowcase classes="w-1/2 h-full" setOpenProject={setOpenProject} projectName="Calculator" />
            </div>
            <p className="w-full h-full flex justify-center items-center text-7xl tracking-widest">PROJECTS</p></div>
        </div>
        : <ProjectShowcase classes="w-full h-full" setOpenProject={setOpenProject} projectName={openProject} />}
    </div >
  );
}
