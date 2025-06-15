"use client";

import Image from "next/image";
import { useState } from "react";
import ScrambleText from "./ScrambleText";
import { useInView } from "react-intersection-observer";


export default function About() {
  const [animationEnd, setAnimationEnd] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // solo se activa una vez
    threshold: 0.3,     // % visible antes de activar (30%)
  });

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
              text="Welcome to my portfolio!"
              setAnimation={setAnimationEnd}
            />
          </div>
        ) : animationEnd ? (
          <div id="aboutText" className=" w-full h-full p-4">
            <h1 className="text-center mt-8 ml-10 text-6xl">About Me</h1>
            <div className="w-full h-3/5 font-rocket mt-14 uppercase text-start flex justify-around items-center gap-4 ">
              <div className="w-2/4 text-2xl ">
                <ScrambleText text="Hi, I am Daniel Bittan Graells — a software developer based in Malaga, Spain." classes="mt-10" />
                <ScrambleText text="I am a vivid dreamer, I love comics, movies, and video games. I am passionate about technology and I love to learn new things every day." classes="mt-10" />
                <ScrambleText text="So if you are looking for a developer who is always willing to learn and improve, you found the right person!" classes="mt-10" />
              </div>
              <div className="w-1/3 h-full relative shadow-[2px_2px_8px_#000000] rounded-md overflow-hidden">
                <Image src={"/Pictures/space2.jpg"} alt="A picture of me is missing" fill={true} className="object-cover" />
              </div>

            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
