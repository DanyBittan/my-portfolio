"use client";
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export default function ProjectsMobile({ activeProject, projectIndex, totalProjects, onPreviousProject, onNextProject, useImgMobile }) {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-2 font-pixelify">
      {/* Project Navigation - Title with arrows */}
      <div className="w-full flex items-center justify-between px-2 py-2 bg-gray-900/90 border-2 border-purple-500/60 ">
        <button
          onClick={onPreviousProject}
          className="p-2 text-pink-400 hover:text-pink-200 hover:bg-purple-900/40  transition-colors"
          aria-label="Previous project"
        >
          <IconChevronLeft size={24} />
        </button>

        <h2 className="text-xl text-pink-400 font-pixelify text-center px-2">
          {activeProject?.name || 'SELECT PROJECT'}
        </h2>

        <button
          onClick={onNextProject}
          className="p-2 text-pink-400 hover:text-pink-200 hover:bg-purple-900/40  transition-colors"
          aria-label="Next project"
        >
          <IconChevronRight size={24} />
        </button>
      </div>

      {/* Static Image Container with floating elements */}
      <div className="flex-1 min-h-[200px] relative bg-gray-900 border-2 border-purple-600/60 overflow-hidden">
        {/* Project Image - Static only */}
        {activeProject ? (
          <img
            src={useImgMobile ? activeProject.imgMobile : activeProject.img}
            alt={activeProject.name}
            className="h-full w-full object-cover "
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-purple-400 text-sm">SELECT A PROJECT</div>
        )}

        {/* Floating Links - Top Right */}
        <div className="absolute top-2 right-2 flex gap-2 z-10">
          {activeProject?.url && (
            <a
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 text-md font-pixelify bg-purple-800/80 text-pink-300 rounded-sm border border-pink-500/70 hover:bg-pink-700/70 transition-colors"
            >
              [LAUNCH]
            </a>
          )}
          {activeProject?.github && (
            <a
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 text-md font-pixelify bg-purple-800/80 text-purple-300 rounded-sm border border-purple-500/70 hover:bg-purple-700/70 transition-colors"
            >
              [SOURCE]
            </a>
          )}
        </div>

        {/* Floating Languages - Bottom Left */}
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1 max-w-[70%] z-10">
          {activeProject?.language && activeProject.language.map((lang, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-xs font-pixelify bg-purple-800/80 text-pink-200 rounded-sm border border-purple-500/80"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Project Counter - Bottom Right */}
        <div className="absolute bottom-2 right-2 text-xs font-pixelify text-purple-400 z-10">
          {projectIndex + 1}/{totalProjects}
        </div>
      </div>

      {/* Description */}
      <div className="bg-gray-900/90 border-2 border-purple-500/60 p-3">
        <p className="text-sm sm:text-base md:text-lg text-purple-200 leading-relaxed">
          {activeProject?.description || 'No description available'}
        </p>
      </div>
    </div>
  );
}