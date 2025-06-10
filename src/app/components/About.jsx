"use client";
import { useState } from "react";
import ScrambleText from "./ScrambleText";
export default function About() {
  const [animationEnd, setAnimationEnd] = useState(false);
  return (
    <section
      id="aboutme"
      className="w-full h-screen flex justify-center items-center "
    >
      <div className="crt w-3/4 h-3/4 bg-violet-950 border-2 border-purple-600 rounded-md relative text-shadow shadow-violet-300 text-pink-100 font-alien flex justify-center items-center">
        {!animationEnd ? (
          <ScrambleText setAnimation={setAnimationEnd} />
        ) : (
          <div id="aboutText" className=" w-3/5 h-full p-4 absolute left-0">
            <h1 className="mt-8 ml-10 text-6xl ">About Me</h1>
            <div className="text-2xl h-fit ml-8 font-rocket mt-14 uppercase ">
              <p className="mt-8">
                My name is Daniel Bittan Graells. I am a software developer
                based in Malaga, Spain.
              </p>
              <p className="mt-8">
                I started my journey in the world of programming two years ago,
                and since then, I have fallen in love with it.
              </p>
              <p className="mt-8">
                I am looking to participate in exciting projects that allow me
                to continue learning and growing as a developer while writing
                clean and well-structured code.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
