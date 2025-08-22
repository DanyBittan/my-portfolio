"use client";
import { useState } from "react";
import ScrambleText from "./ScrambleText";
import { useInView } from "react-intersection-observer";



export default function About() {
  const [animationEnd, setAnimationEnd] = useState(false);
  const [aboutTopic, setAboutTopic] = useState("About Me");
  const buttonClasses = "hover:text-pink-400 transition-all duration-100 text-shadow shadow-pink-500";
  const aboutText = ["USER PROFILE: DANIEL BITTAN", "ROLE: FULL STACK WEB DEVELOPER (JUNIOR)", "FOCUS: LARAVEL | REACT | MYSQL | TAILWINDCSS | GIT OPS | DOCKER", "INTERESTS: COMICS | MOVIES | VIDEO GAMES | SPACE | POETRY | AI", "OBJECTIVE: SEEKING CHALLENGING PROJECTS TO GROW AND CONTRIBUTE"]
  const { ref, inView } = useInView({
    triggerOnce: true, // solo se activa una vez
  });
  // Si uso dos condicionales quitar el switch
  const renderSwitch = (topic) => {
    switch (topic) {
      case "Playground":
        return <div>WORKING...</div>
      default:
        return (
          <div className="w-full mb-4 uppercase text-start">
            <div className="w-full text-[1.685rem]">
              {aboutText.map((text, index) =>
                <ScrambleText key={index} text={text} classes="mb-4 " />
              )}
            </div>
          </div>);
    }
  };

  return (
    <section
      id="aboutme"
      ref={ref}
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="crt w-3/5 h-3/4 bg-violet-950 border-2 border-purple-600 rounded-md relative text-shadow shadow-pink-500 text-pink-100 font-alien flex justify-center items-center">
        {!animationEnd && inView ? (
          <div className="w-full h-full p-4 flex justify-center items-center text-6xl">
            <ScrambleText
              text="Booting up..."
              setAnimation={setAnimationEnd}
            />
          </div>
        ) : (
          <div id="aboutText" className=" w-full h-full px-10 py-2 relative flex flex-col items-start">
            <div className="mt-8 w-full h-full">
              <header className="text-2xl text-start">
                <ScrambleText text="BOOTING SYSTEM: DB-DEV OPS [OK]" />
                <p>--------------------------------------------------</p>
                <ScrambleText text="INITIATING PERSONAL MODULE... [LOADED]" />
                <ScrambleText text="VERSION: D.BITTAN v1.0.1" />
                <ScrambleText text="LOCATION: MALAGA, SPAIN" />
                <p>--------------------------------------------------</p>
              </header>
              <div className="w-fit mt-6 text-2xl flex gap-8 ">
                <button className={buttonClasses} onClick={() => setAboutTopic("About Me")}>[  ABOUT ME  ]</button>
                {/* <button className={buttonClasses} onClick={() => setAboutTopic("Studies")}>[  STUDIES  ]</button> */}
                <button className={`${buttonClasses} line-through`}/*  onClick={() => setAboutTopic("Playground")} */>[  PLAYGROUND  ]</button>
              </div>
            </div>
            {renderSwitch(aboutTopic)}
          </div>

        )
        }
      </div >
    </section >
  );
}
