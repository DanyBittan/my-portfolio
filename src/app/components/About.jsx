"use client";
import { useState } from "react";
import ScrambleText from "./ScrambleText";
import { useInView } from "react-intersection-observer";
import Projects from "./Projects/Projects";



export default function About() {
  const [animationEnd, setAnimationEnd] = useState(false);
  const [aboutTopic, setAboutTopic] = useState("About Me");
  const buttonClasses = (topic) =>
    `transition-all duration-200 text-shadow 
   px-2 sm:px-4 py-1 
   hover:text-pink-400 hover:scale-105 
   ${aboutTopic === topic
      ? "text-pink-400 animate-pulse"
      : "text-pink-200"
    }`;
  const aboutText = ["USER PROFILE ==> DANIEL BITTAN", "ROLE ==> FULL STACK WEB DEVELOPER (JUNIOR)", "FOCUS ==> LARAVEL | REACT | MYSQL | TAILWINDCSS | GIT OPS | DOCKER", "INTERESTS ==> COMICS | MOVIES | VIDEO GAMES | SPACE | POETRY | AI | CLIMBING", "OBJECTIVE ==> SEEKING CHALLENGING PROJECTS TO GROW AND CONTRIBUTE"]
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
          <div className="w-full mb-2 sm:mb-4 uppercase text-start px-6">
            <div className="w-full text-md lg:text-2xl xl:text-[1.685rem]">
              {aboutText.map((text, index) =>
                <ScrambleText key={index} text={text} classes="mb-2 md:mb-4" />
              )}
            </div>
          </div>);
    }
  };

  return (
    <section
      id="aboutme"
      className="w-full h-screen flex justify-center items-center"
    >
      <div ref={ref} className="crt w-full lg:w-3/4 h-3/4 bg-violet-950 border-2 border-purple-600 lg:rounded-md relative text-shadow shadow-pink-500 text-pink-100 font-alien flex justify-center items-center">
        {!animationEnd && inView ? (
          <div className="w-full h-full p-4 flex justify-center items-center text-3xl">
            <ScrambleText
              text="Booting up..."
              setAnimation={setAnimationEnd}
            />
          </div>
        ) : (
          <div id="aboutContent" className="w-full h-full relative flex flex-col items-start" >
            <div className={`mt-8 w-full px-8 py-2 h-full ${aboutTopic === "Projects" && "hidden"}`}>
              <header className="text-md lg:text-xl xl:text-2xl text-start">
                <ScrambleText text="BOOTING SYSTEM: DB-DEV OPS [OK]" />
                <p>--------------------------------------------------</p>
                <ScrambleText text="INITIATING PERSONAL MODULE... [LOADED]" />
                <ScrambleText text="VERSION: D.BITTAN v1.0.1" />
                <ScrambleText text="LOCATION: MALAGA, SPAIN" />
                <p>--------------------------------------------------</p>
              </header>
              <div className="w-full mt-6 text-lg sm:text-2xl md:text-3xl flex gap-6 md:gap-4 lg:gap-8">
                <button
                  className={buttonClasses("About Me")}
                  onClick={() => setAboutTopic("About Me")}
                >
                  [ ABOUT ME ]
                </button>
                <button
                  className={buttonClasses("Projects")}
                  onClick={() => setAboutTopic("Projects")}
                >
                  [ PROJECTS ]
                </button>
              </div>
              {/* <button className={`${buttonClasses} line-through  lg:visible`} onClick={() => setAboutTopic("Playground")}>[  PLAYGROUND  ]</button> */}
            </div>
            {renderSwitch(aboutTopic)}
          </div>

        )
        }
      </div >
    </section >
  );
}
