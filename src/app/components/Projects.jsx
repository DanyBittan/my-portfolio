export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="w-3/4 h-3/4 relative flex justify-center items-center bg-space2 bg-cover bg-no-repeat rounded-2xl -top-1.5 -left-1.5 z-10">
        <div id="selector" className="w-1/3 h-full text-white ">
          <ul className="flex flex-col justify-evenly items-center h-full text-2xl font-rocket ">
            <li className="rotate-12 left-2 ">Proyecto 1</li>
            <li className="rotate-6 right-3">Proyecto 2</li>
            <li className="right-5">Proyecto 3</li>
            <li className="-rotate-6 right-3">Proyecto 4</li>
            <li className="-rotate-12 left-2">Proyecto 5</li>
          </ul>
        </div>
        <div id="showcase" className="w-2/3 h-full"></div>
      </div>
      <div className="w-3/4 h-3/4 absolute bg-purple-700 rounded-2xl ml-3 mt-3"></div>
      <div className="w-3/4 h-3/4 absolute bg-yellow-500 rounded-2xl"></div>
    </section>
  );
}
