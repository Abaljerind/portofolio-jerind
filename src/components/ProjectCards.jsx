import { useLocation } from "react-router-dom";
import { projectList } from "../../data/projects";

export default function ProjectCards() {
  const projectsList = projectList;
  const location = useLocation();
  const filteredProjectList =
    location.pathname === "/project" ? projectsList : projectsList.slice(0, 3);

  return (
    <>
      <section className="projects mt-1 grid gap-8 rounded-xl p-1.5">
        {/* {filteredProjectList.map((item, index) => {
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
        })} */}
        {filteredProjectList.map((item, index) => {
          return (
            <div
              className="flex flex-col-reverse gap-4 rounded-xl bg-white shadow-md dark:bg-[#373737]"
              key={index + 1}
            >
              <div className="space-y-2 p-2.5">
                <h4 className="cursor-pointer font-semibold text-[#373737] md:text-lg dark:text-white">
                  {item.name}
                </h4>
                <p className="text-sm font-medium text-[#858585] md:text-sm dark:text-[#C0C0C0]">
                  {item.about}
                </p>
                <button className="mt-2 w-full cursor-pointer rounded-md bg-[#373737] px-3 py-2 font-semibold text-white hover:bg-[#373737]/90 dark:bg-white dark:text-[#373737] hover:dark:bg-white/90">
                  View Details
                </button>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto h-56 w-full rounded-t-lg object-cover object-top"
              />
            </div>
          );
        })}
      </section>
    </>
  );
}
