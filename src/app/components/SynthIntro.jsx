import { IconBrandGithub, IconBrandLinkedin, IconFileCv, IconArrowBadgeDown } from '@tabler/icons-react';
import ScrambleText from './ScrambleText';
export default function SynthIntro() {
  return (
    <section
      id="title"
      className="flex flex-col h-screen w-full items-center justify-evenly"
    >
      {/* Usar el background como color del texto */}
      <div className="w-full flex justify-start absolute px-6 py-6 top-0 text-xl">
        <div className="flex items-center gap-6 bg-black/70 border border-pink-600 px-6 py-3 rounded-md font-rocket text-pink-400 shadow-[0_0_15px_#ff00ff]">
          <span>&gt; ACCESS:</span>
          <a href="https://github.com/DanyBittan" target="_blank" className="hover:text-pink-300 transition-all">GITHUB</a>
          <a href="https://www.linkedin.com/in/danielbittangraells" target="_blank" className="hover:text-pink-300 transition-all">LINKEDIN</a>
          <a href="#" className="hover:text-pink-300 transition-all">CV</a>
        </div>
      </div>
      <div className="synthTitle w-full font-rocket relative flex ">
        <h1 className="synthTitle text-[1.9rem] xs:text-[2.68rem] sm:text-[3.9rem] md:text-[4.8rem] lg:text-[6.2rem] 2xl:text-[10rem] absolute top-1">
          DANIEL BITTAN
        </h1>
        <h1 className=" text-[#ca2673] text-[1.92rem] xs:text-[2.70rem] sm:text-[3.92rem] md:text-[4.82rem] lg:text-[6.22rem] 2xl:text-[10.1rem]">
          DANIEL BITTAN
        </h1>
        <div className="relative w-full flex justify-center">
          <ScrambleText text="Software Developer" classes="subTitle text-[1.45rem] lg:text-[3rem] bg-clip-text absolute top-1" />
          <ScrambleText text="Software Developer" classes="text-[1.46rem] lg:text-[3.05rem] text-[#b61a63]" />
        </div>
        <div className='w-full h-auto flex flex-col justify-center items-center gap-4 text-lg sm:text-xl md:text-2xl lg:text-4xl mt-14'>
          <a href="#aboutme" className="relative flex flex-col gap-4 justify-center items-center">
            <div
              className="flex justify-evenly items-center px-4 py-2 bg-purple-950 border-2 border-purple-600/60 shadow-md shadow-pink-500/30 font-pixelify rounded-xl"
            >
              {Array.from({ length: 4 }).map((i) => (
                <IconArrowBadgeDown
                  key={i}
                  stroke={2}
                  width={50}
                  height={50}
                  className="text-violet-400 drop-shadow-[0_0_10px_#f0f] go-animation"
                />
              ))}
            </div>
          </a>
        </div>
      </div>


    </section >
  );
}
