export default function Home() {
  return (
    <main>
      {/* puedo usar el section para sustituir el div inferior */}
      <div className="synthwave-background z-0" />
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
      <section className="w-full h-screen flex justify-center items-center">
        <div className="w-4/5 h-4/5 bg-green-950 border-2 border-green-700 rounded-lg shadow-lg flex justify-center items-center">
          <h1 className="text-6xl text-green-600 font-alien">Hola Mundo</h1>
        </div>
      </section>
    </main>
  );
}

/* <div className=" text-white font-bold">
<span className="text-6xl">Bienvenido a mi portfolio</span>
<div className="css-selector text-5xl">Soy Daniel Bittan Graells</div>
</div> */

/* <HeaderMenu></HeaderMenu>
      <FileDisplay>
        <div id="inicio" className="w-full h-full text-gray-200">
          <span className="font-oswald text-6xl w-full h-auto">
            ¡Bienvenido a mi portfolio!
          </span>
          <div></div>
        </div>
      </FileDisplay> */
