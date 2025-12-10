import { IconArrowBadgeDown } from '@tabler/icons-react';
import ScrambleText from './ScrambleText';
// import AddsPopup from './AddsPopup';
export default function SynthIntro() {
  return (
    <section
      id="title"
      className="flex flex-col h-screen w-full items-center justify-evenly"
    >
      {/* Usar el background como color del texto */}
      <header className="w-full flex flex-col items-center lg:flex-row lg:justify-between absolute px-6 py-6 top-0 text-md md:text-lg lg:text-xl">
        <nav className="flex flex-wrap w-full sm:w-4/5 lg:w-auto h-14 items-center justify-between gap-6 bg-purple-950/70 border border-pink-600 px-6 py-3 rounded-md font-rocket text-pink-400 shadow-[1px_1px_6px_#ff00ff]">
          <span>&gt; &gt; ACCESS:</span>
          <a href="https://github.com/DanyBittan" target="_blank" className="hover:text-pink-300 transition-all">GITHUB</a>
          <a href="https://www.linkedin.com/in/danielbittangraells" target="_blank" className="hover:text-pink-300 transition-all">LINKEDIN</a>
        </nav>
        <div className='flex w-4/5 sm:w-2/3 lg:hidden font-rocket text-pink-400 transition-all duration-300 bg-purple-950/90  rounded-b-lg cursor-pointer border border-pink-600 shadow-[0_2px_6px_#ff00ff] py-2 text-center'>
          <a href="/CVs/Daniel_Bittan_Graells_CV.pdf" download="Daniel_Bittan_Graells_CV_Es.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer" className='border-r-2 border-pink-600 w-1/2 h-full' >Spanish CV</a>
          <a href="/CVs/Daniel_Bittan_Graells_CV_Eng.pdf" download="Daniel_Bittan_Graells_CV_Eng.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer" className='w-1/2'>English CV</a>
        </div>
        <div className="hidden lg:flex h-14  items-start gap-9 font-rocket text-pink-400 transition-all duration-300 ">
          <span className='py-4 underline text-2xl'>&gt; &gt; Available:</span>
          <div className="hover:text-pink-300 transition-all flex flex-col text-center group">
            <span className='bg-purple-950/80 hover:bg-purple-900/70 rounded-lg pointer group-hover:rounded-b-none border border-pink-600 shadow-[0_0_6px_#ff00ff] px-6 py-3 z-10 cursor-cell'>Download my CV</span>
            <a href="/CVs/Daniel_Bittan_Graells_CV.pdf" download="Daniel_Bittan_Graells_CV_Es.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer" className='opacity-0 -translate-y-10  hover:bg-purple-700 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-300 py-3 z-0 bg-purple-900/90 border-x border-purple-600'>Spanish CV</a>
            <a href="/CVs/Daniel_Bittan_Graells_CV_Eng.pdf" download="Daniel_Bittan_Graells_CV_Eng.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer" className='opacity-0 -translate-y-10 group-hover:opacity-100 hover:bg-purple-700 group-hover:translate-y-0 transition-transform duration-300 py-3 z-0 bg-purple-900/90 border border-purple-600 rounded-b-md'>English CV</a>
          </div>
        </div>
      </header>
      <div className="synthTitle w-full font-rocket relative flex ">
        <h1 className="synthTitle text-[1.9rem] xs:text-[2.68rem] sm:text-[3.9rem] md:text-[4.8rem] lg:text-[6.2rem] 2xl:text-[10rem] absolute top-1">
          DANIEL BITTAN
        </h1>
        <h1 className=" text-[#ca2673] text-[1.92rem] xs:text-[2.70rem] sm:text-[3.92rem] md:text-[4.82rem] lg:text-[6.22rem] 2xl:text-[10.1rem]">
          DANIEL BITTAN
        </h1>
        <div className="relative w-full flex justify-center">
          <ScrambleText text="Full stack web developer" classes="subTitle text-[1.45rem] lg:text-[3rem] bg-clip-text absolute top-1" />
          <ScrambleText text="Full stack web developer" classes="text-[1.46rem] lg:text-[3.05rem] text-[#b61a63]" />
        </div>
        <div className='w-full h-auto flex flex-col justify-center items-center mt-14'>
          <a href="#aboutme" className="relative flex flex-col gap-4 justify-center items-center">
            <div
              className="flex justify-evenly items-center px-2 py-2 bg-purple-950 border-2 border-purple-600/60 shadow-md shadow-pink-500/30 font-pixelify rounded-xl"
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
      {/* <AddsPopup /> */}
    </section >
  );
}
