"use client";
import ProjectShowcase from "./ProjectsShowcase";
export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="w-3/4 min-h-auto h-2/3 relative flex bg-white/20 z-10 gap-3 rounded-lg text-shadow-lg shadow-pink-400 text-pink-100 ">
        <ProjectShowcase classes="w-3/4 h-full bg-black  border-purple-600 border-2 rounded-lg" imgStyle="rounded-lg" projectName="DizManga" />
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-full h-full flex ">
            <ProjectShowcase classes="w-1/2 bg-white border-purple-600 border-2 rounded-l-2xl" imgStyle="rounded-l-2xl" projectName="Timer" />
            <ProjectShowcase classes="w-1/2 bg-black border-purple-600 border-2 rounded-r-2xl" imgStyle="rounded-r-2xl" projectName="Calculator" />
          </div>
          <div className="relative w-full h-full bg-purple-950 border-purple-600 border-2 font-alien">
            <p className="w-full h-full crt flex justify-center items-center text-8xl tracking-widest">PROJECTS</p></div>
        </div>
      </div>

    </section >
  );
}
