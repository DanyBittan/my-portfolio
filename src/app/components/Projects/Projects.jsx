"use client";
import ProjectShowcase from "./ProjectsShowcase";
export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="w-3/4 min-h-auto h-2/3 relative flex bg-white/20 z-10 gap-3 rounded-lg shadow-lg">
        <ProjectShowcase classes="w-3/4 h-full bg-black p-16 border-purple-600 border-2 rounded-lg" projectName="DizManga" />
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-full h-full flex ">
            <div className="w-1/2 bg-white border-purple-600 border-2 rounded-l-2xl">aaa</div>
            <div className="w-1/2 bg-black border-purple-600 border-2 rounded-r-2xl">aaa</div>
          </div>
          <div className="w-full h-full bg-white border-purple-600 border-2 rounded-2xl">aaa</div>
        </div>
      </div>

    </section>
  );
}
