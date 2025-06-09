export default function ProjectsSelector({ setProject }) {
  const projectList = ["DizManga", "Calculator", "Timer"];
  const listProject = (rotation, name) => {
    return (
      <li
        className={`rotate-[${rotation}deg]`}
        onClick={(e) => setProject(e.target.innerText)}
        key={name}
      >
        {name}
      </li>
    );
  };
  let rotation = 7;
  return (
    <div
      id="selector"
      className="w-1/3 h-full text-white flex justify-center items-center"
    >
      <ul className="flex flex-col justify-evenly  items-center h-2/3 text-2xl font-rocket ">
        {projectList.map((projectName) => {
          const item = listProject(rotation, projectName);
          rotation -= 7;
          return item;
        })}
      </ul>
    </div>
  );
}
