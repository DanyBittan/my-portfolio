import projectData from "@/data/project-data.json";
import Image from "next/image";

export default function ProjectShowcase(prop) {
  const project = projectData[prop.projectName];
  console.log(prop)
  return (
    <div className={`${prop.classes} text-white relative group`}>
      {project.img && (<Image
        src={project?.img}
        alt="Dizmanga picture"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover object-center ${prop.imgStyle} transition-all duration-200 absolute z-0`}
      />)}
      <div className="w-full h-20 bottom-0 bg-purple-950 border-t-2 border-purple-600 absolute z-10 rounded-b-lg flex justify-center items-center text-4xl font-alien">
        <h1>{prop.projectName}</h1>
        <button className="w-8 h-auto bg-gray-200 absolute left-4">aa</button>
      </div>
    </div >
  );
}