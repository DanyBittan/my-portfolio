import projectData from "@/data/project-data.json";
import Image from "next/image";
import InfoIcon from "../Icons/InfoIcon";

export default function ProjectShowcase(prop) {
  const project = projectData[prop.projectName];
  console.log(prop);
  return (
    <div className={` ${prop.classes} text-white relative transition-all duration-200 ${!prop.openProject && "cursor-pointer"}`} {...(!prop.openProject && { onClick: () => prop.setOpenProject(prop.projectName) })}>
      {project.img && (<Image
        src={project?.img}
        alt="Project Image"
        fill
        priority
        className={`object-cover object-center absolute z-0`}
      />)}
      <div className={` w-full h-auto py-3 bottom-0 bg-purple-950 border-t-2 border-purple-600 absolute flex justify-center items-center text-3xl font-alien z-10  `}>
        <h1>{prop.projectName}</h1>
      </div>
    </div >
  );
}