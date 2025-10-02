import projectData from "@/data/project-data.json";
import Image from "next/image";


export default function ProjectShowcase(prop) {
  const projectName = prop.projectName;
  const project = projectData[projectName];
  const isOpen = prop.openProject
  console.log(project)
  return (
    <div className={` ${prop.classes} text-white relative transition-all border-purple-600 duration-200 ${!isOpen && "cursor-pointer"}`} {...(!isOpen && { onClick: () => prop.setOpenProject(projectName) })}>
      {project.img && (<Image
        src={project?.img}
        alt="Project Image"
        fill
        priority
        className={`object-cover object-center absolute z-0`}
      />)}
      {isOpen ?
        <div className="w-full h-2/6 bg-gradient-to-b from-white/0 via-purple-950 to-purple-950 absolute bottom-0 z-10 p-5">
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-5">{projectName}</h1>
          <p className="text-xl md:text-2xl lg:text-3xl">{project.description}</p>
          <div className="w-full h-auto absolute bottom-6">
            {project.language.map((lang, index) =>
              <span key={index} className="text-2xl mr-3 border-2 border-purple-500 px-4 py-2 rounded-full shadow-sm shadow-purple-500">{lang}</span>
            )}
          </div>
        </div>
        : <div className="w-full h-auto py-3 bottom-0 bg-gradient-to-t from-purple-950 via-purple-900 to-white/0 lg:bg-purple-950 lg:border-t-2 border-purple-600 absolute flex justify-center items-center text-2xl 2xl:text-3xl z-10">
          <h1>{projectName}</h1>
        </div>
      }
      {isOpen &&
        <div className="w-1/2 md:1/4 h-14 absolute top-4 right-4 flex justify-end items-center gap-3 text-xl md:text-2xl lg:text-3xl">
          {project?.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-1/2 sm:w-1/3 md:w-1/4 h-full flex justify-center items-center border shadow-md shadow-pink-900  border-purple-800 bg-purple-950 hover:bg-purple-800 transition-all duration-200">TRY IT!</a>}
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-1/2 sm:w-1/3 md:w-1/4 md:1/2 h-full flex justify-center items-center border shadow-md shadow-pink-900 border-purple-800 bg-purple-950 hover:bg-purple-700 transition-all duration-200">Code</a>
        </div>}
    </div >
  );
}