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
      className="w-1/2 h-2/3 absolute border border-purple-500 rounded-md  shadow-2xl shadow-pink-800"
    >
      <header className="h-16 w-full bg-violet-950 rounded-t-md border-b border-purple-400 font-alien flex items-center uppercase justify-center z-10">
        <h1 className="text-pink-200 text-4xl text-shadow-sm shadow-pink-400">
          {projectName}
        </h1>
      </header>
      <div className="relative w-full h-[calc(100%-64px)] overflow-hidden rounded-b-md">
        <Image
          src={projectData[projectName]?.img}
          fill={true}
          alt={projectName}
          className="object-cover object-center "
        />
        
      </div>
      
          <div className="w-full h-auto my-6 text-pink-200 font-rocket ">
            <p className="text-2xl ml-1">{projectData[projectName]?.description}</p>
          </div>
          <div className="w-full h-auto flex gap-2 flex-wrap py-4 mb-4">
            {projectData[projectName]?.language.map((lang) => (
              <div
                key={lang}
                className="w-auto h-auto border bg-violet-950 border-purple-400 font-rocket text-pink-200 text-shadow text-xl shadow-pink-400 rounded-2xl py-1 px-4"
              >
                {lang}
              </div>
            ))}
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
