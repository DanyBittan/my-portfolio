import project from "@/data/project-data.json";
import Image from "next/image";
export default function ProjectShowcase(prop) {
  const projectName = prop.project;
  console.log(project[projectName]?.img);
  return (
    <div
      id="showcase"
      className="w-2/3 h-full flex flex-col justify-center items-center z-10 rounded-2xl"
    >
      <div
        className={`justify-center items-center ${
          projectName ? "hidden" : "flex"
        }`}
      >
        <Image
          src="/Pictures/synthCar.png"
          width={600}
          height={600}
          alt="Car"
          className="absolute z-0"
        ></Image>
        <h1 className="uppercase font-alien text-6xl text-white bg-violet-900 border-2 border-violet-500 py-4 px-9 rounded-2xl underline z-10 shadow-[8px_8px_0_#ec4899]">
          Choose a project
        </h1>
      </div>

      <div
        className={` w-1/2 h-2/3 rounded-xl crt border border-purple-500 shadow-2xl ${
          !projectName && "hidden"
        }`}
      >
        <header className="h-16 w-full bg-violet-950 rounded-t-xl border-b border-purple-400 font-alien flex items-center uppercase justify-center z-10">
          <h1 className="text-pink-200 text-4xl text-shadow-sm shadow-white">
            {projectName}
          </h1>
        </header>
        <div className="relative w-full h-[calc(100%-4rem)]">
          <Image
            src={project[projectName]?.img}
            fill={true}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt={projectName}
            className="rounded-b-xl"
          />
        </div>
      </div>
    </div>
  );
}
