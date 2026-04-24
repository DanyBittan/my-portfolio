"use client";
import { useState, useEffect, useSyncExternalStore } from "react";
import ScrambleText from "../ScrambleText";
import projectData from "@/data/project-data.json";
import ProjectsDesktop from "./ProjectsDesktop";
import ProjectsMobile from "./ProjectsMobile";

function useMediaQuery(query) {
  const getSnapshot = () => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia(query).matches;
  };

  const subscribe = (callback) => {
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener('change', callback);
    return () => mediaQuery.removeEventListener('change', callback);
  };

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export default function Projects(props) {
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [activeProject, setActiveProject] = useState(null);
  const [showStaticImage, setShowStaticImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsArray = Object.values(projectData);
  const projectNames = Object.keys(projectData);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isLargeScreen = useMediaQuery("(min-width: 450px)");
  const useImgMobile = !isLargeScreen;

  useEffect(() => {
    if (projectsArray.length > 0 && !activeProject) {
      setActiveProject(projectsArray[0]);
    }
  }, [projectsArray, activeProject]);

  const handleSelectProject = (name) => {
    setShowStaticImage(false);
    const project = projectData[name];
    setActiveProject(project);
    const idx = projectNames.indexOf(name);
    if (idx !== -1) {
      setCurrentIndex(idx);
    }
  };

  const handleToggleView = () => {
    setShowStaticImage((prev) => !prev);
  };

  const handlePreviousProject = () => {
    const newIndex = currentIndex === 0 ? projectsArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setActiveProject(projectsArray[newIndex]);
    setShowStaticImage(false);
  };

  const handleNextProject = () => {
    const newIndex = currentIndex === projectsArray.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setActiveProject(projectsArray[newIndex]);
    setShowStaticImage(false);
  };

  return (
    <div
      id="projects"
      className="w-full h-full flex justify-center items-center p-2 md:p-4 bg-gray-950/40"
    >
      {loadingProjects ? (
        <div className="w-full h-full flex justify-center items-center text-2xl sm:text-4xl">
          <ScrambleText text="LOADING PROJECTS" setAnimation={setLoadingProjects} />
        </div>
      ) : isDesktop ? (
        <ProjectsDesktop
          activeProject={activeProject}
          onSelectProject={handleSelectProject}
          showStaticImage={showStaticImage}
          onToggleView={handleToggleView}
          useImgMobile={useImgMobile}
        />
      ) : (
        <ProjectsMobile
          activeProject={activeProject}
          projectIndex={currentIndex}
          totalProjects={projectsArray.length}
          onPreviousProject={handlePreviousProject}
          onNextProject={handleNextProject}
          useImgMobile={useImgMobile}
        />
      )}
    </div>
  );
}