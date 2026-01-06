import { useLocation } from "react-router-dom";
import { projectList } from "../../data/projects";

export default function ProjectCards() {
  const projectsList = projectList;
  const location = useLocation();
  const filteredProjectList =
    location.pathname === "/project" ? projectsList : projectsList.slice(0, 3);

  return (
    <>
      <div className="projects mt-1 flex flex-col gap-4 rounded-xl p-1.5">
        {filteredProjectList.map((item, index) => {
          return (
            <div
              className="rounded-xl bg-white p-4 shadow-sm dark:border dark:border-[#3D3D3D] dark:bg-[#373737]"
              key={index + 1}
            >
              <a
                className="block"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="mb-3 rounded-xl"
                />
                <p className="cursor-pointer text-[16px] font-semibold text-[#373737] md:text-lg dark:text-white">
                  {item.name}
                </p>
              </a>
              <small className="text-xs font-medium text-[#858585] md:text-sm dark:text-[#C0C0C0]">
                {item.tech}
              </small>
            </div>
          );
        })}
      </div>
    </>
  );
}
