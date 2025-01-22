export default function Home() {
  return (
    <main>
      {/* puedo usar el section para sustituir el div inferior */}
      <section className="synthwave-background z-0" />
      <div className="flex flex-col h-screen w-auto items-center justify-evenly">
        <div className="text-blue-400 text-[10rem] font-pixel tracking-tighter">
          <span className="absolute">FULL STACK DEVELOPER</span>
          <span className="text-shadow shadow-blue-600 animate-pulse">
            FULL STACK DEVELOPER
          </span>
        </div>
        <div className="w-full h-auto text-6xl text-white flex justify-evenly">
          <button>a</button>
          <button>a</button>
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
