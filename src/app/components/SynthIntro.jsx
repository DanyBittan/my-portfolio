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
        <a href="#aboutme" className="button-container">
          <span>About me</span>
          <div className="inner-container"></div>
        </a>
        <a href="#projects" className="button-container">
          <span>My projects</span>
          <div className="inner-container"></div>
        </a>
      </div>
    </section>
  );
}
