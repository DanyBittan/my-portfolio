export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full h-screen flex justify-center items-center bg-black"
    >
      <div className="w-3/4 h-3/4 relative flex justify-center items-center bg-space2 bg-cover bg-no-repeat rounded-2xl -top-1.5 -left-1.5 z-10">
        <div className="projects-bg h-full absolute inset-0 z-0 rounded-2xl" />
        <div
          id="selector"
          className="w-1/3 h-full text-white flex justify-center items-center"
        >
          <ul className="flex flex-col justify-between items-center h-2/3 text-xl font-rocket ">
            <li className="rotate-12 left-2">Proyecto 1</li>
            <li className="rotate-6 right-3">Proyecto 2</li>
            <li className="right-5">Proyecto 3</li>
            <li className="-rotate-6 right-3">Proyecto 4</li>
            <li className="-rotate-12 left-2">Proyecto 5</li>
          </ul>
        </div>
        <div
          id="showcase"
          className="w-2/3 h-full flex flex-col justify-center items-center z-10 rounded-2xl"
        >
          <h1 className="uppercase font-alien text-6xl text-white text-shadow-lg bg-violet-900 border-4 border-violet-500 py-4 px-9 rounded-2xl underline">
            Pick a project
          </h1>
          <div className="w-1/2 h-2/3 rounded-xl crt border border-purple-500 shadow-2xl hidden">
            <header className="h-10 w-full bg-white rounded-t-xl"></header>
          </div>
        </div>
      </div>
      <div className="w-3/4 h-3/4 absolute bg-purple-800 rounded-2xl ml-3 mt-3"></div>
      <div className="w-3/4 h-3/4 absolute bg-yellow-500 rounded-2xl"></div>
    </section>
  );
}
