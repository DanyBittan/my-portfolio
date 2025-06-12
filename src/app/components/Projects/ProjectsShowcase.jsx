import projectData from "@/data/project-data.json";
import Image from "next/image";

export default function ProjectShowcase(prop) {
  const projectName = prop.project;

  // Bloque: Vista por defecto (sin proyecto seleccionado)
  const DefaultView = (
    <div className="justify-center items-center flex">
      <Image
        src="/Pictures/synthCar.png"
        width={800}
        height={800}
        alt="Car"
        className="absolute z-0"
      />
      <h1 className="uppercase font-alien text-6xl text-white bg-violet-900 border-2 border-violet-500 py-4 px-9 rounded-2xl underline z-10 shadow-[8px_8px_0_#ec4899]">
        Choose a project
      </h1>
    </div>
  );

  // Bloque: Vista de proyecto seleccionado
  const ProjectView = (
    <div
      id="showcase-container"
      className="w-1/2 h-3/4 rounded-xl absolute border border-purple-500 shadow-2xl shadow-pink-800"
    >
      <header className="h-16 w-full bg-violet-950 rounded-t-xl border-b border-purple-400 font-alien flex items-center uppercase justify-center z-10">
        <h1 className="text-pink-200 text-4xl text-shadow-sm shadow-pink-400">
          {projectName}
        </h1>
      </header>
      <div className="relative w-full h-[calc(100%-64px)] rounded-b-xl overflow-hidden group">
        <Image
          src={projectData[projectName]?.img}
          fill={true}
          sizes="(max-width: 768px) 100vw, 33vw"
          alt={projectName}
          className="transition-all duration-500 group-hover:blur-[2px] group-hover:scale-110 pointer-events-none "
        />
        

        {/* Gradiente superpuesto al hacer hover */}
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t font-rocket from-violet-950 to-transparent pointer-events-none flex flex-col justify-end items-end">
          <div className="w-full h-auto px-8 my-2 text-pink-200">
            <p className="text-2xl">{projectData[projectName]?.description}</p>
          </div>
          <div className="w-full h-auto flex gap-2 flex-wrap px-6 py-4 mb-4">
            {projectData[projectName]?.language.map((lang) => (
              <div
                key={lang}
                className="w-auto h-auto border bg-violet-950 border-purple-400 font-rocket text-pink-200 text-shadow text-xl shadow-pink-400 rounded-2xl py-1 px-4 mx-1"
              >
                {lang}
              </div>
            ))}
          </div>
          
        </div>
        {/* Botón de enlace al proyecto */} 
        
      </div>
    </div>
  );

  return (
    <div
      id="showcase"
      className="w-2/3 h-full flex flex-col justify-center items-center z-10 "
    >
      {!projectName ? DefaultView : ProjectView}
    </div>
  );
}
