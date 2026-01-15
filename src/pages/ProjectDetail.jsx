import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { projectList } from "../../data/projects";
import { IoMdArrowBack } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const ProjectDetail = () => {
  const params = useParams();

  const detail = projectList.find(
    (project) => project.id === Number(params.id),
  );

  return (
    <section className="">
      <ScrollRestoration />
      <header className="space-y-4">
        <Link to="/project">
          <IoMdArrowBack className="mt-2 ml-2 size-6 cursor-pointer dark:text-white" />
        </Link>
        <img
          src={detail?.image}
          alt={detail?.name}
          className="mt-2 mb-4 rounded-md object-cover"
        />
        <div className="space-y-2 p-2 lg:p-4 dark:text-white">
          <h1 className="text-lg font-bold xl:text-xl">{detail?.name}</h1>
          <p className="text-sm xl:text-base">{detail?.about}</p>
        </div>
      </header>

      <main className="space-y-4 p-2 lg:p-4 lg:pt-0 dark:text-white">
        <div className="space-y-2">
          <h2 className="text-lg font-bold xl:text-xl">My Role</h2>
          <p className="text-sm xl:text-base">{detail?.myRole}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-bold xl:text-xl">Key Features</h2>
          <ul className="space-y-1.5">
            {detail?.features.map((item, index) => {
              return (
                <li
                  className="flex items-start gap-2 text-sm xl:text-base"
                  key={index + 1}
                >
                  <span className="">
                    <MdCheckBoxOutlineBlank className="mt-0.5 size-4 text-gray-400 xl:size-5 dark:text-white" />
                  </span>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-lg font-bold xl:text-xl">
            Technologies Used
          </h2>
          <ul className="flex flex-wrap gap-3">
            {detail?.tech.map((item, index) => {
              return (
                <li
                  className="cursor-pointer rounded-lg bg-white px-4 py-2 text-center text-sm font-medium shadow-md transition-all duration-300 hover:scale-110 dark:bg-[#373737] dark:text-white"
                  key={index + 1}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-4 flex gap-2.5">
          <button className="buttons-project">
            <a href={detail?.repo} target="_blank">
              Project Repository
            </a>
          </button>
          <button className="buttons-project">
            <a href={detail?.href} target="_blank">
              Live Preview
            </a>
          </button>
        </div>
      </main>
    </section>
  );
};

export default ProjectDetail;
