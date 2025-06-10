import projectData from "@/data/project-data.json";
import Image from "next/image";
export default function ProjectShowcase(prop) {
  const projectName = prop.project;
  console.log(projectData[projectName]?.img);
  return (
    <div
      id="showcase"
      className="w-2/3 h-full flex flex-col justify-center items-center z-10"
    >
      {!projectName ? (
        /* When there is no selected project this is the default view  */
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
      ) : (
        /* Showcase of the project */
        <div
          id="showcase-container"
          className={` w-1/2 h-2/3 rounded-xl crt border border-purple-500 shadow-2xl shadow-pink-800 ${
            !projectName && "hidden"
          }`}
        >
          <header className="h-16 w-full bg-violet-950 rounded-t-xl border-b border-purple-400 font-alien flex items-center uppercase justify-center z-10">
            <h1 className="text-pink-200 text-4xl text-shadow-sm shadow-pink-400">
              {projectName}
            </h1>
          </header>
          <div className="relative w-full h-[calc(100%-4rem)]">
            <Image
              src={projectData[projectName]?.img}
              fill={true}
              sizes="(max-width: 768px) 100vw, 33vw"
              alt={projectName}
            />
          </div>
          <div
            id="description"
            className="w-full h-auto p-4 bg-white rounded-b-xl"
          >
            <p></p>
          </div>
          <div className="w-full h-10 mt-6 flex justify-start items-center">
            {projectData[projectName]?.language.map((lang) => {
              return (
                <span
                  key={lang}
                  className="w-auto h-auto border bg-violet-950 border-purple-400 font-rocket text-pink-200 text-shadow text-xl shadow-pink-400 rounded-2xl py-1 px-4 mx-1"
                >
                  {lang}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
