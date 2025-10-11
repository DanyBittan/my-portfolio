"use client";
import { useState } from "react";
import ScrambleText from "./ScrambleText";
import { useInView } from "react-intersection-observer";
import Projects from "./Projects/Projects";



export default function About() {
  const [animationEnd, setAnimationEnd] = useState(false);
  const [aboutTopic, setAboutTopic] = useState("About Me");
  const commandText = ["whoami",];
  const techStack = ["Laravel", "React", "MySQL", "TailwindCSS", "Git Ops", "Docker"];
  const buttonClasses = (topic) =>
    `bg-purple-950 w-fit h-9 hover:text-pink-400 content-center pl-3 pr-10 rounded-tl-md rounded-t-3xl md:text-xl lg:text-2xl cursor-pointer 
   ${aboutTopic === topic
      ? "text-purple-300 opacity-100 border-x-2 border-t-2 border-purple-600"
      : "text-pink-200 opacity-50 hover:opacity-100"
    }`;
  const { ref, inView } = useInView({
    triggerOnce: true, // solo se activa una vez
  });
  // Si uso dos condicionales quitar el switch
  const renderSwitch = (topic) => {
    switch (topic) {
      case "Projects":
        return <Projects setAboutTopic={setAboutTopic} />;
      /*       case "Playground":
              return <div>WORKING...</div> */
      default:
        return (
          <div className="w-2/4 h-full mb-2 sm:mb-4 px-8 relative">
            <header className="text-md lg:text-xl xl:text-2xl text-start mt-5 w-auto py-2 h-auto">
              <ScrambleText text="BOOTING SYSTEM: DB-DEV OPS [OK]" />
              <div className="border-y-2 border-dashed border-purple-400 pb-2 mb-4 my-4 py-3">
                <ScrambleText text="INITIATING PERSONAL MODULE... [LOADED]" />
                <ScrambleText text="VERSION: D.BITTAN v1.0.1" />
                <ScrambleText text="LOCATION: MALAGA, SPAIN" />
              </div>
            </header>
            <div className="md:flex hidden text-lg lg:text-xl xl:text-2xl">
              <ScrambleText text="USERS@DANIEL BITTAN >" />
              <div className="max-w-fit type-writting">
                <span className="ml-2 text-orange-300">{commandText}</span>
              </div>
              <span className="blinking-caret ml-1 border-b-4 w-4" />
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id="aboutme"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="crt w-full lg:w-3/4 h-4/5 overflow-hidden bg-violet-950 border-2 border-purple-600 relative text-shadow shadow-pink-500 text-pink-100 font-alien rounded-md">
        <div className="w-full h-12 bg-purple-800 border-b-2 border-purple-600 flex items-end font-rocket ">
          <div id="about-tab" className={`${buttonClasses("About Me")} ml-2`} onClick={() => setAboutTopic("About Me")}>About Me</div>
          <div id="projects-tab" className={`${buttonClasses("Projects")}`} onClick={() => setAboutTopic("Projects")}>Projects</div>
        </div>
        <div ref={ref} className="h-[calc(100%-3rem)] flex justify-center items-center">

          {!animationEnd && inView ? (
            <div className="w-full h-full flex justify-center items-center text-3xl md:text-5xl lg:text-6xl">
              <ScrambleText
                text="Booting up..."
                setAnimation={setAnimationEnd}
              />
            </div>
          ) : (
            <div id="aboutContent" className="w-full h-full relative flex flex-col items-start" >

              {renderSwitch(aboutTopic)}
            </div>

          )
          }
        </div >
      </div>

    </section >
  );
}
