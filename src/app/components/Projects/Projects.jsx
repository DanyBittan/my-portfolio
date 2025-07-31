"use client";
import ProjectShowcase from "./ProjectsShowcase";
import { useState } from "react";
export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="w-3/4 min-h-auto h-3/4 relative grid grid-cols-3 bg-white/20 z-10">
        {/* <ProjectShowcase className="grid "/> */}
        <div className="w-full h-full bg-black">aaa</div>
        <div className="w-full h-1/2 bg-white">aaa</div>
        <div className="w-full h-1/2 bg-black">aaa</div>
        <div className="w-full  h-full bg-white">aaa</div>
      </div>
    </section>
  );
}
