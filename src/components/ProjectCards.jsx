import { Link, useLocation } from "react-router-dom";
import { projectList } from "../../data/projects";

export default function ProjectCards() {
  const projectsList = projectList;
  const location = useLocation();
  const filteredProjectList =
    location.pathname === "/project" ? projectsList : projectsList.slice(0, 3);

  return (
    <>
      <section className="projects mt-1 grid gap-8 rounded-xl p-1.5">
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
                <div className="mt-4 flex gap-2.5 text-center">
                  <Link to={`/project/${item.id}`} className="buttons-project">
                    View Details
                  </Link>
                  <button className="buttons-project">
                    <a href={item.href} target="_blank">
                      Live Preview
                    </a>
                  </button>
                </div>
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
