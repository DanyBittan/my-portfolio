import { IconBrandGithub, IconBrandLinkedin, IconFileDownload } from '@tabler/icons-react';
export default function SynthIntro() {
  return (
    <section
      id="title"
      className="flex flex-col h-screen w-screen items-center justify-evenly"
    >
      {/* Usar el background como color del texto */}
      <div className="synthTitle w-full font-rocket relative flex ">
        <h1 className="synthTitle text-[1.9rem] lg:text-[8rem] 2xl:text-[10rem] absolute top-1">
          DANIEL BITTAN
        </h1>
        <h1 className=" text-[#ca2673] text-[1.92rem] lg:text-[8.1rem] 2xl:text-[10.1rem]">
          DANIEL BITTAN
        </h1>
        {/* Añadir animación que venga desde el fondo (Profundidad) */}
        <div className="relative w-full flex justify-center">
          <p className="subTitle text-[1.5rem] lg:text-[3rem] bg-clip-text absolute top-1">
            Full Stack Developer
          </p>
          <p className="text-[1.52rem] lg:text-[3.05rem] text-[#b61a63]">Full Stack Developer</p>
        </div>
        <div className="w-full lg:w-[40rem] h-auto flex justify-evenly items-center rounded-full mt-12 px-4 py-2 backdrop-blur-md bg-gradient-to-r from-pink-700/30 via-purple-700/40 to-pink-700/30 border border-pink-400/60 shadow-lg shadow-pink-500/20 ring-2 ring-fuchsia-500/30 transition-all duration-300">
          <a
            href="https://github.com/DanyBittan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 lg:w-24 lg:h-24 flex justify-center items-center rounded-full border-4 border-pink-500 hover:scale-105 transition-transform duration-200 shadow-inner shadow-fuchsia-400/40 bg-black/30"
          >
            <IconBrandGithub stroke={1} width={40} height={40} color="#f72aa3" />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 lg:w-24 lg:h-24 flex justify-center items-center rounded-full border-4 border-blue-400 hover:scale-105 transition-transform duration-200 shadow-inner shadow-blue-300/40 bg-black/30"
          >
            <IconBrandLinkedin stroke={1} width={40} height={40} color="#66d3ff" />
          </a>
          <a
            href="#"
            /* download */
            className="w-16 h-16 lg:w-24 lg:h-24 flex justify-center items-center rounded-full border-4 border-purple-400 hover:scale-105 transition-transform duration-200 shadow-inner shadow-purple-300/40 bg-black/30"
          >
            <IconFileDownload stroke={1.2} width={40} height={40} color="#c084fc" />
          </a>
        </div>
      </div>


    </section>
  );
}
