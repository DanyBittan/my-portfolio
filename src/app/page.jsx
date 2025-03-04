export default function Home() {
  return (
    <main>
      {/* puedo usar el section para sustituir el div inferior */}
      <section id="title" className="synthwave-background z-0" />
      <div className="flex flex-col h-screen w-auto items-center justify-evenly">
        {/* Usar el background como color del texto */}
        <div className="synthTitle text-[10rem] font-pixel">
          <span>DANIEL BITTAN</span>
        </div>
        <div className="w-full h-auto text-3xl text-white flex justify-evenly uppercase">
          <button className="button-container">
            <strong>About me</strong>
            <div className="inner-container"></div>
          </button>
          <button className="button-container">
            <strong>My projects</strong>
            <div className="inner-container"></div>
          </button>
        </div>
      </div>
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
