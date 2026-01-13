import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { projectList } from "../../data/projects";
import { IoMdArrowBack } from "react-icons/io";

const ProjectDetail = () => {
  const params = useParams();

  const detail = projectList.find(
    (project) => project.id === Number(params.id),
  );

  /*
    TODO:
    ! tambah di projects My role
    ! tambah di projects Fitur yang tersedia
    ! kasih style untuk Tech yang digunakan sama dengan komponen MySkills
    ! tambah di projects link ke github
    ! tambah tag a di button untuk ke github nya.
     */
  return (
    <section className="">
      <ScrollRestoration />
      <header className="">
        <Link to="/project">
          <IoMdArrowBack className="my-2 size-6 cursor-pointer" />
        </Link>
        <img src={detail?.image} alt={detail?.name} />
        <div className="">
          <h1 className="">{detail?.name}</h1>
          <p className="">{detail?.about}</p>
        </div>
      </header>

      <main className="">
        <div className="">
          <h2 className="">My Role</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            laudantium qui quis deserunt dignissimos a obcaecati autem doloribus
            alias cupiditate.
          </p>
        </div>

        <div className="">
          <h2 className="">Key Features</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>

        <div className="">
          <h2 className="">Technologies Used</h2>
          <p className="">{detail?.tech}</p>
        </div>

        <div className="mt-4 flex gap-2.5">
          <button className="buttons-project">View GitHub Repository</button>
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
