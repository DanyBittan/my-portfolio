import projectData from "@/data/project-data.json";
import Image from "next/image";


export default function ProjectShowcase(prop) {
  const projectName = prop.projectName;
  const project = projectData[projectName];
  const isOpen = prop.openProject
  return (
    <div className={` ${prop.classes} text-white group relative transition-all overflow-hidden border-purple-600 duration-200 ${!isOpen && "cursor-pointer"}`} {...(!isOpen && { onClick: () => prop.setOpenProject(projectName) })}>
      {
        isOpen &&
        <div className="h-20 flex justify-between items-center relative z-10 px-4">
          <button onClick={() => prop.setOpenProject("")} className={`w-auto h-12 text-2xl bg-purple-900 hover:bg-purple-800 px-4 transition-all duration-200 text-shadow-lg shadow-pink-500 text-pink-100 font-rocket shadow-md`}>&lt;</button>
          <div className="w-1/2 md:1/4 h-14 flex justify-end items-center gap-3 text-xl md:text-2xl lg:text-3xl">
            {project?.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-1/2 sm:w-1/3 md:w-1/4 h-full flex justify-center items-center border shadow-md shadow-pink-900  border-purple-800 bg-purple-950 hover:bg-purple-800 transition-all duration-200">TRY IT!</a>}
            {project?.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-1/2 sm:w-1/3 md:w-1/4 md:1/2 h-full flex justify-center items-center border shadow-md shadow-pink-900 border-purple-800 bg-purple-950 hover:bg-purple-700 transition-all duration-200">Code</a>}
          </div>
        </div>
      }
      {
        project.img && (<Image
          src={project?.img}
          alt="Project Image"
          fill
          priority
          className={`object-cover object-center absolute z-0`}
        />)
      }
      {
        isOpen ?
          <div className="w-full h-auto bg-gradient-to-b from-purple-950/70 via-purple-900 to-purple-950 flex border-t-2 text-shadow-xs border-purple-600 flex-col gap-4 absolute bottom-0 z-10 p-5 backdrop-blur-md">
            <h1 id="project-title" className={` text-3xl md:text-4xl lg:text-5xl text-purple-300 underline`}>{projectName}</h1>
            <p className="text-lg md:text-2xl lg:text-3xl mt-2 text-purple-300">{project.description}</p>
            <div className="w-full h-auto flex flex-wrap items-center gap-2 md:gap-4 text-md md:text-2xl">
              <span>MADE WITH:</span>
              {project.language.map((lang, index) =>
                <span key={index} className=" border-2 border-purple-500 px-3 py-1 rounded-full shadow-sm shadow-purple-500">{lang}</span>
              )}
            </div>
          </div>
          : <div className="w-full h-auto py-2 px-4 bottom-0 bg-gradient-to-t md:translate-y-20 md:group-hover:translate-y-0 from-purple-950  via-purple-800/80 to-white/0 absolute transition-all duration-200 text-shadow-sm">
            <h1 className="mb-3 text-2xl 2xl:text-4xl ">{projectName}</h1>
          </div>
      }
    </div >
  );
}