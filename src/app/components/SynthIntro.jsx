import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
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
      </div>

      <div className="w-full h-auto text-2xl text-white flex justify-evenly uppercase font-rocket">
        <a href="https://github.com/DanyBittan" target="_blank" rel="noopener noreferrer" className='w-48 h-48 flex justify-center items-center rounded-full z-10 border-4 relative'>
          <IconBrandGithub stroke={1} width={256} height={256} color='#da2777' className='relative -bottom-5'/>
        </a>
        <a href="#aboutme" className='w-48 h-48 flex justify-center items-center z-10 '>
          <IconBrandLinkedin stroke={1} width={256} height={256} />
        </a>
        <a href="#aboutme" className='w-32 h-32 flex justify-center items-center rounded-full z-10 border-4 relative'>
          <IconBrandGithub stroke={1} width={128} height={128} className='relative -bottom-3'/>
        </a>
      </div>
    </section>
  );
}
