import projectData from "@/data/project-data.json";
import Image from "next/image";


export default function ProjectShowcase(prop) {
  const projectName = prop.projectName;
  const project = projectData[projectName];
  const isOpen = prop.openProject
  return (
    <div className={` ${prop.classes} text-white relative transition-all duration-200 ${!isOpen && "cursor-pointer"}`} {...(!isOpen && { onClick: () => prop.setOpenProject(projectName) })}>
      {project.img && (<Image
        src={project?.img}
        alt="Project Image"
        fill
        priority
        className={`object-cover object-center absolute z-0`}
      />)}
      {isOpen ?
        <div className="w-full h-2/6 bg-gradient-to-b from-purple-950/10 via-purple-950/80 to-purple-950 absolute bottom-0 z-10 p-5">
          <h1 className="text-4xl mb-5">{projectName}</h1>
          <p className="text-2xl">{project.description}</p>
          <div className="w-full h-auto absolute bottom-6">
            {project.language.map((lang, index) =>
              <span key={index} className="text-2xl mr-3 border-2 border-purple-500 px-4 py-2 rounded-full shadow-sm shadow-purple-500">{lang}</span>
            )}
          </div>
        </div>
        : <div className="w-full h-auto py-3 bottom-0 bg-purple-950 border-t-2 border-purple-600 absolute flex justify-center items-center text-3xl z-10">
          <h1>{projectName}</h1>
        </div>
      }
    </div >
  );
}