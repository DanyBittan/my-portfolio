import { IconBrandGithub, IconBrandLinkedin, IconFileDownload } from '@tabler/icons-react';
export default function SynthIntro() {
  return (
    <section
      id="title"
      className="flex flex-col h-screen w-auto items-center justify-evenly"
    >
      {/* Usar el background como color del texto */}
      <div className="synthTitle font-rocket relative">
        <h1 className="synthTitle text-[8rem] 2xl:text-[10rem] absolute top-1.5 ">
          DANIEL BITTAN
        </h1>
        <h1 className=" text-[#ca2673] text-[8.1rem] 2xl:text-[10.1rem]">
          DANIEL BITTAN
        </h1>
        {/* Añadir animación que venga desde el fondo (Profundidad) */}
        <div className="relative w-full flex justify-center">
          <p className="subTitle text-[3rem] bg-clip-text absolute top-1">
            Full Stack Developer
          </p>
          <p className="text-[3.05rem] text-[#b61a63]">Full Stack Developer</p>
        </div>
        <div className="w-[36rem] h-auto flex justify-evenly items-center rounded-full mt-12 px-6 py-3 backdrop-blur-md bg-gradient-to-r from-pink-700/30 via-purple-700/40 to-pink-700/30 border border-pink-400/60 shadow-lg shadow-pink-500/20 ring-2 ring-fuchsia-500/30 transition-all duration-300">
          <a
            href="https://github.com/DanyBittan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 flex justify-center items-center rounded-full border-4 border-pink-500 hover:scale-105 transition-transform duration-200 shadow-inner shadow-fuchsia-400/40 bg-black/30"
          >
            <IconBrandGithub stroke={1} width={48} height={48} color="#f72aa3" />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 flex justify-center items-center rounded-full border-4 border-blue-400 hover:scale-105 transition-transform duration-200 shadow-inner shadow-blue-300/40 bg-black/30"
          >
            <IconBrandLinkedin stroke={1} width={48} height={48} color="#66d3ff" />
          </a>
          <a
            href="/CV_Daniel_Bittan.pdf"
            download
            className="w-24 h-24 flex justify-center items-center rounded-full border-4 border-purple-400 hover:scale-105 transition-transform duration-200 shadow-inner shadow-purple-300/40 bg-black/30"
          >
            <IconFileDownload stroke={1.2} width={42} height={42} color="#c084fc" />
          </a>
        </div>
      </div>


    </section>
  );
}
