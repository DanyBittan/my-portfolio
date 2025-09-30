import { IconBrandGithub, IconBrandLinkedin, IconFileDownload, IconArrowBadgeDown } from '@tabler/icons-react';
import Projects from './Projects/Projects';
export default function SynthIntro() {
  return (
    <section
      id="title"
      className="flex flex-col h-screen w-screen items-center justify-evenly"
    >
      {/* Usar el background como color del texto */}
      <div className="synthTitle w-full font-rocket relative flex ">
        <h1 className="synthTitle text-[1.9rem] xs:text-[2.5rem] sm:text-[3.9rem] md:text-[4.8rem] lg:text-[6.2rem] 2xl:text-[10rem] absolute top-1">
          DANIEL BITTAN
        </h1>
        <h1 className=" text-[#ca2673] text-[1.92rem] xs:text-[2.52rem] sm:text-[3.92rem] md:text-[4.82rem] lg:text-[6.22rem] 2xl:text-[10.1rem]">
          DANIEL BITTAN
        </h1>
        {/* Añadir animación que venga desde el fondo (Profundidad) */}
        <div className="relative w-full flex justify-center">
          <p className="subTitle text-[1.6rem] lg:text-[3rem] bg-clip-text absolute top-1">
            Full Stack Developer
          </p>
          <p className="text-[1.61rem] lg:text-[3.05rem] text-[#b61a63]">Full Stack Developer</p>
        </div>
        <div className="w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem] h-auto flex justify-evenly items-center rounded-full mt-12 px-4 py-2 backdrop-blur-md bg-gradient-to-r from-pink-700/30 via-purple-700/40 to-pink-700/30 border border-pink-400/60 shadow-lg shadow-pink-500/20 ring-2 ring-fuchsia-500/30 transition-all duration-300">
          <a
            href="https://github.com/DanyBittan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex justify-center items-center rounded-full border-4 border-pink-500 hover:scale-105 transition-all duration-200 shadow-inner shadow-fuchsia-400/40 bg-black/30"
          >
            <IconBrandGithub stroke={1} width={40} height={40} color="#f72aa3" />
          </a>
          <a
            href="https://www.linkedin.com/in/danielbittangraells"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex justify-center items-center rounded-full border-4 border-blue-400 hover:scale-105 transition-all duration-200 shadow-inner shadow-blue-300/40 bg-black/30"
          >
            <IconBrandLinkedin stroke={1} width={40} height={40} color="#66d3ff" />
          </a>
          <a
            href="#"
            /* download */
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex justify-center items-center rounded-full border-4 border-purple-400 hover:scale-105 transition-all duration-200 shadow-inner shadow-purple-300/40 bg-black/30"
          >
            <IconFileDownload stroke={1.2} width={40} height={40} color="#c084fc" />
          </a>
        </div>
        <div className='w-full h-auto flex flex-col justify-center items-center gap-4 text-lg sm:text-xl md:text-2xl lg:text-4xl mt-20'>
          <span className='bg-gradient-to-b bg-clip-text from-[#ffd319] via-[#ff901f] to-[#ff2975]'>See more about me</span>
          <a href="#aboutme" className="relative flex justify-center items-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
            <IconArrowBadgeDown
              stroke={1}
              width={50}
              height={50}
              color="#f72aa3"
              className="relative border border-purple-500 bg-purple-950 rounded-full p-1"
            />
          </a>

        </div>
      </div>


    </section>
  );
}
