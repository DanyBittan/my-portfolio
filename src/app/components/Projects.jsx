export default function Projects() {
  return (
    <section id="projects" className="w-full h-screen">
      <div className="p-20 w-full h-full flex justify-center items-center relative">
        <div id="selector" className="bg-white w-1/3 h-full text-black">
          <ul className="flex flex-col justify-evenly items-center h-full">
            <li className="rotate-12 left-2">proyecto 1</li>
            <li className="rotate-6 right-3">proyecto 2</li>
            <li className="right-5">proyecto 3</li>
            <li className="-rotate-6 right-3">proyecto 4</li>
            <li className="-rotate-12 left-2">proyecto 5</li>
          </ul>
        </div>
        <div id="selector" className="bg-black w-1/2 h-full"></div>
      </div>
    </section>
  );
}
