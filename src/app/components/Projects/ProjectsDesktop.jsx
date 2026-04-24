"use client";
import { useState, useEffect } from "react";
import ScrambleText from "../ScrambleText";
import projectData from "@/data/project-data.json";

export default function ProjectsDesktop({ activeProject, onSelectProject, showStaticImage, onToggleView, useImgMobile }) {
  const projectsArray = Object.values(projectData);
  const projectNames = Object.keys(projectData);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-2 lg:gap-3 font-pixelify">
      {/* Selector Side Menu - Terminal Style */}
      <div className="w-full lg:w-1/5 lg:h-full flex-shrink-0 flex flex-col bg-gray-900/90 border-2 border-purple-500/60 overflow-hidden">
        <div className="w-full px-3 py-2 bg-purple-900/60 border-b border-purple-500/60">
          <span className="text-xl text-pink-400 tracking-wider">
            {'> SELECT GAME'}
          </span>
        </div>
        <div className="flex-1 overflow-y-auto">
          {projectNames.map((name) => {
            const isActive = activeProject && activeProject.name === projectData[name].name;
            return (
              <button
                key={name}
                onClick={() => onSelectProject(name)}
                className={`w-full px-3 py-2 text-left text-xl transition-all duration-150 border-b border-purple-900/40 ${isActive
                  ? 'bg-pink-600/30 text-pink-100 border-l-4 border-l-pink-400'
                  : 'text-purple-300 hover:bg-purple-900/40 hover:text-pink-100 border-l-4 border-l-transparent'
                  }`}
              >
                <span className="mr-1 md:mr-2 text-pink-400">{isActive ? '>' : '·'}</span>
                {projectData[name].name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Arcade Screen - CRT Style */}
      <div className="flex-1 flex flex-col gap-2 min-h-0">
        <div className="flex-1 min-h-0 overflow-hidden border-2 border-purple-600/60 relative">

          {/* Manual Toggle Button - Only show if iframe is enabled and there's a static image */}
          {activeProject?.iframe && activeProject.img && (
            <button
              onClick={onToggleView}
              className="absolute top-2 right-2 z-20 px-3 py-1 text-md font-pixelify bg-purple-800/90 text-pink-200 border border-pink-500/50 hover:bg-pink-700/50 transition-colors rounded-lg"
            >
              {showStaticImage ? '[LIVE]' : '[IMG]'}
            </button>
          )}

          {/* Floating Links - Bottom Right */}
          <div className="absolute bottom-2 right-2 z-20 flex gap-2">
            {activeProject?.url && (
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-md font-pixelify bg-purple-800/90 text-pink-200 border border-pink-500/50 hover:bg-pink-700/50 transition-colors rounded-lg"
              >
                [LAUNCH]
              </a>
            )}
            {activeProject?.github && (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-md font-pixelify bg-purple-800/90 text-purple-300 border border-purple-500/50 hover:bg-purple-700/50 transition-colors rounded-lg"
              >
                [SOURCE]
              </a>
            )}
          </div>

          {/* Screen Content - Centered */}
          <div className="w-full h-full flex items-center justify-center bg-gray-900 p-0">
            {activeProject ? (
              activeProject.iframe ? (
                <>
                  {showStaticImage ? (
                    <img
                      src={useImgMobile ? activeProject.imgMobile : activeProject.img}
                      alt={activeProject.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <iframe
                      src={activeProject.url}
                      title={activeProject.name}
                      className="w-full h-full border-none"
                      sandbox="allow-scripts allow-same-origin allow-forms"
                    />
                  )}
                </>
              ) : (
                <img
                  src={useImgMobile ? activeProject.imgMobile : activeProject.img}
                  alt={activeProject.name}
                  className="w-full h-full object-cover"
                />
              )
            ) : (
              <div className="font-pixelify text-purple-400">SELECT A PROJECT</div>
            )}
          </div>
        </div>

        {/* Info Panel - Bottom - Full Width */}
        {activeProject && (
          <div className="w-full h-1/4 bg-gray-900/90 border-2 border-purple-500/60 p-3 relative">
            <div className="flex flex-col md:flex-row gap-3 md:items-start">
              {/* Description */}
              <div className="flex-1">
                <h3 className="font-pixelify text-2xl text-pink-400 mb-1">
                  {activeProject.name}
                </h3>
                <p className="font-pixelify text-xl text-purple-200 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1 md:gap-2 absolute top-2 right-2">
                {activeProject.language && activeProject.language.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-sm md:text-base font-pixelify bg-purple-800/50 text-pink-200 rounded border border-purple-500/40 hover:bg-purple-700/50 transition-colors"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}