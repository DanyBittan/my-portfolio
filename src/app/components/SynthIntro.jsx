export default function SynthIntro() {
  return (
    <section
      id="title"
      className="flex flex-col h-screen w-auto items-center justify-evenly"
    >
      {/* Usar el background como color del texto */}
      <div className="synthTitle font-rocket relative text-[8rem] 2xl:text-[10rem]">
        <h1 className="synthTitle absolute right-0 top-1">DANIEL BITTAN</h1>
        <h1 className=" text-blue-100 text-[8.1rem] 2xl:text-[10.1rem]">
          DANIEL BITTAN
        </h1>
        {/* Añadir animación que venga desde el fondo (Profundidad) */}
        <p className="subTitle text-6xl bg-clip-text">Full Stack Developer</p>
      </div>

      <div className="w-full h-auto text-3xl text-white flex justify-evenly uppercase font-pixel">
        <button className="button-container">
          <strong>About me</strong>
          <div className="inner-container"></div>
        </button>
        <button className="button-container">
          <strong>My projects</strong>
          <div className="inner-container"></div>
        </button>
      </div>
    </section>
  );
}
